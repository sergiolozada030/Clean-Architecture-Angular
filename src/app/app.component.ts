import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetCommentsUseCase } from './application/get-comments.usecase';
import { Comment } from './domain/comment.entity';
import { SaveCommentsUseCase } from './application/save-comments.usecase';
import { DeleteCommentsUseCase } from './application/delete-comments.usecase';
import { GetColumnsUseCase } from './application/get-columns.usecase';
import { ConvertToCsvUseCase } from './application/covert-to-csv.usecase';
import { DownloadCsvUseCase } from './application/download-csv.usecase';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'clean-arquitecture';
  allComments: Comment[] = [];
  private readonly getCommentsUseCase = inject(GetCommentsUseCase);
  private readonly saveCommentsUseCase = inject(SaveCommentsUseCase);
  private readonly deleteCommentsUseCase = inject(DeleteCommentsUseCase);
  private readonly getColumnsUseCase = inject(GetColumnsUseCase);
  private readonly convertToCsvUseCase = inject(ConvertToCsvUseCase);
  private readonly downloadCsvUseCase = inject(DownloadCsvUseCase);

  ngOnInit() {
    this.getCommentsUseCase.getAllComments().subscribe((comments) => {
      console.log(comments);
      this.allComments = comments;
    });
  }

  save() {
    const comment: Comment = {
      postId: 1,
      name: 'John Doe',
      email: 'email@email.com',
      body: 'Lorem ipsum',
    };

    this.saveCommentsUseCase.save(comment).subscribe((comment) => {
      console.log(comment);
    });
  }

  delete() {
    const commentId = '1';
    this.deleteCommentsUseCase.delete(commentId).subscribe(() => {
      console.log('Comment deleted');
    });
  }

  exportToCsv() {
    const data = JSON.parse(JSON.stringify(this.allComments));
    const columns = this.getColumnsUseCase.getColumns(data);
    const csvData = this.convertToCsvUseCase.convert(data, columns);
    console.log(csvData);
    this.downloadCsvUseCase.downloadCsv(csvData, 'reporte.csv', 'text/csv');
  }
}
