import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string ='ironman';
  public age:number =45;

  get capitalizedName():string{//Metodo
    return this.name.toUpperCase();

  }
  //------------------
  getHeroDescription():string{
    return `${this.name }-${this.age}`;
  }
  changeHero():void{
  this.name = 'Andrea';
  }
  changeAge(){
  this.age = 26;
  }
  resetFrom():void{
    this.name='ironman'
    this.age = 45;
  }

}
