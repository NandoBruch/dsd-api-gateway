import { Inject, Injectable } from "@nestjs/common";
import axios, { AxiosResponse } from "axios";

@Injectable()
export class SpotifyClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = "http://localhost:3002";
  }

  search(query: string): Promise<AxiosResponse<string>> {
    return axios.get(`${this.baseUrl}/search/${decodeURI(query)}`);
  }
}
