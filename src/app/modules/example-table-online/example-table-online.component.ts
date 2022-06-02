import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableColumns } from '../../core/interfaces/table-columns.interface';
import { TablePaginationAbstract } from '../../core/models/table.abstract';
import {
  InventoryProduct,
  TableService,
} from '../../core/services/list.service';

@Component({
  selector: 'app-example-table-online',
  templateUrl: './example-table-online.component.html',
  styleUrls: ['./example-table-online.component.scss'],
})
export class ExampleTableOnlineComponent
  extends TablePaginationAbstract<InventoryProduct>
  implements OnInit
{
  @ViewChild('image', { static: true }) image!: TemplateRef<HTMLElement>;

  constructor(protected _tableService: TableService<InventoryProduct>) {
    super(_tableService, 'api/apps/ecommerce/inventory/products');
  }

  ngOnInit(): void {
    this.columns = this.getColumns();
  }

  getColumns(): TableColumns<InventoryProduct>[] {
    return [
      {
        header: {
          columnDef: 'number',
          displayName: 'Valor',
          style: {
            backgroundColor: 'red',
          },
        },
        cell: {
          getValue: (row: InventoryProduct) => `${row.number}`,
          getStyle: (row: InventoryProduct) =>
            this.getStyleRowNumber(row.number),
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

  getStyleRowNumber(value: number): Partial<CSSStyleDeclaration> {
    switch (value) {
      case 1:
        return {
          backgroundColor: 'red',
        };
      case 2:
        return {
          backgroundColor: 'yellow',
        };
      case 3:
        return {
          backgroundColor: 'gray',
        };
      case 4:
        return {
          backgroundColor: 'green',
        };
      case 5:
        return {
          backgroundColor: 'blue',
        };
      default:
        return {
          backgroundColor: 'aquamarine',
        };
    }
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
