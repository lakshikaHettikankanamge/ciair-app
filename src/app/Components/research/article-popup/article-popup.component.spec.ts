import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePopupComponent } from './article-popup.component';

describe('ArticlePopupComponent', () => {
  let component: ArticlePopupComponent;
  let fixture: ComponentFixture<ArticlePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlePopupComponent]
    });
    fixture = TestBed.createComponent(ArticlePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
