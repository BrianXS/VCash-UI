import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {TokenVerificator} from '../../app.module/shared/services/token.verificator';
import {BranchResponse} from '../shared/entities/branch.response';
import {BranchesServices} from '../shared/services/branch.service';

@Component({
  selector: 'app-branch-table',
  templateUrl: './branch.table.component.html',
  styleUrls: ['./branch.table.component.css']
})
export class BranchTableComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = { searching: false, paging: false};
  dtTrigger: Subject<any> = new Subject<any>();
  branches: BranchResponse[];

  constructor(private tokenVerificator: TokenVerificator, private branchesServices: BranchesServices) {
    tokenVerificator.verifyTokenValidity();
  }

  ngOnInit(): void {
    this.branchesServices.getAllBranches().subscribe(response => {
      this.branches = response;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
