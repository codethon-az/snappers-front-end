import { Injectable } from '@angular/core';
import { Message } from '../models/Entities/Message';
import { HttpClient } from '@angular/common/http';
import { API_CHATBOT } from '../constants';

@Injectable({
    providedIn: 'root',
})
export class MessageService {
    constructor(private http: HttpClient) {}

    sendMessage(botQuestion: string, userResponse: string) {
        let sillyBeeRequest = { query: botQuestion, response: userResponse };
        return this.http.post<any>(API_CHATBOT, sillyBeeRequest);
        //return new Message('hi', 'assets/images/bot.png', new Date());
    }
}
