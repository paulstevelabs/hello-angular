import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss'],
})
export class TimeDisplayComponent implements OnInit {
  @Input() inputData = '';

  min = 0;
  sec = 0;
  ms = 0;

  timeInterval: any;

  constructor() {
    // setInterval(() => {
    //   this.timeText++;
    // }, 1000);
  }

  timeStart() {
    this.timeInterval = setInterval(() => {
      this.ms++;
      if (this.ms > 99) {
        this.sec++;
        this.ms = 0;
      }
      if (this.sec > 59) {
        this.min++;
        this.sec = 0;
      }
      if (this.min > 1) {
        console.log('tq');

        clearInterval(this.timeInterval);
        alert('시간이 초과되었습니다.');
      }
    }, 10);
  }

  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.timeStop();
    this.min = 0;
    this.sec = 0;
    this.ms = 0;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if (propName == 'inputData') {
        switch (changes[propName].currentValue) {
          case 'start':
            this.timeStart();
            break;
          case 'stop':
            this.timeStop();
            break;
          case 'reset':
            this.timeReset();
            break;

          default:
            break;
        }
      }
    }
  }
}
