import { inject, Injectable } from '@angular/core';
import { CommentGateway } from '../../domain/comment.gateway';
import { HttpClient } from '@angular/common/http';
import { CommentDto } from '../../domain/comment.dto';
import { Comment } from '../../domain/comment.entity';

@Injectable({ providedIn: 'root' })
export class CommentsService implements CommentGateway {
  private readonly http = inject(HttpClient);

  getById(postId: string) {
    return this.http.get<CommentDto>(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
  }

  getAll() {
    return this.http.get<CommentDto[]>(
      'https://jsonplaceholder.typicode.com/comments'
    );
  }

  delete(commentId: string) {
    return this.http.delete<void>(
      `https://jsonplaceholder.typicode.com/comments/${commentId}`
    );
  }

  save(comment: Comment) {
    return this.http.post<CommentDto>(
      'https://jsonplaceholder.typicode.com/comments',
      comment
    );
  }
}
