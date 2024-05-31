import { SelectionModel } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadService } from '../../../../api.services/fileUpload.service';
import { FileQueryString, FileToUpload } from '../../../../model/FileToUpload';
import * as FileSaver from 'file-saver';

const MAX_SIZE: number = (1048576 * 5);

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})


export class FileUploadComponent implements OnInit {
  @Input() FileQueryString: FileQueryString;
  theFile: any = null;
  messages: string[] = [];
  dataSource: MatTableDataSource<FileToUpload>;
  displayedColumns = ['FileName', 'FileSize', 'comment', 'actions'];
  selection = new SelectionModel<FileToUpload>(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  modalRef: any;
  comment: string
  parm: FileQueryString;
  selectedFileBLOB: any;
  fileInput: any;
  isIdProvided: boolean;

  constructor(private uploadService: FileUploadService, private modalService: NgbModal, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.bindDocumentGridView()
  }

  onFileChange(event) {
    this.theFile = null;

    // See if any file(s) have been selected from input
    if (event.target.files && event.target.files.length > 0) {
      // Don't allow file sizes over 1MB
      if (event.target.files[0].size < MAX_SIZE) {
        // Set theFile property
        this.theFile = event.target.files[0];
        
      }
      else {
        // Display error message
        alert("File: " + event.target.files[0].name
          + " is too large to upload.")
        //this.messages.push("File: " + event.target.files[0].name 
        //  + " is too large to upload.");
      }
    }
  }

  private readAndUploadFile(theFile: any) {
    let file = new FileToUpload();

    // Set File Information
    file.FileName = theFile.name;
    file.FileSize = theFile.size;
    file.FileType = theFile.type;
    file.ClientID = this.FileQueryString.ClientID;
    file.VehicleId = this.FileQueryString.VehicleId;
    file.ClaimId = this.FileQueryString.ClaimId;
    console.log(' claim upload id ' + this.FileQueryString.ClaimId)
    file.OwnerId = this.FileQueryString.OwnerId;
    file.InvoiceId = this.FileQueryString.InvoiceId;   
    file.comment = this.comment;


    // Use FileReader() object to get file to upload
    // NOTE: FileReader only works with newer browsers
    let reader = new FileReader();

    // Setup onload event for reader
    reader.onload = () => {
      // Store base64 encoded representation of file
      file.fileAsBase64 = reader.result.toString();
      

      // POST to server
      this.uploadService.uploadFile(file)
        .subscribe(resp => {
          // this.messages.push("Upload complete");
          alert(resp.body);
          this.bindDocumentGridView();
          this.closeModal()
        });
    }
    // Read the file    
    reader.readAsDataURL(theFile);
  }

  uploadFile(): void {
    this.readAndUploadFile(this.theFile);
  }

  downloadFile(object: any,content:any) {
    const contentType = content;
    this.uploadService.GetFiles(object)
      .subscribe
      (
        data => {
          this.fileInput = data;         
              
         const byteCharacters = atob(data)
         const byteNumbers = new Array(byteCharacters.length);
         for (let i = 0; i < byteCharacters.length; i++) {
             byteNumbers[i] = byteCharacters.charCodeAt(i);
         }
         const byteArray = new Uint8Array(byteNumbers);
         const blob = new Blob([byteArray], {type: contentType});
         FileSaver.saveAs(blob)
            
        }
      );
  }

  bindDocumentGridView() {
    this.parm = new FileQueryString();    
    this.parm = this.FileQueryString;    

    this.uploadService.GetDocumentByClient(this.parm.ClientID.toString(), this.parm.VehicleId.toString(), this.parm.OwnerId.toString(), this.parm.ClaimId.toString())
      .subscribe
      (
        data => {
          this.bindDataSource(data);
        }
      );
  }


  bindDataSource(data: any) {
    this.dataSource = new MatTableDataSource(null);
    if (data) {
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

  openModal(content, id: string) {
   
    if(this.parm.ClientID ==0 && this.parm.VehicleId ==0 && this.parm.OwnerId == 0  && this.parm.ClaimId == 0){
      alert('please save a record first before upload a document.');
      return;
    }

    let ngbModalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      windowClass: 'my-class3'
    };


    this.modalRef = this.modalService.open(content, ngbModalOptions);
  }
  closeModal() {

    this.modalRef.close()

  }

}
