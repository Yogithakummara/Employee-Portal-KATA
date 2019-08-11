import { Component, OnInit } from '@angular/core';
import {GridService} from './grid.service';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  title:String = 'Employee List ';
  employees: any;
  constructor(private gridService:GridService) { }

  ngOnInit() {
    this.gridService.getAllEmployee().subscribe((response)=>{
      this.employees=response;
    });
    
  }

}
