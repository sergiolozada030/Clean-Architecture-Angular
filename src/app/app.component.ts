import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetCommentsUseCase } from './application/get-comments.usecase';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'clean-arquitecture';
  private getCommentsUseCase = inject(GetCommentsUseCase);

  ngOnInit() {
    this.getCommentsUseCase.getAllComments().subscribe((comments) => {
      console.log(comments);
    });
  }
}
