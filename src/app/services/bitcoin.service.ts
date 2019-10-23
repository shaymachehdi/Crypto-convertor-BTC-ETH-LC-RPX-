import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  private ROOT_URL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC';
  private ROOT_URL1 = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/ETH';
  private ROOT_URL2 = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/XRP';
  private ROOT_URL3 = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/LTC';
  


  constructor(private http: HttpClient) { }

  getBitoinPrice(fiat: string) {
    return this.http.get<Crypto>(`${this.ROOT_URL}${fiat}`);
  }

  getEthereumPrice(fiat: string) {
    return this.http.get<Crypto>(`${this.ROOT_URL1}${fiat}`);
  }
  getRipplePrice(fiat: string) {
    return this.http.get<Crypto>(`${this.ROOT_URL2}${fiat}`);
  }
  getLiteCoinPrice(fiat: string) {
    return this.http.get<Crypto>(`${this.ROOT_URL3}${fiat}`);
   


  }


}
