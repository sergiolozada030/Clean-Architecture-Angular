import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { CommentGateway } from './domain/comment.gateway';
import { CommentsService } from './infrastructure/services/comments.service';
import { provideHttpClient } from '@angular/common/http';
import { ExportToCsvGateway } from './domain/exportToCsv.gateway';
import { ExportToCsvService } from './infrastructure/services/exportToCsv.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: CommentGateway, useClass: CommentsService },
    { provide: ExportToCsvGateway, useClass: ExportToCsvService },
    provideHttpClient(),
  ],
};
