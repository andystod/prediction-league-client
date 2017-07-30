import { ApolloClient } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';

// Create the client as outlined above
const client = new ApolloClient();

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  imports: [
    BrowserModule,
    ApolloModule.forRoot(provideClient)
  ],
  declarations: [ AppComponent ],
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
