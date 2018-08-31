export class FirebaseUserModel {
  username: string;
  first_name: string;
  last_name: string;
  email_id: string;
  mob_no: number;
  password: string;
  confirmPassword: string;
  address: string;

  

  constructor(){
    
    this.username = "";
    this.first_name = "";
    this.last_name = "";
    this.email_id = "";
    this.mob_no;
    this.password = "";
    this.confirmPassword= "";
    this.address = "";
  }
}
