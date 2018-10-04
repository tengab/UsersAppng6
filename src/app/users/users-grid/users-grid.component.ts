import {Component, OnInit} from '@angular/core';
import {GridOptions} from "ag-grid-community";
import {UsersService} from "./users.service";
import * as _ from 'lodash';
import {RouterLinkRendererComponent} from "./router-link-renderer.component";


@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.pug',
  // styleUrls: ['./users-grid.component.css']
})
export class UsersGridComponent implements OnInit {

  public gridOptions: GridOptions;
  private isGridVisible: boolean = true;

  // public userList: any = []

  constructor(public usersService: UsersService) {

    this.gridOptions = {
      suppressHorizontalScroll: true,
      rowHeight: 50,
      columnDefs: [
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
          cellRendererFramework: RouterLinkRendererComponent,
          cellRendererParams: {
            inRouterLink: '/user-details',
          }
        },
        {
          headerName: "Age",
          field: "dob.age",
        },
        {
          headerName: "Nationality",
          field: "nat",
        },
        {
          headerName: "Delete",
          field: "login.uuid",
          cellRenderer: this.deleteUserCell
        }
      ],

      onGridReady: (params) => {
        params.api.sizeColumnsToFit();
      }
    }
  }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(response => {
        this.gridOptions.api.setRowData(this.usersService.userList)
      })
  }

  deleteUserCell(params) {
    const deleteButton = `<div class="glyphicon glyphicon-trash"></div>`
    return deleteButton
  }

  onCellClicked(event) {
    if (event.value === event.data.login.uuid) {
      this.usersService.deleteUser(event)
        .subscribe(response => {
          this.gridOptions.api.setRowData(this.usersService.userList)
        })
    }
  }

  imageCellRenderer(params) {
    const thumbnailImage = `<img src=${params.value}>`
    return thumbnailImage
  }

  hideGrid() {
    this.isGridVisible = !this.isGridVisible
  }
}
