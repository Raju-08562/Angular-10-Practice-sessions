import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatMemberComponent } from './creat-member/creat-member.component';
import { GenericLoginComponent } from './generic-login/generic-login.component';



@NgModule({
  declarations: [
    CreatMemberComponent,
    GenericLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    CreatMemberComponent ,
    GenericLoginComponent
  ]
})
export class MembersModule { }
