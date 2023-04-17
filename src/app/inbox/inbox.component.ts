import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  email:any;
  textarea:any;
sending(){
  if(this.email!=null && this.email.match("[a-z0-9]{1,20}@[a-z0-9]{1,10}\.[a-z]{1,5}")){
    if(this.textarea!=null)
    {
      console.log(this.email);
     
      console.log(this.textarea);
      alert('Your Email Has Been SuccessFully Send');
    }
    else
    {
      alert('invalid Textarea MustBe Filled');
    }
  }else{
    alert('invaild email');
  }

}
backTomail(){
this.router.navigateByUrl('\email');
}


}
