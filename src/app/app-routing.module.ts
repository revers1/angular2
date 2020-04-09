import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { EventStartComponent } from './events/event-start/event-start.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {path: "", redirectTo: "/events", pathMatch: "full"},

  {
    path: "events",
    component: EventsComponent,
    children:[
      {path:"", component: EventStartComponent},
      {path:":id", component: EventDetailsComponent}
    ]
  },
    {path:"requirements", component: RequirementsComponent},
    {path:"*", component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
