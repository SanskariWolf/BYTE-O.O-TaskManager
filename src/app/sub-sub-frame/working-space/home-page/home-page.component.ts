import { Component } from '@angular/core';
import { Card01Component } from "../../../sub-sub-sub-frame/working-space/home-page/card-01/card-01.component";
import { Card02Component } from "../../../sub-sub-sub-frame/working-space/home-page/card-02/card-02.component";
import { Card03Component } from "../../../sub-sub-sub-frame/working-space/home-page/card-03/card-03.component";
import { Card04Component } from "../../../sub-sub-sub-frame/working-space/home-page/card-04/card-04.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [Card01Component, Card02Component, Card03Component, Card04Component],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
