import { CommentDto } from './comment.dto';

export abstract class ExportToCsvGateway {
  abstract generate(report: CommentDto[], fileName: string, type: string): void;
}
