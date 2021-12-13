import { GridDataTableColumn, GridDataTableItem, TimePeriodsType } from "./grid-data-view.models";

const HOURS = 24;

export function generateTableDta(timePeriod: TimePeriodsType): any[] {
  const result: any[] = [];
  let h = 0;
  let m = 0;
  let d = 0;
  let dataQuantity = 3;
  if (timePeriod === TimePeriodsType.FiveMin) {
    for (d = 0; d < dataQuantity; d++) {
      const item: any = {};
      for (h = 0; h < HOURS; h++) {
        for (m = 0; m < 60; m = m + 5) {
          let col = (h + "").padStart(2, "0") + ":" + (m + "").padStart(2, "0");
          let t = getSpecificTimeDate(h, m);
          item[col] = {
            time: t,
            value: "Data: " + col,
          };
        }
      }

      result.push(item);
    }
  }

  if (timePeriod === TimePeriodsType.ThirtyMin) {
    for (d = 0; d < dataQuantity; d++) {
      const item: any = {};
      for (h = 0; h < HOURS; h++) {
        for (m = 0; m < 60; m = m + 30) {
          let col = (h + "").padStart(2, "0") + ":" + (m + "").padStart(2, "0");
          let t = getSpecificTimeDate(h, m);
          item[col] = {
            time: t,
            value: "Data: " + col,
          };
        }
      }

      result.push(item);
    }
  }

  if (timePeriod === TimePeriodsType.OneHour) {
    for (d = 0; d < dataQuantity; d++) {
      const item: any = {};
      for (h = 0; h < HOURS; h++) {
        let col = (h + "").padStart(2, "0") + ":" + (m + "").padStart(2, "0");
        let t = getSpecificTimeDate(h, m);
        item[col] = {
          time: t,
          value: "Data: " + col,
        };
      }

      result.push(item);
    }
  }

  return result;
}

export function generateTableColumns(timePeriod: TimePeriodsType): GridDataTableColumn[] {
  const result: GridDataTableColumn[] = [];
  let h = 0;
  let m = 0;

  if (timePeriod === TimePeriodsType.FiveMin) {
    for (h = 0; h < HOURS; h++) {
      for (m = 0; m < 60; m = m + 5) {
        let col = (h + "").padStart(2, "0") + ":" + (m + "").padStart(2, "0");
        result.push({
          columnDef: col,
          header: col,
          cell: getValue,
        });
      }
    }
  }

  if (timePeriod === TimePeriodsType.ThirtyMin) {
    for (h = 0; h < HOURS; h++) {
      for (m = 0; m < 60; m = m + 30) {
        let col = (h + "").padStart(2, "0") + ":" + (m + "").padStart(2, "0");
        result.push({
          columnDef: col,
          header: col,
          cell: getValue,
        });
      }
    }
  }

  if (timePeriod === TimePeriodsType.OneHour) {
    m = 0;
    for (h = 0; h < HOURS; h++) {
      let col = (h + "").padStart(2, "0") + ":" + (m + "").padStart(2, "0");
      result.push({
        columnDef: col,
        header: col,
        cell: getValue,
      });
    }
  }

  return result;
}


function getSpecificTimeDate(h: number, m: number): number {
  const d: Date = new Date();
  d.setHours(h);
  d.setMinutes(m);
  return d.getTime();
}


function getValue(element: any, col: string ) {
    return `${ element[col]?.value }`;
}
