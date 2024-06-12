import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroName: string[] = ['Spiderman','ironman','she hulk']
public deleteHero?: string;

  removeLastHero():void{
    this.deleteHero = this.heroName.pop();
    console.log(this.deleteHero);
  }
}
