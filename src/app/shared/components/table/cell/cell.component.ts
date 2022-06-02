import { Component, Input, OnInit } from '@angular/core';
import { TableColumns } from '../../../../core/interfaces/table-columns.interface';

@Component({
  selector: 'ceccoff-table-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss'],
})
export class CellComponent<T> implements OnInit {
  @Input() column: TableColumns<T>;
  @Input() row: T;

  constructor() {}

  ngOnInit(): void {}
}
