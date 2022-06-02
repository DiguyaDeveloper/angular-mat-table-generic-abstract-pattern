import { ElementRef, TemplateRef } from "@angular/core";
interface TableColumnHeader {
  displayName: string;
  /**
   * Definition of column data *required to material table
   */
  columnDef: string;
  /**
   * Define if column has sortable
   */
  disableSort?: boolean;
  /**
   * Custom style to header
   */
  style?: Partial<CSSStyleDeclaration>;
}

interface TableColumnCell<T> {
  /**
   * Value to display in cell
   */
  getValue: (value: T) => string;
  /**
   * Custom style to cell
   */
  getStyle?: (value?: T) => Partial<CSSStyleDeclaration>;
}

interface TableColumnCellTemplate<T> {
  /**
   * Template to display in cell
   */
  templateRef: TemplateRef<HTMLElement>;
  /**
   * Add action to click a template
   */
  action?: (value: T) => void;
}

interface TableColumnFooter<T> {
  /**
   * Value to display in cell
   */
  getValue: (value: T[]) => string;
  /**
   * Custom style to cell
   */
  getStyle?: (value?: T[]) => Partial<CSSStyleDeclaration>;
}

interface TableColumnFooterTemplate<T> {
  /**
   * Template to display in cell
   */
  templateRef: TemplateRef<HTMLElement>;
  /**
   * Add action to click a template
   */
  action?: (value: T) => void;
}

export interface TableColumns<T = object> {
  header: TableColumnHeader;
  cell: Partial<TableColumnCell<T>> & Partial<TableColumnCellTemplate<T>>;
  footer?: Partial<TableColumnFooter<T>> &
    Partial<TableColumnFooterTemplate<T>>;
}
