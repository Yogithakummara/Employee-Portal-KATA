import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    GridComponent
  ]

  
})
export class GridModule {

 }
