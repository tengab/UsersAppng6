import {Component, OnInit} from '@angular/core';
import {GridOptions} from "ag-grid-community";
import {UsersService} from "./users.service";
import { Router } from '@angular/router';
import {RouterLinkRendererComponent} from "./router-link-renderer.component";


@Component({
  selector: 'app-users-grid',
  templateUrl: './users-grid.component.pug',
  // styleUrls: ['./users-grid.component.css']
})
export class UsersGridComponent implements OnInit {

  private gridOptions: GridOptions;
  private isGridVisible: boolean = true;
  public userList: any;

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
        }
      ],
      rowData: this.userList,
      onGridReady: (params) => {
        params.api.sizeColumnsToFit();
      }
    }
  }

  ngOnInit() {
    this.usersService.getUsers()
      .subscribe(response => {
        this.userList = response.results;
        this.gridOptions.api.setRowData(this.userList)
        this.usersService.userList = response.results
        console.log('from users-grid', this.usersService.userList)
      })
  }

  imageCellRenderer(params) {
    const thumbnailImage = `<img src=${params.value}>`
    return thumbnailImage
  }

  hideGrid() {
    this.isGridVisible = !this.isGridVisible
  }
}
