"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var account_component_1 = require("./banking/account/account.component");
var accounts_component_1 = require("./banking/accounts/accounts.component");
var budget_component_1 = require("./banking/budget/budget.component");
var categories_component_1 = require("./banking/categories/categories.component");
var transactions_component_1 = require("./banking/transactions/transactions.component");
var routes = [
    { path: '', redirectTo: '/transactions', pathMatch: 'full' },
    { path: 'account', component: account_component_1.AccountComponent },
    { path: 'accounts', component: accounts_component_1.AccountsComponent },
    { path: 'budget', component: budget_component_1.BudgetComponent },
    { path: "categories", component: categories_component_1.CategoriesComponent },
    { path: 'transactions', component: transactions_component_1.TransactionsComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map