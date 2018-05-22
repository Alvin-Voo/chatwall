import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

import * as fromApp from '../store/app.reducers';

import { Observable } from "rxjs";
import { take, switchMap } from 'rxjs/operators';

@Injectable()
export class ServerInterceptor implements HttpInterceptor{
  constructor(private store: Store<fromApp.AppState>){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted! ',req);

    return this.store.select('auth').pipe(
      take(1),
      switchMap((authState: fromApp.AppState['auth']) =>{
          // console.log("token fetched is "+ authState.token)
          if(authState.authenticated&&authState.token){
            const clonedReq = req.clone({headers: req.headers.append('x-auth', authState.token)});
            return next.handle(clonedReq);
          }else return next.handle(req);
      })
    )
  }
}
