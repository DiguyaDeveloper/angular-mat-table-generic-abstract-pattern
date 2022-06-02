import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableColumns } from '../../core/interfaces/table-columns.interface';
import {
  InventoryProduct,
  TableService,
} from '../../core/services/list.service';
import { Table } from '../../shared/components/table/table.class';

@Component({
  selector: 'app-example-table-offline',
  templateUrl: './example-table-offline.component.html',
  styleUrls: ['./example-table-offline.component.scss'],
})
export class ExampleTableOfflineComponent implements OnInit {
  @ViewChild('image', { static: true }) image!: TemplateRef<HTMLElement>;

  constructor(private _tableService: TableService<InventoryProduct>) {}

  table: Table<InventoryProduct> = new Table<InventoryProduct>();
  columns: TableColumns<InventoryProduct>[];

  ngOnInit(): void {
    this.columns = this.getColumns();
    this.getList();
  }

  getList(): void {
    this._tableService
      .getAll(0, 14, 'number', 'asc', 'api/apps/ecommerce/inventory/products')
      .subscribe((response) => {
        this.table.setDataSourcePaginated(response);
      });
  }

  getColumns(): TableColumns<InventoryProduct>[] {
    return [
      {
        header: {
          columnDef: 'number',
          displayName: 'Valor',
        },
        cell: {
          getValue: (row: InventoryProduct) => `${row.number}`,
        },
      },
      {
        header: {
          columnDef: 'id',
          displayName: 'Id',
        },
        cell: {
          getValue: (row: InventoryProduct) => `${row.id}`,
        },
      },
      {
        header: {
          columnDef: 'name',
          displayName: 'Name',
        },
        cell: {
          getValue: (row: InventoryProduct) => `${row.name}`,
        },
      },
      {
        header: {
          columnDef: 'icon',
          displayName: 'Icon',
        },
        cell: {
          templateRef: this.image,
        },
      },
    ];
  }

  selection(): void {
    const dataSelection = this.table.dataSelection.selected;
    window.alert(JSON.stringify(dataSelection));
  }
  expanded(): void {
    const dataExpanded = this.table.dataExpanded;
    window.alert(JSON.stringify(dataExpanded));
  }
}
