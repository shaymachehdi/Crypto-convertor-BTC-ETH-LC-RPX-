import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../services/bitcoin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  fiat = 'USD';
  ethereum: Observable<Crypto>;
  constructor(private bitcoinProv: BitcoinService) {}
  ngOnInit() {
    this.getEthereumPrice();
  }
  getEthereumPrice() {
    this.ethereum = this.bitcoinProv.getEthereumPrice(this.fiat);
  }
}
