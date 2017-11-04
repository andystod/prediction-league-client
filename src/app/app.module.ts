import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { routes } from "./app.router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { environment } from "../environments/environment";

// by default, this client will send queries to `/graphql` (relative to the URL of your app)
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: environment.graphqlURL
  }),
});

// "http://localhost:8080/graphql"

export function provideClient(): ApolloClient {
  return client;
}


@NgModule({
  imports: [
    BrowserModule,
    ApolloModule.forRoot(provideClient),
    routes,
    NgbModule.forRoot()
  ],
  declarations: [ AppComponent, HomeComponent, TableComponent, NavbarComponent, UserComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

// platformBrowserDynamic().bootstrapModule(AppModule);

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
