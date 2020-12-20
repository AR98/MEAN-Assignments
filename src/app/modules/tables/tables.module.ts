import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaulttableComponent } from './defaulttable/defaulttable.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [DefaulttableComponent],
  imports: [
    CommonModule,
    DataTablesModule
  ],
  exports: [DefaulttableComponent]
})
export class TablesModule { }
