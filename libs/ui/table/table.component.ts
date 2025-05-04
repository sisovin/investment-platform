import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data: any[];
  @Input() columns: string[];

  constructor() {}

  ngOnInit(): void {}

  getColumnValue(row: any, column: string): any {
    return row[column];
  }
}
