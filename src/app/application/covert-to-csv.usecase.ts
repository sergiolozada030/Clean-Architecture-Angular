import { inject, Injectable } from '@angular/core';
import { ExportToCsvGateway } from '../domain/exportToCsv.gateway';
import { CommentDto } from '../domain/comment.dto';

@Injectable({
  providedIn: 'root',
})
export class ConvertToCsvUseCase {
  private readonly exportToCsvGateway = inject(ExportToCsvGateway);

  execute(report: CommentDto[], fileName: string, type: string): void {
    return this.exportToCsvGateway.generate(report, fileName, type);
  }
}
