import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { PeoplePopUpComponent } from './people-pop-up/people-pop-up.component';
import { ResearchesPageModel } from 'src/app/Models/ResearchesPageModel';
import { ResearcherService } from 'src/app/Services/researcher.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent extends HomeComponent implements OnInit {
  ResearchesPageModel: ResearchesPageModel[] = [];
  BOD: ResearchesPageModel[] = [];
  filteredBOD: ResearchesPageModel[] = [];

  SeniorAdvisors: ResearchesPageModel[] = [];
  filteredSeniorAdvisors: ResearchesPageModel[] = [];

  Collaborators: ResearchesPageModel[] = [];
  filteredCollaborators: ResearchesPageModel[] = [];

  searchQuery: string = '';
  constructor(
    private dialog: MatDialog,
    router: Router,
    private _ResearcherService: ResearcherService,
    private _ToastrService: ToastrService
  ) {
    super(router);
  }

  override ngOnInit(): void {
    this._ResearcherService.getResearcherDetailsByID(0, 1).subscribe(
      (Response) => {
        this.ResearchesPageModel = Response;
        for (let i = 0; i < this.ResearchesPageModel.length; i++) {
          const item = this.ResearchesPageModel[i];
          // Now you can perform operations on each item
          if (item.levelID == 1) {
            this.BOD.push(item);
            this.filteredBOD = this.BOD;
          } else if (item.levelID == 2) {
            this.SeniorAdvisors.push(item);
            this.filteredSeniorAdvisors = this.SeniorAdvisors;
          } else if (item.levelID == 3) {
            this.filteredCollaborators.push(item);
            this.filteredCollaborators = this.Collaborators;
          }
        }
      },
      (Error) => {
        console.log(Error);
      }
    );
  }

  search() {
    const query = this.searchQuery.toLowerCase().trim();
    // Filter Board of Directors array
    this.filteredBOD = this.BOD.filter((person) =>
      person.name?.toLowerCase().includes(query)
    );
    // Filter Senior Advisors array
    this.filteredSeniorAdvisors = this.SeniorAdvisors.filter((person) =>
      person.name?.toLowerCase().includes(query)
    );
    // Filter Collaborators array
    this.filteredCollaborators = this.Collaborators.filter((person) =>
      person.name?.toLowerCase().includes(query)
    );
    console.log(this.filteredCollaborators);
  }

  clearSearch() {
    this.searchQuery = '';
    this.search();
  }
  openDialog(person: any): void {
    const dialogRef = this.dialog.open(PeoplePopUpComponent, {
      height: '90vh',
      width: '60vw',
      data: person,
    });
    dialogRef.componentInstance.researcher = person;

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
