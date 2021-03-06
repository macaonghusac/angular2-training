"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events_list_component_1 = require("./events/events-list.component");
var event_details_component_1 = require("./events/events-details/event-details.component");
var create_event_component_1 = require("./events/create-event.component");
var _404_component_1 = require("./errors/404.component");
var event_route_activator_service_1 = require("./events/events-details/event-route-activator.service");
var event_list_resolver_service_1 = require("./events/event-list-resolver.service");
exports.appRoutes = [
    { path: 'events/new', component: create_event_component_1.CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: events_list_component_1.EventsListComponent, resolve: { EventListResolver: event_list_resolver_service_1.EventListResolver } },
    { path: '404', component: _404_component_1.Error404Component },
    { path: 'events/:id', component: event_details_component_1.EventDetailsComponent, canActivate: [event_route_activator_service_1.EventRouteActivator] },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map