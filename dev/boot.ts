///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {HTTP_PROVIDERS} from 'angular2/http';
import {InitialService} from './services/initial.service';
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";

bootstrap(AppComponent, [HTTP_PROVIDERS, InitialService]);
