import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isOpenDrawer = false;

  constructor() {}

  ngOnInit(): void {}

  onClickToggle() {
    this.isOpenDrawer = !this.isOpenDrawer;
  }
}
