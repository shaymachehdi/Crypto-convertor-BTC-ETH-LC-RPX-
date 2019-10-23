import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../services/bitcoin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  fiat = 'USD';
  litecoin$: Observable<Crypto>; constructor(private bitcoinProv: BitcoinService) { }


  ngOnInit() {
    this. getLitecoinPrice();
  }

  getLitecoinPrice() {
    this.litecoin$ = this.bitcoinProv.getLiteCoinPrice(this.fiat);
  }
}
