import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Saiyan, emptySaiyan } from '../common/models/saiyan';
import { SaiyansService } from '../common/services/saiyans.service';

@Component({
  selector: 'dragon-ball-app-saiyans',
  templateUrl: './saiyans.component.html',
  styleUrls: ['./saiyans.component.scss'],
})
export class SaiyansComponent implements OnInit {
  saiyans = [];
  saiyans$: any;
  selectedSaiyan = emptySaiyan;
  originalAlias = '';

  constructor(private saiyansService: SaiyansService) {}

  ngOnInit(): void {
    this.fetchSaiyans();
  }

  selectSaiyan(saiyan: Saiyan) {
    this.selectedSaiyan = saiyan;
  }

  fetchSaiyans() {
    this.saiyans$ = this.saiyansService.all();
  }

  saveSaiyan(saiyan: Saiyan) {
    if (saiyan.id) {
      this.updateSaiyan(saiyan);
    } else {
      this.createSaiyan(saiyan);
    }
  }

  createSaiyan(saiyan: Saiyan) {
    this.saiyansService
      .create(saiyan)
      .subscribe((result) => this.fetchSaiyans());
  }

  updateSaiyan(saiyan: Saiyan) {
    this.saiyansService
      .update(saiyan)
      .subscribe((result) => this.fetchSaiyans());
  }

  deleteSaiyan(saiyanId) {
    console.log('DELETE HERO', saiyanId);
  }

  reset() {
    this.selectSaiyan({ ...emptySaiyan });
  }
}
