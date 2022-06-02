import { Component, Input, OnInit } from '@angular/core';
import { TableColumns } from '../../../../core/interfaces/table-columns.interface';

@Component({
  selector: 'ceccoff-table-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent<T> implements OnInit {
  @Input() column: TableColumns<T>;

  constructor() {}

  ngOnInit(): void {}
}
