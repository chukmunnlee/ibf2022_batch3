import { Component, Input, OnInit } from '@angular/core';
import { GameSummary } from '../models';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {

  @Input()
  limit = 5

  @Input()
  skip = 0

  @Input()
  filter = ""

  constructor(private gameSvc: GamesService) { }

  games$!: Promise<GameSummary[]>

  ngOnInit(): void {
    this.games$ = this.gameSvc.getGames(this.filter, this.limit, this.skip)
  }

  fetchChanges(limit: string) {
    this.limit = +limit
    this.games$ = this.gameSvc.getGames(this.filter, this.limit, this.skip)
  }

  filtering(text: string) {
    this.filter = text
    this.games$ = this.gameSvc.getGames(this.filter, this.limit, this.skip)
  }

  page(d: number) {
    if (d >= 0)
      this.skip += this.limit
    else
      this.skip = Math.max(0, this.skip - this.limit)

    this.games$ = this.gameSvc.getGames(this.filter, this.limit, this.skip)
  }

}
