import {Component, OnInit} from '@angular/core';
import {GridOptions} from "ag-grid-community";
import {UsersService} from "./users.service";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.pug',
  // styleUrls: ['./users-grid.component.css']
})
export class UsersGridComponent implements OnInit {


  private gridOptions: GridOptions;

  userList: any;
  isGridVisible: boolean = true;

  constructor(public usersService: UsersService) {
    this.gridOptions = <GridOptions>{};


    this.gridOptions.onGridReady = (params) => {
      params.api.sizeColumnsToFit()
    };
    this.gridOptions.suppressHorizontalScroll = true;
    this.gridOptions.rowHeight = 50;

    this.gridOptions.columnDefs = [
      {
        headerName: "Gender",
        field: "gender",
      },
      {
        headerName: "Thumbnail",
        field: 'picture.thumbnail',
        cellRenderer: this.imageCellRenderer,
      },
      {
        headerName: "First Name",
        field: "name.first",
      },
      {
        headerName: "Last Name",
        field: "name.last",
        cellRenderer: this.lastNameCellRenderer,
      },
      {
        headerName: "Age",
        field: "dob.age",
      },
      {
        headerName: "Nationality",
        field: "nat",
      }
    ];

    this.gridOptions.rowData = this.userList
  }

  imageCellRenderer(params) {
    const thumbnailImage = `<img src=${params.value}>`
    return thumbnailImage
  }

  lastNameCellRenderer(params) {
    const lastNameCell = `<a href="/user-details/${params.data.login.uuid}">${params.data.name.last}</a>`
    return lastNameCell
  }

  hideGrid() {
    this.isGridVisible = !this.isGridVisible
  }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(response => {
        this.userList = response.results;
        this.gridOptions.api.setRowData(this.userList)
      })

  }
}
