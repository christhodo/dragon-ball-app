import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Saiyan } from '../../common/models/saiyan';

@Component({
  selector: 'dragon-ball-app-saiyans-list',
  templateUrl: './saiyans-list.component.html',
  styleUrls: ['./saiyans-list.component.scss'],
})
export class SaiyansListComponent {
  @Input() saiyans: Saiyan[] = [];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
