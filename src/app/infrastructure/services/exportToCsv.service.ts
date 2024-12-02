import { Injectable } from '@angular/core';
import { ExportToCsvGateway } from '../../domain/exportToCsv.gateway';
import { CommentDto } from '../../domain/comment.dto';

@Injectable({ providedIn: 'root' })
export class ExportToCsvService implements ExportToCsvGateway {
  private getColumns(data: CommentDto[]): string[] {
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

  private convertToCsv(data: any[], columns: string[]): string {
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

  private downloadCsv(data: string, filename: string, type: string) {
    const blob = new Blob([data], { type: type });
    const link = document.createElement('a');
    link.setAttribute('href', URL.createObjectURL(blob));
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  generate(data: CommentDto[], fileName: string, type: string): void {
    const report = JSON.parse(JSON.stringify(data));
    const columns = this.getColumns(report);
    const csv = this.convertToCsv(report, columns);
    this.downloadCsv(csv, fileName, type);
  }
}
