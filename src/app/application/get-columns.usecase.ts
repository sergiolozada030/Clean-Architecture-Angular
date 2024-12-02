import { inject, Injectable } from '@angular/core';
import { ExportToCsvGateway } from '../domain/exportToCsv.gateway';
import { CommentDto } from '../domain/comment.dto';

@Injectable({
  providedIn: 'root',
})
export class GetColumnsUseCase {
  private readonly exportToCsvGateway = inject(ExportToCsvGateway);

  getColumns(report: CommentDto[]) {
    return this.exportToCsvGateway.getColumns(report);
  }
}
