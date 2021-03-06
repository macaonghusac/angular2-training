import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent} from './events/events-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'
import { EventDetailsComponent } from './events/events-details/event-details.component'
import { appRoutes } from './routes'
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component} from './errors/404.component'
import { EventRouteActivator } from './events/events-details/event-route-activator.service'
import { EventListResolver } from './events/event-list-resolver.service'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        CreateEventComponent,
        Error404Component
        ],
    providers: [ 
        EventService, 
        ToastrService, 
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        EventListResolver
     ],
    bootstrap: [EventsAppComponent]

})
export class AppModule {
    
  
}

function checkDirtyState(component:CreateEventComponent){
    if(component.isDirty)
        return window.confirm('You have not saved this event. Do you really want to cancel?')
    return true
    }
