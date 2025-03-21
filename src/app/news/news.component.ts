import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsItems = [
    { img: "../../assets/Images/news/news2.jpg" },
    { img: "../../assets/Images/news/news3.jpg" },
    { img: "../../assets/Images/news/news4.jpg" },
    { img: "../../assets/Images/news/news5.jpg" },
    { img: "../../assets/Images/news/news6.jpg" },
    { img: "../../assets/Images/news/news8.jpg" },
  ];

  visibleNewsItems: Array<any> = [];
  currentIndex = 0;
  currentTranslateX = 0;

  ngOnInit() {
    this.updateVisibleItems();
  }

  slide(direction: number) {
    this.currentIndex += direction;

    if (this.currentIndex < 0) {
      this.currentIndex = this.newsItems.length - 1;
    } else if (this.currentIndex >= this.newsItems.length) {
      this.currentIndex = 0;
    }

    this.currentTranslateX = -this.currentIndex * 100 / 3;
    this.updateVisibleItems();
  }

  updateVisibleItems() {
    const totalItems = this.newsItems.length;
    this.visibleNewsItems = [
      this.newsItems[(this.currentIndex - 1 + totalItems) % totalItems],
      this.newsItems[this.currentIndex % totalItems],
      this.newsItems[(this.currentIndex + 1) % totalItems]
    ];
  }
}
