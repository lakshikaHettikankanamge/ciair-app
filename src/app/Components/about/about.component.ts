// import { Component, OnInit } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends HomeComponent implements OnInit{


  constructor(
    private dialog: MatDialog,
    router: Router
    ) {
    super(router);
  }
  

}
