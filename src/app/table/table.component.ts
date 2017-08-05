import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

// We use the gql tag to parse our query string into a query document
const CurrentUserForProfile = gql`
  query TableQuery {
    table {
      id,
      user {
        name,
        predictions {
          name
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
  tableRows: Array<TableRow>;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    
    console.log('here');
    console.log('here');

    this.apollo.watchQuery<QueryResponse>({
      query: CurrentUserForProfile
    }).subscribe(({data}) => {
      console.log(data);
      this.loading = data.loading;
      this.table = data.table;

    //   this.tableRows = [];

    // var tableRow = new TableRow();
    // tableRow.position = 1;
    // tableRow.user = 'Andrew Stoddart';
    // tableRow.gameweekPick = 'Manchester United';
    // tableRow.gameweekPoints = 3;
    // tableRow.totalPoints = 30;
    // this.tableRows.push(tableRow);

      console.log('finished');
    });

  }

// ToDo: Pass id???
  tableRowClick(tableRow) {
    alert(tableRow.user);
  }

}

export class TableRow {
  position: number;
  user: string;
  gameweekPick: string;
  gameweekPoints: number;
  totalPoints: number; 
}
