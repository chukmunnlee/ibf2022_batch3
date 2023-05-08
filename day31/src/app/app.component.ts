import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pics: string[] = [
    "https://pbs.twimg.com/media/BkCGc_LIIAESQR1.jpg",
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201601/bear---facebook-and-storysize_647_012816013440.jpg?VersionId=tyqW9grFUq2w7P_M8lEw8KOksbcdctkL&size=690:388"
  ]

  values: number[] = []

  selectedNums: number[] = []

  constructor() {

    this.generateNums()

  }

  valueSelected(n: number) {
    console.info('>>>> app.component: value selected: ', n)
    this.selectedNums.push(n)
  }

  generateNums() {

    this.values = []
    // Generate 5 random numbers between 1 and 30 (inclusive)
    for (let i = 0; i < 5; i++) {
      const n = Math.floor(Math.random() * 30) + 1
      this.values.push(n)
    }

    console.info('>>> generated values: ', this.values)
  }
}
