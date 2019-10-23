import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BitcoinService } from '../services/bitcoin.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  fiat = 'USD';
  ripple: Observable<Crypto>;
  constructor(private bitcoinProv: BitcoinService) {}
  ngOnInit() {
    this.getRipplePrice();
  }
  getRipplePrice() {
    this.ripple = this.bitcoinProv.getRipplePrice(this.fiat);
  }
}
