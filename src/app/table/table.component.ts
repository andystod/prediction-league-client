import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tableRows: Array<TableRow>;

  constructor() { }

  ngOnInit() {
    this.tableRows = [];

    var tableRow = new TableRow();
    tableRow.position = 1;
    tableRow.user = 'Andrew Stoddart';
    tableRow.gameweekPick = 'Manchester United';
    tableRow.gameweekPoints = 3;
    tableRow.totalPoints = 30;
    this.tableRows.push(tableRow);
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
