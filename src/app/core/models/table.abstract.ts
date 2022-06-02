import {
  catchError,
  combineLatest,
  map,
  Observable,
  of,
  switchMap,
  take,
} from 'rxjs';
import {
  TablePage,
  TableSort,
} from '../../shared/components/table/models/filter.model';
import { Page } from '../../shared/components/table/models/page.model';
import { Table } from '../../shared/components/table/table.class';
import { TableColumns } from '../interfaces/table-columns.interface';
import { TableService } from '../services/list.service';

export abstract class TablePaginationAbstract<T> {
  table: Table<T> = new Table<T>();
  columns: TableColumns<T>[];

  constructor(protected service: TableService<T>, private pathUrl: string) {
    combineLatest([this.table.currentPage, this.table.currentSort])
      .pipe(
        switchMap(([sortChange, currentPage]) => {
          this.table.isLoading = true;
          return this.getAll({
            ...sortChange,
            ...currentPage,
          });
        }),
        map((data) => {
          this.table.setDataSourcePaginated(data);
          this.table.isLoading = false;
          return data;
        }),
        catchError(() => {
          this.table.isLoading = false;
          return of([]);
        })
      )
      .subscribe();
  }

  abstract getColumns(): TableColumns<T>[];

  getAll({
    page,
    size,
    order,
    sort,
  }: TableSort & TablePage): Observable<Page<T>> {
    return this.service
      .getAll(page, size, sort, order, this.pathUrl)
      .pipe(take(1));
  }
}
