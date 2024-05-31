import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserManager } from '../../../../api.services/user.manager';
import { AuthenticatedUser } from '../../../../model/AuthenticatedUsers';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {
  @Output("bindDropDownList") bindGrindView: EventEmitter<any> = new EventEmitter();
  @Input() childList:AuthenticatedUser ;
  userObject : AuthenticatedUser = new AuthenticatedUser();
  
  PopupForm: UntypedFormGroup = new UntypedFormGroup({
    
    UserCode: new UntypedFormControl('', Validators.required),   
    UserFullName: new UntypedFormControl('', Validators.required),  
    IsActive: new UntypedFormControl('', Validators.required),  
    Role: new UntypedFormControl('', Validators.required), 
    sendCatalog: new UntypedFormControl(true)
  });
  lstRole: any;

  constructor(private _UserManager:UserManager,private fb: UntypedFormBuilder,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.userObject = this.childList;
    this.bindDropdownlist();  
    //console.log("Editor:" + this.userObject.UserFullName)
  }

bindDropdownlist(){
  this._UserManager.GetUserRoles()
  .subscribe
  (
      data => {
        this.lstRole = data;        
      }
      
  );   
}

  
  onSubmit() {     
    
    console.log(this.userObject)
      this._UserManager.Save(this.userObject)
      .subscribe
      (
        (response) => {
          this.bindGrindView.emit()
          alert('The record was successfully saved.');  
          this.modalService.dismissAll();       
        },
        (error) => {
          console.error(error.message);
          confirm('custom Errormessage: ' + error.message);
        }
      );

}

}
