import { Component } from '@angular/core';
import { ProfileBarComponent } from "../../profile-bar/profile-bar.component";
import { WorkingSpaceComponent } from "../../sub-frame/working-space/working-space.component";
import { SideMenuBarComponent } from "../../sub-frame/side-menu-bar/side-menu-bar.component";

@Component({
  selector: 'app-working-frame',
  standalone: true,
  imports: [ProfileBarComponent, WorkingSpaceComponent, SideMenuBarComponent],
  templateUrl: './working-frame.component.html',
  styleUrl: './working-frame.component.css'
})
export class WorkingFrameComponent {
  
}
