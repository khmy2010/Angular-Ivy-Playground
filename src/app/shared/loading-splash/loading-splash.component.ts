import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-loading-splash',
  templateUrl: './loading-splash.component.html',
  styleUrls: ['./loading-splash.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingSplashComponent {
  @Input() show: boolean = true;
}
