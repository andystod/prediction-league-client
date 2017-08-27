import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ActivatedRoute } from "@angular/router";

// We use the gql tag to parse our query string into a query document
const UserQuery = gql`
  query UserQuery($id: String) {
    user(id:$id) {
      name,
      predictions {
        match{
          home {
            name
          },
          away {
            name
          },
          score {
            home,
            away
          }
        },
        pick {
          name
        },
        points
      }
    }
  }
`;

interface QueryResponse{
  user
  loading
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loading: boolean;
  user: any;
  tableRows: Array<TableRow>;  // TODO: ???

  
constructor(private apollo: Apollo, private activatedRoute: ActivatedRoute) {  }

  ngOnInit() {
    console.log('here');
    console.log(this.activatedRoute.snapshot.params["id"]);
  
    console.log('here');
    console.log('here');

    this.apollo.watchQuery<QueryResponse>({
      query: UserQuery,
      variables: {id: this.activatedRoute.snapshot.params["id"]}
    }).subscribe(({data}) => {
      console.log(data);
      this.loading = data.loading;
      this.user = data.user;
      console.log('finished');
    });

  }
}

export class TableRow {
  position: number;
  user: string;
  gameweekPick: string;
  gameweekPoints: number;
  totalPoints: number; 
}
