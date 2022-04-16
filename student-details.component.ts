import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

constructor( private router:Router) { }
 
   ngOnInit(): void {
    throw new Error('Method not implemented.');
      }

  onevent (){
    this.router.navigate(['/submit']);
  }
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

