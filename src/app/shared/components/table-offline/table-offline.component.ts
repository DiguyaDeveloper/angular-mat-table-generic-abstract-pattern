import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { TableColumns } from '../../../core/interfaces/table-columns.interface';
import { Table } from '../table/table.class';

@Component({
  selector: 'ceccoff-table-offline',
  templateUrl: './table-offline.component.html',
  styleUrls: ['./table-offline.component.scss'],
})
export class TableOfflineComponent<T> implements OnInit {
  @Input() table: Table<T>;
  @Input() columns: TableColumns<T>[];
  @Input() selectable = false;
  @Input() expandable: TemplateRef<HTMLElement>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.table.dataSource.paginator = this.paginator;
  }
}
