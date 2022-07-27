import { Injectable } from "@nestjs/common";
import { SpotifyClient } from "../client/spotify.client";

@Injectable()
export class SpotifyService {
  constructor(private readonly spotifyClient: SpotifyClient) {}

  async search(query: string): Promise<{ url: String }> {
    try {
      const { data: uri } = await this.spotifyClient.search(query);
      return { url: uri };
    } catch (err) {
      console.log(err);
    }
  }
}
