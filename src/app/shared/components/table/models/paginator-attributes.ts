export class PaginatorAttributes {
  length: number;
  pageIndex: number = 0;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 20, 100];
  showFirstLastButtons: boolean = true;
}
