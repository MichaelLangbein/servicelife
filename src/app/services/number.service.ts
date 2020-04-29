import { Injectable } from '@angular/core';

@Injectable()
export class NumberService {

  private number: number;

  constructor() {
    this.number = this.getRandomNumber();
  }

  public getNumber(): number {
    return this.number;
  }

  private getRandomNumber(): number {
    return Math.floor(Math.random() * 10000);
  }
}
