import { Module } from "@nestjs/common";
import { YoutubeClient } from "./client/youtube.client";

import { YoutubeController } from "./controller/youtube.controller";
import { YoutubeService } from "./service/youtube.service";

@Module({
  imports: [],
  controllers: [YoutubeController],
  providers: [YoutubeService, YoutubeClient],
})
export class YoutubeModule {}
