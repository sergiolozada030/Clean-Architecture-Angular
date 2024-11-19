import { inject, Injectable } from '@angular/core';
import { CommentGateway } from '../domain/comment.gateway';

@Injectable({
  providedIn: 'root',
})
export class GetCommentsUseCase {
  private readonly commentGateway = inject(CommentGateway);

  getCommentById(postId: string) {
    return this.commentGateway.getById(postId);
  }

  getAllComments() {
    return this.commentGateway.getAll();
  }
}
