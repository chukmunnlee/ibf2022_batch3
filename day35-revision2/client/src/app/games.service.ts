import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { GameSummary } from "./models";

const API_URL = 'http://localhost:8080'

@Injectable()
export class GamesService {

  constructor(private http: HttpClient) { }

  getGames(filter = "", limit = 10, skip = 0): Promise<GameSummary[]> {
    const params = new HttpParams()
        .set("filter", filter)
        .set("limit", limit)
        .set("skip", skip)
    return firstValueFrom(
      this.http.get<GameSummary[]>(`${API_URL}/api/games`, { params })
    )
  }

 }
