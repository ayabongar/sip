import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Router } from '@angular/router';
import { VehicleService } from '../../../../api.services/vehicle.service';
import { AuthenticatedUser } from '../../../../model/AuthenticatedUsers';


@Component({
  selector: 'app-new-claims',
  templateUrl: './new-claims.component.html',
  styleUrls: ['./new-claims.component.scss']
})
export class NewClaimsComponent implements OnInit {
  public listObject: any = []; 
  dataSource: MatTableDataSource<AuthenticatedUser>;
  displayedColumns = ['Code','ClientAllias','VehicleRegistration','VehicleRefNumber','VehicleCancellationDate','VehicleStatus','actions'];
  selection = new SelectionModel<AuthenticatedUser>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
    currentDate: Date;
    hasClaims: boolean;

  constructor(private _vehicleService:VehicleService,private router: Router) { }

  ngOnInit(): void {
    this.bindVehicleGridView();
    this.currentDate = new Date();
  }
  bindVehicleGridView() {  
    


    this._vehicleService.GetAllVehicles()
    .subscribe
    (
        data => {                
          this.bindDataSource( data);          
        this.hasClaims = true
        if (!data) {
          this.hasClaims = true;
        }
        }
    );
   }


   bindDataSource(data: any){    
     if (data){
      this.listObject = data;
      this.dataSource = new MatTableDataSource(data);
      this.paginator.pageSize = 40;
      this.paginator.hidePageSize = true;          
      this.dataSource.paginator = this.paginator;
     // this.dataSource.sort = this.sort;
      }
    }
    applyFilter(filterValue: string) {
     filterValue = filterValue.trim(); // Remove whitespace
     filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
     this.dataSource.filter = filterValue;
   }  
   goToClaimEditor( clientId:string,vehicleId:string) {
    this.router.navigate(
      ['/Claims/ClaimsEditor/'],
      { queryParams: { 'clientId': clientId, 'vehicleId': vehicleId } }
    );
  }  
}
