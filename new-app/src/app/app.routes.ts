import { Routes } from '@angular/router';
import { ComponentComm } from './component-comm/component-comm';
import { AudioPlayer } from './audio-player/audio-player';
import { Directives } from './directives/directives';
import { TemplateForm } from './template-form/template-form';
import { ReactiveForm } from './reactive-form/reactive-form';
import { Cards } from './cards/cards';

export const routes: Routes = [
  { path: '', redirectTo: 'component-comm', pathMatch: 'full' },
  { path: 'component-comm', component: ComponentComm },
  { path: 'audio-player', component: AudioPlayer },
  { path: 'directives', component: Directives },
  { path: 'template-form', component: TemplateForm },
  { path: 'reactive-form', component: ReactiveForm },
  { path: 'cards', component: Cards }
];
