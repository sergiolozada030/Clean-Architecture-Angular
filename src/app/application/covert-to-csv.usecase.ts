import { inject, Injectable } from '@angular/core';
import { ExportToCsvGateway } from '../domain/exportToCsv.gateway';
import { CommentDto } from '../domain/comment.dto';

@Injectable({
  providedIn: 'root',
})
export class ConvertToCsvUseCase {
  private readonly exportToCsvGateway = inject(ExportToCsvGateway);

  convert(report: CommentDto[], columns: string[]) {
    return this.exportToCsvGateway.convertToCsv(report, columns);
  }
}
