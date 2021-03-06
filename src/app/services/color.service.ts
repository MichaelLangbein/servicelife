import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {

  private color: string;

  constructor() {
    this.color = this.getRandomColor();
  }

  public getColor(): string {
    return this.color;
  }

  private getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
