import {Component,OnInit } from '@angular/core';
import { navItems } from '../../_nav';

import {UserManager} from '../../api.services/user.manager';
import { AuthenticatedUser } from '../../model/AuthenticatedUsers';
import { supervisorNavItems } from '../../_supervisorNav';
import {dataCaptureItems} from '../../_dataCapturerNav';
import {viewerItems}  from '../../_viewerNav';
import { startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
declare var require: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;  
  version: string = require( '../../../../package.json').version;
  lstUser : AuthenticatedUser = new AuthenticatedUser();
 

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  constructor(private _UserManager: UserManager,private router: Router  ) {
    
  }
  ngOnInit(): void {

    this._UserManager.AuthenticateUser()
    .subscribe
    (
      data => {
        this.lstUser = data;
        console.log('this user: ' + data)
        if (data == null) {
          this.ngAccessDenied();

        }
        else if (!this.lstUser.IsActive) {
          this.ngAccessDenied();

        }
        else {
          switch (this.lstUser.RoleId) {
            case 1: //Administrator
              this.navItems = navItems;
              break;
            case 2:// SuperVisor
              this.navItems = supervisorNavItems;
              break;
            case 3://Data Capturer
              this.navItems = dataCaptureItems;

              break;
            case 4: // Viewer,SAP Payment
            case 6:
              this.navItems = viewerItems;
              break;
            case 5:// Deny Access
              if (!this.lstUser.IsActive) {
                this.ngAccessDenied();
              }
              break;
            default:
              break;
          }
        }
      }      
    );   
  }

  ngAccessDenied() {
    this.router.navigate(
      ['register'],
      { queryParams: { 'userId': 0 } }
    );
  }
}
