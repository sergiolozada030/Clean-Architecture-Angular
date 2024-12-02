import { Injectable } from '@angular/core';
import { ExportToCsvGateway } from '../../domain/exportToCsv.gateway';
import { CommentDto } from '../../domain/comment.dto';

@Injectable({ providedIn: 'root' })
export class ExportToCsvService implements ExportToCsvGateway {
  getColumns(data: CommentDto[]): string[] {
    const columns: string[] = [];
    data.forEach((row) => {
      Object.keys(row).forEach((col) => {
        if (!columns.includes(col)) {
          columns.push(col);
        }
      });
    });
    return columns;
  }

  convertToCsv(data: any[], columns: string[]): string {
    let csv = '';
    csv += columns.join(',') + '\n';
    data.forEach((row) => {
      const values: any = [];
      columns.forEach((col) => {
        values.push(row[col] || '');
      });
      csv += values?.join(',') + '\n';
    });
    return csv;
  }

  downloadCsv(data: string, filename: string, type: string) {
    const blob = new Blob([data], { type: type });
    const link = document.createElement('a');
    link.setAttribute('href', URL.createObjectURL(blob));
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
