import { Component, OnInit } from '@angular/core';
import { Show } from '../../namensmodel/show';
import { ShowDataService } from '../../services/show-data.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css'],
})
export class ShowListComponent implements OnInit {
  constructor(private showDataService: ShowDataService) {}

  get shows(): Show[] {
    return this.showDataService.shows;
  }

  ngOnInit() {}
}
