import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() TableData:any;
  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      console.log(this.TableData);
    },3000);
  }

}
