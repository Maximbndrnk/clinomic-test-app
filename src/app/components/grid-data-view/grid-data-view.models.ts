export interface LabelValue {
  label: string,
  value: any;
}

export interface GridDataTableItem {
  time: number,
  value: string;
}

export interface GridDataTableColumn {
  columnDef: string,
  header: string,
  cell: Function;
}

export enum TimePeriodsType {
  FiveMin = 1,
  ThirtyMin = 2,
  OneHour = 3,
}
