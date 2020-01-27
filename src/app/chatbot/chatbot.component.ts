import { Component, OnInit } from '@angular/core';
import { Message } from '../models/Entities/Message';
import { IMG_USER, IMG_BOT } from '../constants';

@Component({
    selector: 'app-chatbot',
    templateUrl: './chatbot.component.html',
    styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent implements OnInit {
    public message: Message;
    public messages: Message[];
    constructor() {
        this.message = new Message('', IMG_USER);
        this.messages = [
            new Message('Do you like the house?', IMG_BOT, new Date()),
        ];
    }

    ngOnInit() {}
}
