export class TablePage {
  page?: number;
  size?: number;
  length?: number = 10;
  showFirstLastButtons?: boolean = true;
  pageSizeOptions?: number[] = [5, 10, 20, 100];

  constructor({
    page,
    size,
    length,
    showFirstLastButtons,
    pageSizeOptions,
  }: Partial<TablePage>) {
    this.page = page || 0;
    this.size = size || 10;
    this.length = length || 10;
    this.showFirstLastButtons = showFirstLastButtons || true;
    this.pageSizeOptions = pageSizeOptions || [5, 10, 20, 100];
  }
}

export class TableSort {
  sort?: string;
  order?: "asc" | "desc" | "" = "";

  constructor({ sort, order }: Partial<TableSort>) {
    this.sort = sort;
    this.order = order;
  }
}

export class TableFilter {
  [key: string]: string;
}
