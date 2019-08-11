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
                        
                            let status=err.status;
                            let title='';
                            let reason='';
                            if(status==400){
                                title= err && err.error ? err.error : 'Undefined';
                                reason= err.name?err.name:'Error';
                            }else if(status==0){
                              reason= err && err.name ? err.name : 'Undefined';
                            
                              title= err.message?err.message:'Error';
                            }else if(status==500){
                               reason= err && err.error.error ? err.error.error : 'Undefined';
                               title=err.message?err.message:'Error';
                            }else{
                                reason= err && err.name ? err.name : 'Undefined';
                            
                                title= err.message?err.message:'Error';

                            }

                            
                    
                        this.toasterService.error(title,reason, { positionClass: 'toast-top-right' });
                    } catch(e) {
                        this.toasterService.error('An error occurred', '', { positionClass: 'toast-top-right' });
                    }
                    //log error 
                }
                return of(err);
            }));
    
      }
      
}
