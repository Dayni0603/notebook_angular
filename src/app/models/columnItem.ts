import {
  NzTableFilterFn,
  NzTableFilterList,
  NzTableSortFn,
  NzTableSortOrder,
} from 'ng-zorro-antd/table';

export interface ColumnItem {
  name: string;
  nzLeft?: boolean;
  nzRight?: boolean;
  sortOrder?: NzTableSortOrder | null;
  sortFn?: NzTableSortFn | null;
  listOfFilter?: NzTableFilterList;
  filterFn?: NzTableFilterFn | null;
  filterMultiple?: boolean;
  sortDirections?: NzTableSortOrder[];
  tooltip?: string;
}

export interface HeaderAction {
  title: string;
  icon?: string;
  url?: string;
  permissions?: string[];
  onClick?(): any;
}
