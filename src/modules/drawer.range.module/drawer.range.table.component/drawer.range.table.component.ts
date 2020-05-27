import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {DrawerRangeResponse} from '../shared/entities/drawer.range.response';
import {DrawerRangeService} from '../shared/services/drawer.range.service';

@Component({
  selector: 'app-drawer-range-table',
  templateUrl: './drawer.range.table.component.html',
  styleUrls: ['./drawer.range.table.component.css']
})
export class DrawerRangeTableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = { searching: false, paging: false};
  dtTrigger: Subject<any> = new Subject<any>();
  drawers: DrawerRangeResponse[];

  constructor(private tokenVerificator: TokenVerificator, private drawersService: DrawerRangeService) {
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
