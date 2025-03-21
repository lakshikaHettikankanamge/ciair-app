import { Component, Input } from '@angular/core';
import { PublicationsModel } from 'src/app/Models/PublicationsModel';

@Component({
  selector: 'app-article-popup',
  templateUrl: './article-popup.component.html',
  styleUrls: ['./article-popup.component.scss']
})
export class ArticlePopupComponent {

  publicationSet : PublicationsModel = new PublicationsModel();

  @Input() publication: PublicationsModel = new PublicationsModel();

  ngOnInit(): void {
    this.publicationSet = this.publication
  }
}
