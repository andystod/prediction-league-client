import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { TableComponent } from "./table/table.component";
import { UserComponent } from "./user/user.component";

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'table', component: TableComponent },
    { path: 'user/:id', component: UserComponent }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
