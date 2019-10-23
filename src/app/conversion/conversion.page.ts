import { Component, OnInit } from '@angular/core';
import {BitcoinService} from '../services/bitcoin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.page.html',
  styleUrls: ['./conversion.page.scss'],
})
export class ConversionPage implements OnInit {
public   from = 'BTC' ;
public To = 'USD' ;
public  amount = 1 ; 
public amount1 = 1;
currency$: Observable<Crypto>;
currency1$: Observable<Crypto>;

  constructor( private  price: BitcoinService) { }

  ngOnInit() {
    this.getConvertPrice();
  }
getConvertPrice() { 

  if (this.from === 'BTC' )  { this.currency$ = this.price.getBitoinPrice(this.To); }

else

if (this.from === 'ETH' )  { this.currency$ = this.price. getEthereumPrice(this.To);  }

else if  (this.from === 'XRP' )  { this.currency$ = this.price. getRipplePrice(this.To); }

else

{ this.currency$ = this.price. getLiteCoinPrice(this.To);  }
  
}
}
