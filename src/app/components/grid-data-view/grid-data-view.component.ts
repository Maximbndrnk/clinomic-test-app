import { Component, OnInit } from "@angular/core";
import { GridDataTableColumn, GridDataTableItem, LabelValue } from "./grid-data-view.models";
import { TIME_PERIODS_SELECT_OPTIONS } from "./grid-data-view.const";
import { MatSelectChange } from "@angular/material/select";
import { generateTableColumns, generateTableDta } from "./grid-data-view.helper";


@Component({
  selector: "app-grid-data-view",
  templateUrl: "./grid-data-view.component.html",
  styleUrls: ["./grid-data-view.component.scss"],
  host: { "class": "full-width" },
})
export class GridDataViewComponent implements OnInit {

  public selectOptions: LabelValue[] = TIME_PERIODS_SELECT_OPTIONS;
  public selectedTimePeriod?: number;

  columns: GridDataTableColumn[] = [];
  dataSource: any[] = [];
  displayedColumns: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  public onValueSelected(e: MatSelectChange): void {
    this.columns = [];
    this.columns = generateTableColumns(e.value);
    this.dataSource = generateTableDta(e.value);
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }

}
