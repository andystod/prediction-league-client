import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ActivatedRoute } from "@angular/router";
import { DocumentNode } from 'graphql';
import { EntryQuery } from '../../../operation-result-types';

/// <reference path="./graphql.d.ts" />

declare function require(name:string);
const entryQuery: DocumentNode = require('graphql-tag/loader!./user.component.graphql');

interface QueryResponse{
  entry
  loading
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loading: boolean;
  entry: any;

  
constructor(private apollo: Apollo, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    // console.log(this.entry.entry.user.name);

    this.apollo.watchQuery<QueryResponse>({
      query: entryQuery,
      variables: {id: this.activatedRoute.snapshot.params["id"]}
    }).subscribe(({data}) => {
      console.log(data);
      this.loading = data.loading;
      this.entry = data.entry;      
      console.log('finished');
      console.log(this.entry);
      console.log(this.entry.user.name);
      console.log(this.entry.totalPoints)
    });

  }
}