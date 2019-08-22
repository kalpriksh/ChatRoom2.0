import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'
import { WebsocketService } from './websocket.service'

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  messages:Subject<any>;

  constructor(private wsService: WebsocketService){
    this.messages = <Subject<any>>wsService
    .connect()
    .m((response: any): any =>{
      return response;
    })

  }

}
