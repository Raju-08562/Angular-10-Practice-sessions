import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsersModule} from './users/users.module'
import {MembersModule} from './members/members.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoansComponent } from './loans/loans.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import {LoandetailsReactiveComponent} from './loandetails-reactive/loandetails-reactive.component'

// import {LazyloadingModule} from './lazyloading/lazyloading.module'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoansComponent,
    ContactsComponent,
    AddLoansComponent,
    ProductsComponent,
    AdminComponent,
    LoandetailsReactiveComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    MembersModule,
    FormsModule,
    ReactiveFormsModule
    // LazyloadingModule
  ],
  providers: [
    // {
    //   provide: LocationStrategy,
    //   useClass: HashLocationStrategy
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
