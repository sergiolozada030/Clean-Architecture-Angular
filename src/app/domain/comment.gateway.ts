import { Observable } from 'rxjs';
import { Comment } from './comment.entity';
import { CommentDto } from './comment.dto';

export abstract class CommentGateway {
  abstract getById(postId: string): Observable<CommentDto>;
  abstract getAll(): Observable<CommentDto[]>;
  abstract delete(commentId: string): Observable<void>;
  abstract save(comment: Comment): Observable<CommentDto>;
}
