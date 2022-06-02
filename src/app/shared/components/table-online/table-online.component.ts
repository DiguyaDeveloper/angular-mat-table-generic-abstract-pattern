import { Component, Input, TemplateRef } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { TableColumns } from '../../../core/interfaces/table-columns.interface';
import { Table } from '../table/table.class';

@Component({
  selector: 'ceccoff-table-online',
  templateUrl: './table-online.component.html',
  styleUrls: ['./table-online.component.scss'],
})
export class TableOnlineComponent<T> {
  @Input() table: Table<T>;
  @Input() columns: TableColumns<T>[];
  @Input() selectable = false;
  @Input() expandable: TemplateRef<HTMLElement>;

  sortEvent(sortEvent: Sort): void {
    this.table.setSort({
      sort: sortEvent.active,
      order: sortEvent.direction,
    });
  }

  paginationEvent(pageEvent: PageEvent): void {
    this.table.setPage({
      page: pageEvent.pageIndex,
      size: pageEvent.pageSize,
    });
  }
}
