import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-loandetails-reactive',
  templateUrl: './loandetails-reactive.component.html',
  styleUrls: ['./loandetails-reactive.component.css']
})
export class LoandetailsReactiveComponent implements OnInit {

  loanDetails!: FormGroup;
  loanFormUsingBuilder!: FormGroup;
  // loanFormUsingBuilder! : FormBuilder;

  constructor(private fb: FormBuilder) { }

  loanObj = {
    loanName: 'Personal',
    loantype: '',
    // loanDescription : 'asdfsadfsdfsdf', //this is possble to set values to particular controls using patchValue()
    TermsAndConditions: false

  }


  ngOnInit(): void {
    //using Form builder
    this.loanFormUsingBuilder = this.fb.group(
      {
        'fname': new FormControl()

      })

    this.loanDetails = new FormGroup({
      'loanName': new FormControl(),
      'loantype': new FormControl(),
      'loanDescription': new FormControl(),
      'TermsAndConditions': new FormControl()
    })

    // this.loanDetails = new FormGroup({
    //   
    // setting default values
    //   'loanName' : new FormControl('Personal'),
    //   'loantype' : new FormControl(''),
    //   Built in validators single and multiple
    //   'loanDescription' : new FormControl('',[Validators.required,Validators.minLength(10)]),
    //   'TermsAndConditions' : new FormControl('')
    // })

    //setting values to the controls using setValue() and patchValue()
    //this.loanDetails.setValue(this.loanObj);
    this.loanDetails.patchValue(this.loanObj)
  }

  //setting values using setValue() to the controls.


  // Reading  values from controls
  GetFormValues() {
    // console.log(this.loanDetails.value);
    // console.log(this.loanDetails.get('loanName')?.value);
    // console.log(this.loanDetails.valueChanges.subscribe(data => {
    //   console.log(data);
    // }));
    console.log(this.loanFormUsingBuilder.value);
  }
  Formstates() {
    console.log(this.loanFormUsingBuilder.valid);
    console.log(this.loanFormUsingBuilder.invalid);
    console.log(this.loanFormUsingBuilder.pending);
    console.log(this.loanFormUsingBuilder.pristine);
    console.log(this.loanFormUsingBuilder.dirty);
    console.log(this.loanFormUsingBuilder.touched);
    console.log(this.loanFormUsingBuilder.untouched);
  }

}
