import { inject, Injectable } from '@angular/core';
import { CommentGateway } from '../domain/comment.gateway';

@Injectable({ providedIn: 'root' })
export class DeleteCommentsUseCase {
  private readonly commentGateway = inject(CommentGateway);

  delete(commentId: string) {
    return this.commentGateway.delete(commentId);
  }
}
