import { Component, OnInit ,Input } from '@angular/core';
import {  Router } from '@angular/router';
export interface PeriodicElement{
  position:any,
  name:any,
  content:any

}
const PeriodicElement = [
  {position:'1',
    content: 'Udemy',
  name:'Sale from ₹499.00 ends today — learn from real-world experts'},
  {position:'2',
    content: 'CSS',
  name:'2 of 1,937Movate (CSS Corp) is hiring candidates for Technical Support/Customer'},
  {position:'3',
    content: 'Naukri',
  name:' RAMKUMAR.M, check out jobs applied by your peers '},
  {position:'4',
    content: 'KOTAK BANK ALERTS',
  name:'Bank Account Statement Mar-23'},
  {position:'5',
    content: 'capgemini-jobnotification',
  name:'Exciting new roles available at Capgemini Group'},
  {position:'6',
    content: 'Bayt.com',
  name:'Apply Now: Application Developer at Dravidan Technologies Private Limited'},
  {position:'7',
    content: 'Shine Recruiter',
  name:'RAMKUMAR M , trending jobs (of the week) based on your recent activity'},
  {position:'8',
    content: 'ecare India Pvt Ltd',
  name:'Walk-in | Mega Walk - In Interview For Freshers in International Voice Process '},
  {position:'9',
    content: ' Zuno by foundit',
  name:'Heres how you can get into the best IIMs!'},
  {position:'10',
    content: 'AmbitionBox',
  name:'Need your advice'},
  {position:'11',
    content: 'Team Hackathon',
  name:'Hurry Up: Register Now for Hiring Challenge'},
  {position:'12',
    content: 'foundit - Monster Jobs',
  name:'Tata Consultancy Services Limited and others are hiring. Apply now!'},
  {position:'13',
    content: 'BookMyShow',
  name:'Your Tickets'},
];

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']

})


export class EmailComponent implements OnInit {
 
  displayedColumns: string[] = ['position','content','name'];
  dataSource = PeriodicElement;
  
  activeButton = 'inbox';
  selectedRow: any;
  constructor(private router:Router) { }
  ngOnInit() {
   
  }
opened=false;
inboxopen=true;
onClickButton(button) {
  this.activeButton = button;
 
}
selectRow(row) {
  this.selectedRow = row;
 
}
newEmail(){
  this.router.navigateByUrl('/inbox');
}
backToInbox(){
  this.selectedRow=false;
}



}
