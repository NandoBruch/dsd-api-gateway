import { Controller, Get, Param } from "@nestjs/common";
import { SpotifyService } from "../service/spotify.service";

@Controller({ path: "spotify" })
export class SpotifyController {
  constructor(private readonly spotifyService: SpotifyService) {}

  @Get("/search/:query")
  async search(@Param("query") query: string): Promise<{ url: String }> {
    return this.spotifyService.search(query);
  }
}
