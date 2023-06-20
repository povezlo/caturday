import { Component, OnInit } from '@angular/core';
import { ApiCatService } from './shared/services/cat-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'caturday';

  constructor(private api: ApiCatService) {}

  ngOnInit(): void {
    this.api.getCats()?.subscribe(res => {
      console.log(res);
    });
  }
}
