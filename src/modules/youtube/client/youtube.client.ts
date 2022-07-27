import { Inject, Injectable } from "@nestjs/common";
import axios, { AxiosResponse } from "axios";

@Injectable()
export class YoutubeClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = "http://127.0.0.1:9876/youtube?wsdl";
  }

  search(query: string): Promise<AxiosResponse<string>> {
    return axios.post(
      this.baseUrl,
      `<soapenv:Envelope
         xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
         xmlns:urn="http://soapserver.mycompany.com/">
         <soapenv:Header/>
         <soapenv:Body>
             <urn:search>
                 <arg0>${query}</arg0>
             </urn:search>
         </soapenv:Body>
         </soapenv:Envelope>`,
      {
        headers: { "Content-Type": "text/xml" },
      }
    );
  }
}
