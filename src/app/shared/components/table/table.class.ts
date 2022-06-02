import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject, Observable } from "rxjs";
import { TableSort, TablePage } from "./models/filter.model";
import { Page } from "./models/page.model";

export class Table<T> {
  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>([]);
  dataSelection = new SelectionModel<T>(true, []);
  dataExpanded: T;
  isLoading: boolean;

  currentSort: BehaviorSubject<TableSort> = new BehaviorSubject(
    new TableSort({})
  );

  currentPage: BehaviorSubject<TablePage> = new BehaviorSubject(
    new TablePage({})
  );

  setDataSourcePaginated(value: Page<T>): void {
    this.dataSource.data = value.content || [];
    this.currentPage.value.page = value.pageable?.pageIndex;
    this.currentPage.value.length = value.pageable?.length;
  }

  setSort(filter: TableSort): void {
    this.currentSort.next({ ...this.currentSort.value, ...filter });
  }

  setPage(page: TablePage): void {
    this.currentPage.next({ ...this.currentPage.value, ...page });
  }
}
