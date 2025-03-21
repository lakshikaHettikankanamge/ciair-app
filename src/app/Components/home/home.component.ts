// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeopleComponent } from '../people/people.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.slideBanners();
  }

  slideBanners() {
    const bannersContainer = document.querySelector('.banners-container') as HTMLElement;
    const bannerImages = document.querySelectorAll('.banner-image');
    const bannerWidth = bannerImages[0].clientWidth;
    let counter = 0;

    function slide() {
      if (counter === bannerImages.length) {
        counter = 0;
      }
      bannersContainer.style.transform = `translateX(${-bannerWidth * counter}px)`;
      counter++;
    }

    setInterval(slide, 3000); // Adjust slide interval as needed (milliseconds)
  }

  Navigate(component: string){
    this.router.navigate(['/', component]);  
  }

}
