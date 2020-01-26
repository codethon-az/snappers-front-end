import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/Entities/message';
import { MessageService } from 'src/app/services/message.service';

@Component({
    selector: 'app-message-form',
    templateUrl: './message-form.component.html',
    styleUrls: ['./message-form.component.scss'],
})
export class MessageFormComponent implements OnInit {
    @Input('message')
    private message: Message;

    @Input('messages')
    private messages: Message[];

    constructor(private messageService: MessageService) {}

    ngOnInit() {}

    public sendMessage(): void {
        this.message.timestamp = new Date();
        this.messages.push(this.message);
        this.message = new Message(
            this.message.content,
            'assets/images/user.png'
        );
        this.messages.push(this.messageService.sendMessage(this.message));
    }
}
