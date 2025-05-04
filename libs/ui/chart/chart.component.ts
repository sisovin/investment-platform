import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() data: any[];
  @Input() options: any;

  constructor() {}

  ngOnInit(): void {
    this.initializeChart();
  }

  initializeChart(): void {
    // Initialize chart with data and options
  }
}
