import { LabelValue, TimePeriodsType } from "./grid-data-view.models";


export const TIME_PERIODS_SELECT_OPTIONS: LabelValue[] = [
  {value: TimePeriodsType.FiveMin, label: '5 Min'},
  {value: TimePeriodsType.ThirtyMin, label: '30 Min'},
  {value: TimePeriodsType.OneHour, label: '1 Hour'},
];
