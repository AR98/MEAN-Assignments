import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreachartComponent } from './areachart/areachart.component';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';



@NgModule({
  declarations: [AreachartComponent,BarchartComponent,PiechartComponent],
  imports: [
    CommonModule
  ],
  exports: [AreachartComponent,BarchartComponent,PiechartComponent]
})
export class ChartsModule { }
