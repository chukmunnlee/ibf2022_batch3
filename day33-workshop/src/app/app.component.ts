import { Component, OnInit, ViewChild } from '@angular/core';
import { ShareComponent } from './components/share.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(ShareComponent)
  shareComp!: ShareComponent

  canShare = false

  ngOnInit(): void {
    this.canShare = !!navigator.share
  }

  share(text: string) {
    console.info('thoughts to share: ', text)
    const data: any = {
      title: 'Share a thought',
      text,
      //url: 'https://google.com'
    }
    navigator.share(data)
      .then(result => {
        alert('Shared')
        this.shareComp.clear()
      })
      .catch(err => alert('JSON: ' + JSON.stringify(err)))
  }
}
