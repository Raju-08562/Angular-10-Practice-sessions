import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { AdminDeleteGuardGuard } from './admin-delete-guard.guard';
import { AdminEditGuardGuard } from './admin-edit-guard.guard';
import { AdminGuard } from './admin.guard';

import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { CanDeactivatechangesGuard } from './can-deactivatechanges.guard';
import { ContactsComponent } from './contacts/contacts.component';
import { LoansComponent } from './loans/loans.component';
import { GenericLoginComponent } from './members/generic-login/generic-login.component';
import { ProductsComponent } from './products/products.component';
import { ResolveGuard } from './resolve.guard';
import { SignupComponent } from './users/signup/signup.component';
import { UsersModule } from './users/users.module';
import { LoandetailsReactiveComponent } from './loandetails-reactive/loandetails-reactive.component'


const routes: Routes = [
  {
    //Dynamic Routing 1 -- http://localhost:4200/raju/Products/10
    path: 'Products/:ProductId',
    component: ProductsComponent
  },
  {
    //Dynamic Routing 2 -- http://localhost:4200/raju/Products/10/PhotoId/20
    path: 'Products/:ProductId/PhotoId/:PhotoId',
    component: ProductsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'Home',
    //redirectTo
    redirectTo: 'loans' // This is the path to redirect.
  },
  {
    path: 'loans',
    component: AddLoansComponent,
    //named routing or multiple routing
    outlet: 'routerxyz',
    //children routing
    children: [
      {
        path: 'addnew',
        component: LoansComponent,
      }
    ]
  },
  {
    //Resolved data is loaded before route is activated.
    path: 'loans',
    component: LoansComponent,
    resolve: {
      data: ResolveGuard

    }
  },
  {
    path: 'members',
    component: GenericLoginComponent,
    outlet: 'router1'
  },
  {
    path: "contacts",
    component: ContactsComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  { path: 'lazyroute', loadChildren: () => import('./lazyloading/lazyloading.module').then(m => m.LazyloadingModule) },
  {
    path: 'Admin', canActivate: [AdminGuard],
    children:
      [
        {
          path: '', component: AdminComponent
        }
        // ,
        // {
        //   path: '',canActivateChild: [AdminDeleteGuardGuard],children: [{ path: 'delete', component: AdminDeleteComponent }]
        // },
        // {
        //   path: '',canActivateChild: [AdminEditGuardGuard],children: [{ path: 'edit', component: AdminEditComponent }]
        // }
      ]

  },
  {
    path: 'lHome',
    canDeactivate: [CanDeactivatechangesGuard],
    component: LoansComponent
  },
  {
    path: 'ReactiveForm',
    component: LoandetailsReactiveComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
