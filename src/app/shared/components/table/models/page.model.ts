export class Page<T> {
  content: T[];
  sort: Sort;
  pageable: Pageable;
}

interface Pageable {
  length: number;
  pageIndex?: number;
  pageSize?: number;
}

interface Sort {
  sort: string;
  order: "asc" | "desc" | "";
}
