import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../article-service.service';
import { Article } from '../article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticleComponent implements OnInit {

  articles: Article;

  constructor(private articleService: ArticlesService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.articleService.getArticles().subscribe(
      (response : any) => {
        this.articles = response.articles
      }
    );
  }

}
