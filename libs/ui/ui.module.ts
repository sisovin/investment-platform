import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
import { HoverDirective } from './directives/hover.directive';

@NgModule({
  declarations: [
    ChartComponent,
    TableComponent,
    HoverDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChartComponent,
    TableComponent,
    HoverDirective
  ]
})
export class UiModule { }
