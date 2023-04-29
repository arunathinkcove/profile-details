import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
    showDetails: boolean = false;
    profiles = [
      {
        
        img: 'assets/aruna.jpg',
        route: '/profile',
        name:'Aruna',
        descriptiion:'Full Stack developer'
      },
      {
       img: 'assets/karthi.jpg',
        route: '/firstprofile',
        name:'Karthick',
        descriptiion:'Full Stack developer'
      },
      {
      
        img: 'assets/hari.jpg',
        route: '/secondprofile',
        name:'Harihar',
        descriptiion:'Full Stack developer'
      },
      {
        
        img: 'assets/gokul.jpg',
        route: '/thirdprofile',
        name:'Gokulnath',
        descriptiion:'Full Stack developer'
      },
      {
        
        img: 'assets/anas.jpg',
        route: '/fourthprofile',
        name:'Mohamed Anas',
        descriptiion:'Software Tester'
      },
      {
        
        img: 'assets/pexels.jpg',
        route: '/fifthprofile',
        name:'Supriya',
        descriptiion:'Full Stack developer'
      },
      {
        
        img: 'assets/pixahive.webp',
        route: '/sixprofile',
        name:'Sriram',
        descriptiion:'Full Stack developer'
      },
      {
       
        img: 'assets/photo.jpeg',
        route: '/sevenprofile',
        name:'DavidPaul',
        descriptiion:'Front End developer'
      },
    ];
    constructor(private router: Router) {}

  }
  
