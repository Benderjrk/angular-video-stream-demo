import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
declare const flvjs: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'scott-stream';

  ngOnInit() {
    this.setupFlv();
  }

  setupFlv() {
    if (flvjs.isSupported()) {
      const videoElement = document.getElementById('videoElement');
      const flvPlayer = flvjs.createPlayer({
          type: 'flv',
          url: `http://${environment.IPADDR}:8000/live/${environment.STREAMCODE}.flv`
      });
      flvPlayer.attachMediaElement(videoElement);
      flvPlayer.load();
      flvPlayer.play();
    }
  }
}
