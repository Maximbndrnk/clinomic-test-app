import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDataViewComponent } from './grid-data-view.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatTableModule } from "@angular/material/table";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { By } from "@angular/platform-browser";
import { MatSelect } from "@angular/material/select/select";

describe('GridDataViewComponent', () => {
  let component: GridDataViewComponent;
  let fixture: ComponentFixture<GridDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridDataViewComponent ],
      imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should \'Please select time period\' be visible', () => {
    const el = fixture.nativeElement.querySelector('#selectPeriodMessage');
    expect(el).toBeTruthy();
  });

  it('should span message is equal to \'Please select time period\'', () => {
    const el = fixture.nativeElement.querySelector('#selectPeriodMessage');
    expect(el.textContent).toEqual('Please select time period');
  });

  it('should have options for select input', () => {
    expect(component.selectOptions).toBeTruthy();
  });

  it('length of options for select input should be >= 3', () => {
    expect(component.selectOptions.length).toBeGreaterThanOrEqual(3);
  });

  it('should select input be visible', () => {
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('#dropdown')).nativeElement;
    expect(select).toBeTruthy();
  });

  it('columns variable should have length greater than 1', () => {
      // @ts-ignore
    component.onValueSelected({source:{}, value: 3});
    fixture.detectChanges();
    expect(component.columns.length).toBeGreaterThanOrEqual(1);
  });

  it('displayedColumns first item should be \'00:00\'', () => {
      // @ts-ignore
    component.onValueSelected({source:{}, value: 1});
    fixture.detectChanges();
    expect(component.displayedColumns[0]).toEqual('00:00');
  });

  it('dataSource variable should have length greater than 1', () => {
      // @ts-ignore
    component.onValueSelected({source:{}, value: 1});
    fixture.detectChanges();
    expect(component.dataSource.length).toBeGreaterThanOrEqual(1);
  });


});
