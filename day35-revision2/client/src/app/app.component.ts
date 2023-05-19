import { Component, Input, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Will not work
  @Input()
  name!: string

  ngOnInit(): void {
    // Make a HTTP call back to the Spring Boot to get data
    // for initialization
    console.info('name = ', this.name)
    console.info('query string: ', window.location.search.substring(1))
  }
}
