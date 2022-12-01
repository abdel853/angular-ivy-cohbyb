import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class getCartItemsService {
  @Output() event = new EventEmitter();

  getCartItems() {
    return [
      {
        productId: 1,
        productName: 'Fancy paint brushes',
        productUrl:
          'https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/FBDBA10D1E9241E2A8CF66404E5FDD36/10268869_21.jpg?fit=inside|140:140,https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/FBDBA10D1E9241E2A8CF66404E5FDD36/10268869_21.jpg?fit=inside|220:220,https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/FBDBA10D1E9241E2A8CF66404E5FDD36/10268869_21.jpg?fit=inside|540:540',
        productDescription:
          'These amazing paintbrushes are made and exported from Great Britain',
      },
    ];
  }

  constructor() {}
}
