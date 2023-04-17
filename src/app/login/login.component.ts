import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myRoute: Router) {
    
   }

  ngOnInit() {
  }

  hide = true;
  Email:string;
  password:string;
  

 

submit(){

  if(this.Email!=null && this.Email.match("[a-z0-9]{1,20}@[a-z0-9]{1,10}\.[a-z]{1,5}"))
  {
    if(this.password!=null && this.password.match("[1-9a-z]{8,20}"))
    {
  var loginemailpsw={mailid:this.Email,psw:this.password}
  var loginvalues=[];
 

  loginvalues.push(loginemailpsw);
  console.log(loginvalues);

  var getlocal=JSON.parse(localStorage.getItem('Email'));
  var retrievedUser,retrivedPassWrd;
 
  for(let i=loginvalues.length-1;i>=0;i--){
    retrievedUser = getlocal.filter((user)=>{ return user.Email == loginemailpsw.mailid})[i];
    retrivedPassWrd=getlocal.filter((xy)=>{return xy.password == loginemailpsw.psw})[i];
}
  
  if(retrievedUser && retrivedPassWrd){
  this.myRoute.navigateByUrl('\email')
  }
  else{
    alert('invalid Is Not A Register Email Pls Check');
  }

 }else{
  alert('invalid password')
 }
}else{
  alert('invalid email')
}
}
}