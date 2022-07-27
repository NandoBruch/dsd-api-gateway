import { Controller, Get, Param } from "@nestjs/common";
import { SearchResultDTO } from "../dto/youtube-dto";
import { YoutubeService } from "../service/youtube.service";

@Controller({ path: "youtube" })
export class YoutubeController {
  constructor(private readonly youtubeService: YoutubeService) {}

  @Get("/search/:query")
  async search(@Param("query") query: string): Promise<SearchResultDTO> {
    return this.youtubeService.search(query);
  }
}
