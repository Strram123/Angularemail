import { Component, OnInit } from '@angular/core';
import { PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private myRoute: Router) { }

  ngOnInit() {
  }
  hide = true;
  hide1=true;
  name:any;
  
  regEmail:any;
  regpassword:any;
  confrimpassword:any;

  onsubmit(){  
    var EmailArr=[];
    var emailpsw={Email:this.regEmail,password:this.confrimpassword}
    if(this.name!=null && this.name.match( "[a-zA-Z]{1,40}"))
    {
        if(this.regEmail!=null && this.regEmail.match("[a-z0-9]{1,20}@[a-z0-9]{1,10}\.[a-z]{1,5}") )
        {
          if(this.regpassword!=null && this.regpassword.match("[1-9a-z]{8,20}"))
          {
            if(this.confrimpassword!=null && this.confrimpassword==this.regpassword && this.confrimpassword.match('[1-9a-z]{8,20}'))
             {
                EmailArr.push(emailpsw)
              //  alert(EmailArr);
                let show=localStorage.setItem("Email",JSON.stringify(EmailArr));
                alert(emailpsw.Email);
                alert(emailpsw.password);      
              this.myRoute.navigateByUrl(''); 
          }else{
            alert('Invalid confrimpassword')
          }
        
        }else{
          alert('Invalid regPassword')
        }
        }else{
          alert('Invalid regEmail')
        } 
      
   }else{
    alert('Invalid name')
  }
 
 }}
