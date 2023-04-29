import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss']
})
export class UserDropdownComponent {
  activeComponent: string = '';
  constructor(private router: Router) {}

  goToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  goToEarnings() {
    this.router.navigate(['/earnings']);
  }
  goToLearnings(){
    this.router.navigate(['/learnings']);
  }
  goToFollowers(){
    this.router.navigate(['/followers']);
  }
  

  
}
