import { Injectable } from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import * as ChatsActions from './chats.actions';

const SERVER_PATH = environment.server;

@Injectable()
export class ChatsEffects{



  constructor(private actions$: Actions, private httpClient: HttpClient){}
}
