import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable,of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(public toasterService: ToastrService) {}
intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
    
        return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    if(evt.body && evt.body.success)
                        this.toasterService.success(evt.body.success.message, evt.body.success.title, { positionClass: 'toast-bottom-center' });
                }
            }),
            catchError((err: any) => {
                if(err instanceof HttpErrorResponse) {
                    try {
                        
                            let reason= err && err.error.reason ? err.error.reason : '';
                            let status=err.status;
                            let title= err.error.title?err.error.title:'Error';
                    
                        this.toasterService.error(reason, title, { positionClass: 'toast-bottom-center' });
                    } catch(e) {
                        this.toasterService.error('An error occurred', '', { positionClass: 'toast-bottom-center' });
                    }
                    //log error 
                }
                return of(err);
            }));
    
      }
      
}
