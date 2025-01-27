import { Component } from '@angular/core';
import { SideMenuBarComponent } from "../sub-frame/side-menu-bar/side-menu-bar.component";
import { WorkingSpaceComponent } from "../sub-frame/working-space/working-space.component";

@Component({
  selector: 'app-main-frame',
  standalone: true,
  imports: [SideMenuBarComponent, WorkingSpaceComponent],
  templateUrl: './main-frame.component.html',
  styleUrl: './main-frame.component.css'
})
export class MainFrameComponent {

}
