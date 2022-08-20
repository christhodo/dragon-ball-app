import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Saiyan } from '../../common/models/saiyan';

@Component({
  selector: 'dragon-ball-app-saiyan-details',
  templateUrl: './saiyan-details.component.html',
  styleUrls: ['./saiyan-details.component.scss'],
})
export class SaiyanDetailsComponent {
  currentSaiyan: Saiyan;
  originalName = '';

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set saiyan(value) {
    if (!value) return;
    this.currentSaiyan = { ...value };
    this.originalName = this.currentSaiyan.name;
  }
}
