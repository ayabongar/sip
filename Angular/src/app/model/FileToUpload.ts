export class FileToUpload {
    ClientID : number;
    VehicleId :number;
    OwnerId: number;
    InvoiceId: number;
    ClaimId: number;
    FileName: string = "";
    FileSize: number = 0;
    FileType: string = "";    
    fileAsBase64: string = "";
    //FileAsByteArray : BinaryType;
    comment  : string = "";
  }

  export class FileQueryString {
    ClientID : number;
    VehicleId :number;
    OwnerId: number;
    InvoiceId: number;
    ClaimId: number; 
    IdProvided: boolean; 
  }
