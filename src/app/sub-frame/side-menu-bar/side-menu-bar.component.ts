import { Component } from '@angular/core';
import { LeftSideMenuBarButtonComponent } from "../../sub-sub-frame/side-menu-bar/left-side-menu-bar-button/left-side-menu-bar-button.component";
import { ButtonBasedTransitionService } from '../services/button-based-transition.service';

@Component({
  selector: 'app-side-menu-bar',
  standalone: true,
  imports: [LeftSideMenuBarButtonComponent],
  templateUrl: './side-menu-bar.component.html',
  styleUrl: './side-menu-bar.component.css'
})
export class SideMenuBarComponent {
  activeButtonText: string = 'Home'; // Default active button
  constructor(private activeStateService: ButtonBasedTransitionService) {}

  // Function to set the active button
  setActiveButton(buttonText: string): void {
    this.activeButtonText = buttonText;
    this.activeStateService.setActiveButton(buttonText);
  }

}
