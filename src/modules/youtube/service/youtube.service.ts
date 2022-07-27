import { Injectable } from "@nestjs/common";
import { YoutubeClient } from "../client/youtube.client";
import { xml2js } from "xml-js";
import { SearchResultDTO } from "../dto/youtube-dto";
import { SearchResult } from "../client/youtube.client.types";

@Injectable()
export class YoutubeService {
  constructor(private readonly youtubeClient: YoutubeClient) {}

  async search(query: string): Promise<SearchResultDTO> {
    try {
      const { data: xmlString } = await this.youtubeClient.search(query);
      const xmlStringToConvert = xmlString.substr(
        xmlString.indexOf("<return>"),
        xmlString.indexOf("</ns2:") - xmlString.indexOf("<return>")
      );
      const formatedXml: SearchResult = (
        xml2js(xmlStringToConvert, { compact: true }) as any
      ).return;
      return {
        url: formatedXml.url._text,
        title: formatedXml.title._text,
      };
    } catch (err) {
      console.log(err);
    }
  }
}
