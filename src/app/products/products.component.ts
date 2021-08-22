import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

   prodid=0;
   photoid =0;
  constructor(private activatedRoute : ActivatedRoute) {
    this.activatedRoute.params.subscribe((params)=>{
      console.log(params);
      const param = params;
      this.photoid = param.PhotoId;
      this.prodid = param.ProductId;

    })
   }

  ngOnInit(): void {
  }

}
