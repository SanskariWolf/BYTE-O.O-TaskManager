import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-left-side-menu-bar-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './left-side-menu-bar-button.component.html',
  styleUrl: './left-side-menu-bar-button.component.css'
})
export class LeftSideMenuBarButtonComponent {
  @Input() buttonText: string = 'Home';
  @Input() isActive: boolean = false;
}
