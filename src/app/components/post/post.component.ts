import { Component } from '@angular/core';
import { MessagesService } from '../../service/messages.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  tweetMessage: string = '';
  tweetMaxLength: number = 240;
  tweetRemain: number = this.tweetMaxLength;

  constructor(private service: MessagesService) {}

  sendTweet() {
    this.service.addMeessage(this.tweetMessage);
    this.tweetMessage = '';
    this.tweetRemain = this.tweetMaxLength;
  }
  changeTweet(): void {
    this.tweetRemain = this.tweetMaxLength - this.tweetMessage.length;
  }
}
