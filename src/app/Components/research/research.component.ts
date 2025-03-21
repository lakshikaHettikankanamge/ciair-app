import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArticlePopupComponent } from './article-popup/article-popup.component';
import { PublicationsModel } from 'src/app/Models/PublicationsModel';
import { researchPublicationsSortByModel } from 'src/app/Models/SortByModel';
import { PublicationsService } from 'src/app/Services/publications.service';
import { ResearcherService } from 'src/app/Services/researcher.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss'],
})
export class ResearchComponent implements OnInit {
  publications: PublicationsModel[] = [];
  filteredpublications: PublicationsModel[] = [];
  years: number[] = [];
  researchers: string[] = [];
  publicationAreas: string[] = [];
  showDropdowns = false;
  _researchPublicationsSortByModel: researchPublicationsSortByModel =
    new researchPublicationsSortByModel();

  constructor(
    private dialog: MatDialog,
    private _ResearcherService: ResearcherService,
    private _PublicationsService: PublicationsService
  ) {}
  ngOnInit(): void {
    console.log(this.publications);
    this.getArticles();
    this.getResearchers();
  }

  getArticles() {
    this._PublicationsService.getPublications().subscribe((data) => {
      this.publications = data;
      this.publications.forEach((publication: any) => {
        publication.authors = [];
      });
      this.getAuthorDetails(this.publications);
      this.filteredpublications = this.sortByYear(1, this.publications);
    });
  }

  getAuthorDetails(publications: PublicationsModel[]) {
    publications.forEach((publication: any) => {
      let authorIds = publication.authorIds.split(',');
      authorIds.forEach((authorId: any) => {
        this._ResearcherService
          .getResearcherDetailsByID(authorId, 2)
          .subscribe((data) => {
            publication.authors?.push(data);
          });
      });
      const date = new Date(publication.date);
      publication.year = date.getFullYear();
      this.years.push(publication.year);
    });
  }

  sortByYear(operation: number, publication: any) {
    if (operation == 1) {
      return [...publication].sort((a, b) => b.year - a.year);
    } else {
      return [...publication].sort((a, b) => a.year - b.year);
    }
  }
  getResearchers() {
    this._ResearcherService.getResearcherDetailsByID(0,1).subscribe((data) => {
      data.forEach((researcher: any) => {
        this.researchers.push(researcher.name);
      })
    });
  }

  onSelectyear(event: any) {
    console.log(event);
    const inputYear = (event.target as HTMLInputElement).value;
    this.filteredpublications = this.filteredpublications.filter((publications) =>
      publications.year?.toString().includes(inputYear)
    );
  }

  toggleDropdowns() {
    this.showDropdowns = !this.showDropdowns;
  }

  sortBychange(event: any) {
    const option = (event.target as HTMLInputElement).value;
    if (option == 'Year - Descending') {
      this.filteredpublications = this.sortByYear(1, this.filteredpublications);
    } else {
      this.filteredpublications = this.sortByYear(2, this.filteredpublications);
    }
  }

  onCardClick(publication: PublicationsModel) {
    const dialogRef = this.dialog.open(ArticlePopupComponent, {
      height: '90vh',
      width: '60vw',
    });

    dialogRef.componentInstance.publication = publication;

    dialogRef.afterClosed().subscribe((result) => {});
  }

  onSelectresearcher(event: any) {
    let publications = this.filteredpublications
    this.filteredpublications = [];
    const inputResearcher = (event.target as HTMLInputElement).value;
    publications.forEach((publications) => {
      publications.authors?.forEach((author) => {
        if (author[0].name == inputResearcher) {
          this.filteredpublications.push(publications);
        }
      })
    })
  }

  clearYearsFilter(event: any) {
    this.filteredpublications = this.publications;
  }
}
