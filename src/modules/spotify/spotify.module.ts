import { Module } from "@nestjs/common";
import { SpotifyClient } from "./client/spotify.client";
import { SpotifyController } from "./controller/spotify.controller";
import { SpotifyService } from "./service/spotify.service";

@Module({
  imports: [],
  controllers: [SpotifyController],
  providers: [SpotifyService, SpotifyClient],
})
export class SpotifyModule {}
