import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-k194060843',
  templateUrl: './k194060843.component.html',
  styleUrls: ['./k194060843.component.css']
})
export class K194060843Component implements OnInit {
  productList: any;

  constructor(private _service: ExampleService) { }

  ngOnInit(): void {
    this._service.getPDList().subscribe(
      {
        next: (data) => {this.productList =data
        }
      }
    )
  }

}
