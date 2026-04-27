import { Component } from '@angular/core';
import { Parent } from './parent/parent';

@Component({
  selector: 'app-component-comm',
  imports: [Parent],
  templateUrl: './component-comm.html'
})
export class ComponentComm {}
