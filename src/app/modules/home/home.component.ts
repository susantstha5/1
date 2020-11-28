import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/data/types/service.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  bankingServices: Service[] = [
    {
      id: 1,
      imageUrl: 'assets/img/digitalpayment.svg',
      name: 'Digital Payment Services'
    },
    {
      id: 2,
      imageUrl: 'assets/img/chequedeposit.svg',
      name: 'General Banking Services'
    },
    {
      id: 3,
      imageUrl: 'assets/img/cashdeposit.svg',
      name: 'Digital Payment Services'
    },
    {
      id: 4,
      imageUrl: 'assets/img/digitalpayment.svg',
      name: 'Card Services'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
