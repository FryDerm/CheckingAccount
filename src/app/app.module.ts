import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";

import { AccountComponent } from "./banking/account/account.component"
import { AccountsComponent } from "./banking/accounts/accounts.component"
import { BudgetComponent } from "./banking/budget/budget.component"
import { CategoriesComponent } from "./banking/categories/categories.component"
import { TransactionsComponent } from "./banking/transactions/transactions.component"

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ 
    AppComponent,
    AccountComponent,
    AccountsComponent,
    BudgetComponent,
    CategoriesComponent,
    TransactionsComponent,
    ], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
