import { inject, Injectable } from '@angular/core';
import { ExportToCsvGateway } from '../domain/exportToCsv.gateway';

@Injectable({
  providedIn: 'root',
})
export class DownloadCsvUseCase {
  private readonly exportToCsvGateway = inject(ExportToCsvGateway);

  downloadCsv(reportCsv: string, fileName: string, type: string) {
    return this.exportToCsvGateway.downloadCsv(reportCsv, fileName, type);
  }
}
