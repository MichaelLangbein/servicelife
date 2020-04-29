import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { NumberService } from 'src/app/services/number.service';

@Component({
  selector: 'app-neighbor',
  templateUrl: './neighbor.component.html',
  styleUrls: ['./neighbor.component.css'],
  providers: [ColorService]
})
export class NeighborComponent implements OnInit {

  public color: string;
  public number: number;

  constructor(
    private colorSvc: ColorService,
    private numberSvc: NumberService
  ) {
    this.color = this.colorSvc.getColor();
    this.number = this.numberSvc.getNumber();
  }

  ngOnInit(): void {
  }

}
