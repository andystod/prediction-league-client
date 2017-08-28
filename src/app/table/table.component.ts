import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

// We use the gql tag to parse our query string into a query document
const TableQuery = gql`
  query TableQuery {
    table {
      id,
      user {
        name,
        predictions {
          pick {
            name
          }
        }
      },
      gameweekPick {
        name
      },
      gameweekPoints,
      totalPoints,
      position
    }
  }
`;

interface QueryResponse{
  table
  loading
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  loading: boolean;
  table: any;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    
    console.log('here');
    console.log('here');

    this.apollo.watchQuery<QueryResponse>({
      query: TableQuery
    }).subscribe(({data}) => {
      console.log(data);
      this.loading = data.loading;
      this.table = data.table;
      console.log('finished');
    });

  }
}

