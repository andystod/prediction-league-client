// import { ApolloClient } from 'apollo-client';
// import { ApolloModule } from 'apollo-angular';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { routes } from "./app.router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';

// Create the client as outlined above
// const client = new ApolloClient();

// export function provideClient(): ApolloClient {
//   return client;
// }

@NgModule({
  imports: [
    BrowserModule,
    // ApolloModule.forRoot(provideClient),
    routes,
    NgbModule
  ],
  declarations: [ AppComponent, HomeComponent, TableComponent, NavbarComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
