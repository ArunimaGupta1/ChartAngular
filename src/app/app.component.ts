import { Component, OnInit } from '@angular/core';
import { FetchService } from './Service/fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title:string='app';
  data1!:any[];
  constructor(private get:FetchService) { }

  ngOnInit(): void {
     this.get.getData().subscribe(
       data => this.data1 = data,
       err => console.log(err),
       ()=>console.log(this.data1)
     );

  }
}
