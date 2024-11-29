import { inject, Injectable } from '@angular/core';
import { CommentGateway } from '../domain/comment.gateway';
import { Comment } from '../domain/comment.entity';

@Injectable({
  providedIn: 'root',
})
export class SaveCommentsUseCase {
  private readonly commentGateway = inject(CommentGateway);

  save(comment: Comment) {
    return this.commentGateway.save(comment);
  }
}
