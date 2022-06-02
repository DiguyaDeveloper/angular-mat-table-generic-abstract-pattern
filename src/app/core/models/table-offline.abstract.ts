import { Table } from '../../shared/components/table/table.class';
import { TableColumns } from '../interfaces/table-columns.interface';

export abstract class TableOfflineAbstract<T> {
  table: Table<T> = new Table<T>();
  columns: TableColumns<T>[];

  abstract getColumns(): TableColumns<T>[];
}
