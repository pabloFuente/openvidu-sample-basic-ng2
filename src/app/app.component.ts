import { Component } from '@angular/core';
import { OpenViduTokBox, SessionTokBox } from 'openvidu-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  private OV: OpenViduTokBox;
  private session: SessionTokBox;

  // Join form
  sessionId: string;
  token: string;

  constructor() {
    this.generateParticipantInfo();
  }

  private generateParticipantInfo() {
    this.sessionId = 'SessionA';
    this.token = 'Participant' + Math.floor(Math.random() * 100);
  }

  joinSession() {
    this.sessionId = (<HTMLInputElement>document.getElementById('sessionId')).value;
    this.token = (<HTMLInputElement>document.getElementById('token')).value;

    this.OV = new OpenViduTokBox('wss://' + location.hostname + ':8443/');
    this.session = this.OV.initSession('apikey', this.sessionId);

    // 2) Specify the actions when events take place
    this.session.on('streamCreated', (event) => {
      this.session.subscribe(event.stream, 'subscriber', {
        insertMode: 'append',
        width: '100%',
        height: '100%'
      });
    });

    // 3) Connect to the session
    this.session.connect(this.token, (error) => {
      // If the connection is successful, initialize a publisher and publish to the session
      if (!error) {

        // 4) Get your own camera stream with the desired resolution and publish it, only if the user is supposed to do so
        let publisher = this.OV.initPublisher('publisher', {
          insertMode: 'append',
          width: '100%',
          height: '100%'
        });

        // 5) Publish your stream
        this.session.publish(publisher);

      } else {
        console.log('There was an error connecting to the session:', error.code, error.message);
      }
    });

    return false;
  }

  leaveSession() {
    if (this.OV) {this.session.disconnect();};
    this.session = null;
    this.OV = null;
    this.generateParticipantInfo();
  }

}
