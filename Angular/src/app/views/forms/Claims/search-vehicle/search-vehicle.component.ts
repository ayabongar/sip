import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';

import { AuthenticatedUser } from '../../../../model/AuthenticatedUsers';

@Component({
  selector: 'app-search-vehicle',
  templateUrl: './search-vehicle.component.html',
  styleUrls: ['./search-vehicle.component.scss']
})
export class SearchVehicleComponent {
  @Output("SearchVehicleEmitter") SearchVehicleEmitter: EventEmitter<any> = new EventEmitter<any>();
  dataSource: MatTableDataSource<AuthenticatedUser>;
  displayedColumns = ['VehicleRegistration', 'VehicleCancellationDate', 'VehicleStatus', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() clientVehicles: any;
  
  
    vehicles: any = null;
    listObject: any;

  constructor() { }

  ngOnInit(): void {
   
    this.vehicles = this.clientVehicles
    this.bindGrindView();
  }

  bindGrindView() {
    if (this.vehicles != null) {
      this.dataSource = new MatTableDataSource(this.vehicles);    
      
    }
  }  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  SearchVehicles(id: any) {
    //debugger;
    this.SearchVehicleEmitter.emit(id);
  }
}
