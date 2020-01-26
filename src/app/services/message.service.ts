import { Injectable } from '@angular/core';
import { Message } from '../models/Entities/message';

@Injectable({
    providedIn: 'root',
})
export class MessageService {
    constructor() {}

    sendMessage(message: Message) {
        return new Message('hi', 'assets/images/bot.png', new Date());
    }
}
