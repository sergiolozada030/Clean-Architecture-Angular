import { CommentDto } from './comment.dto';

export abstract class ExportToCsvGateway {
  abstract getColumns(report: CommentDto[]): string[];
  abstract convertToCsv(report: CommentDto[], columns: string[]): string;
  abstract downloadCsv(reportCsv: string, fileName: string, type: string): void;
}
