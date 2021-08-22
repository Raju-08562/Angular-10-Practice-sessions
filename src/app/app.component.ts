import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Application';

  abc() {
    return "Function interpolation"
  }

  obj = {
    name: 'Object data binding interpolation',
    url: 'test.com'
  }
  arr = [1, 2, 3, 4, 5, 6]
  siteurl = window.location.href;

  mouseoverevnt(_min: any) {
    alert("_min");
  }

  name = "";
  isdisabled = true;
  btnclick(name: any) {
    //alert(name + "- Click event triggered")
    //console.log(name)
    //this.name=name;
    this.isdisabled = false;
  }

  // show=false;
  PickColor = "red";
  myarray = ['raju', 'sam', 'lee', 'mark'];

  objarray = [
    {
      name: 'raj',
      age: 27,
      mail: 'aass.com'
    }, {
      name: 'lee',
      age: 37,
      mail: 'aass.com'
    }, {
      name: 'mark',
      age: 23,
      mail: 'aass.com'
    }
  ]

  getUser(uname: any) {
    console.log(uname);
  }

  stylecolor="yellow";
  styletextalign='center';
  changebtncolor()
  {
    this.stylecolor='black'
  }
  err=true;
  data="EXAMPLE";
  num=0.23;
  getdata(d: any)
  {
    console.log(d.key);
  }
  clientArray = [
    { clientId : 1, Name : 'Raju' , Address: 'Hyd'},
    { clientId : 2, Name : 'Mark' , Address: 'USA'},
    { clientId : 3, Name : 'Ben' , Address: 'Downtown'},
    { clientId : 4, Name : 'John' , Address: 'Captown'},
    { clientId : 5, Name : 'Steve' , Address: 'Old city'}
  ];
}


