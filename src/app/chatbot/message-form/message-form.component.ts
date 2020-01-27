import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/models/Entities/Message';
import { MessageService } from 'src/app/services/message.service';

@Component({
    selector: 'app-message-form',
    templateUrl: './message-form.component.html',
    styleUrls: ['./message-form.component.scss'],
})
export class MessageFormComponent implements OnInit {
    @Input('message')
    message: Message;

    @Input('messages')
    messages: Message[];

    question: string;
    userResponse: string;

    constructor(private messageService: MessageService) {}

    ngOnInit() {}

    public sendMessage(): void {
        this.question = this.messages[this.messages.length - 1].content;
        this.message.timestamp = new Date();
        //this.messages.push(this.message);
        this.message = new Message(
            this.message.content,
            'assets/images/user.png'
        );
        this.userResponse = this.message.content;
        let messageObs$ = this.messageService.sendMessage(
            this.question,
            this.userResponse
        );

        messageObs$.subscribe(res => console.log(res));
        //this.messages.push(this.messageService.sendMessage(this.message));
    }
}
