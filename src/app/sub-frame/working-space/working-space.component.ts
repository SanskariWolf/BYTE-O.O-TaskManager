import { Component, Input } from '@angular/core';
import { HomePageComponent } from "../../sub-sub-frame/working-space/home-page/home-page.component";
import { PomodoroPageComponent } from "../../sub-sub-frame/working-space/pomodoro-page/pomodoro-page.component";
import { NgIf } from '@angular/common';
import { ButtonBasedTransitionService } from '../services/button-based-transition.service';
import { YourTasksPageComponent } from "../../sub-sub-frame/working-space/your-tasks-page/your-tasks-page.component";
import { CalendarPageComponent } from "../../sub-sub-frame/working-space/calendar-page/calendar-page.component";
import { ProjectAndEventsPageComponent } from "../../sub-sub-frame/working-space/project-and-events-page/project-and-events-page.component";
import { ArchivesPageComponent } from "../../sub-sub-frame/working-space/archives-page/archives-page.component";

@Component({
  selector: 'app-working-space',
  standalone: true,
  imports: [HomePageComponent, PomodoroPageComponent, NgIf, YourTasksPageComponent, CalendarPageComponent, ProjectAndEventsPageComponent, ArchivesPageComponent],
  templateUrl: './working-space.component.html',
  styleUrl: './working-space.component.css'
})
export class WorkingSpaceComponent {
  activeButtonText: string = 'Home'; // Default active button

  constructor(private activeStateService: ButtonBasedTransitionService) {
    // Subscribe to activeButton$ to update the displayed page based on active button
    this.activeStateService.activeButton$.subscribe(buttonText => {
      this.activeButtonText = buttonText;
    });}

}
