import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UppercaseService } from '../uppercase.service';

@Component({
  selector: 'app-uppercase',
  templateUrl: './uppercase.component.html',
  styleUrls: ['./uppercase.component.css']
})
export class UppercaseComponent implements OnInit {

  text = ''

  activatedRoute = inject(ActivatedRoute)
  uppercase$!: Observable<string>

  uppercaseSvc = inject(UppercaseService)

  ngOnInit(): void {
    this.text = this.activatedRoute.snapshot.queryParams['text']
    this.uppercase$ = this.uppercaseSvc.toUppercase(this.text)

  }

}
