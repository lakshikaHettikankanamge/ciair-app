import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchQuery: string = '';
  showMenu: boolean = false;

  onSearch() {
    console.log('Searching for:', this.searchQuery);
    // Implement search functionality as needed
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
