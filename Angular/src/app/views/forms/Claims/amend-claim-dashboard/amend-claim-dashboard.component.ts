import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Router } from '@angular/router';
import { ClaimService } from '../../../../api.services/claim.service';
import { AuthenticatedUser } from '../../../../model/AuthenticatedUsers';

@Component({
  selector: 'app-amend-claim-dashboard',
  templateUrl: './amend-claim-dashboard.component.html',
  styleUrls: ['./amend-claim-dashboard.component.scss']
})
export class AmendClaimDashboardComponent implements OnInit {
  public listObject: any = []; 
  dataSource: MatTableDataSource<AuthenticatedUser>;
  displayedColumns = ['ClientID', 'GroupID', 'ClaimNumber', 'Litres', 'LevyDutyPetrol', 'ExsiceDutyPetrol', 'ExsiceDutyDesiel', 'LevyDutyDesiel', 'TOTALDUE', 'StatusDescription', 'actions'];
  selection = new SelectionModel<AuthenticatedUser>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private _claimService:ClaimService,private router: Router) { }

  ngOnInit(): void {
    this.bindClaimsGridView();
  }
  bindClaimsGridView() { 

    this._claimService.SelectClaimByStatusID(1)
    .subscribe
    (
        data => {                
          this.bindDataSource( data);          
          
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
   goToClaimEditor( clientId:string,vehicleId:string,claimId:string,groupId:string) {
    this.router.navigate(
      ['/Claims/ClaimsEditor/'],
      { queryParams: { 'clientId': clientId, 'vehicleId': vehicleId,'claimId': claimId,'groupId':groupId} }
    );
  } 
  deleteClaim(claimId:string) {

    if (confirm("Are you sure  you want to delete the selected claim ?")) {
      this._claimService.DeleteClaim(claimId)
        .subscribe
        (
          response => {
            alert(response.body)
            this.bindClaimsGridView();
          },
          (error) => {
            alert(error.message);
          }
        );
    }
  }
 
}
