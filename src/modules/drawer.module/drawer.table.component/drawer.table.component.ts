import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {DrawerResponse} from '../shared/entities/drawer.response';
import {DrawerService} from '../shared/services/drawer.service';

@Component({
  selector: 'app-atm-table',
  templateUrl: './atm.table.component.html',
  styleUrls: ['./atm.table.component.css']
})
export class DrawerTableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = { searching: false, paging: false};
  dtTrigger: Subject<any> = new Subject<any>();
  drawers: DrawerResponse[];

  constructor(private tokenVerificator: TokenVerificator, private drawersService: DrawerService) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.drawersService.getAllDrawers().subscribe(response => {
      this.drawers = response;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  deleteBranch(id: number): void {
    this.drawersService.deleteDrawerById(id).subscribe(response => {
      this.drawersService.getAllDrawers().subscribe(drawersResponse => {
        this.drawers = drawersResponse;
      });
    });
  }
}
