import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {

  constructor(private ActivatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.ActivatedRoute.snapshot.data);
  }

}
