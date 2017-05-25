import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent }   from './banking/account/account.component';
import { AccountsComponent }   from './banking/accounts/accounts.component';
import { BudgetComponent } from "./banking/budget/budget.component"
import { CategoriesComponent } from "./banking/categories/categories.component"
import { TransactionsComponent }   from './banking/transactions/transactions.component';

const routes: Routes = [
  { path: '', redirectTo: '/transactions', pathMatch: 'full' },
  { path: 'account',  component: AccountComponent },
  { path: 'accounts',  component: AccountsComponent },
  { path: 'budget', component: BudgetComponent },
  { path: "categories", component: CategoriesComponent },
  { path: 'transactions',  component: TransactionsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
