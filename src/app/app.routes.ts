import { Routes } from "@angular/router";
import { EntryLoadingPageComponent } from "./frame/entry-loading-page/entry-loading-page.component";
import { LoginPageComponent } from "./frame/login-page/login-page.component";
import { WorkingSpaceComponent } from "./sub-frame/working-space/working-space.component";
import { WorkingFrameComponent } from "./frame/working-frame/working-frame.component";

export const routes: Routes = [
    { path: '', component: EntryLoadingPageComponent }, // Default route
    { path: 'login', component: LoginPageComponent },
    { path: 'workingspace', component: WorkingFrameComponent },
    { path: '**', component: WorkingFrameComponent }, // Wildcard route for 404 handling
];
