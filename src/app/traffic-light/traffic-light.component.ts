import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  standalone: true,
  imports: [],
  templateUrl: './traffic-light.component.html',
  styleUrl: './traffic-light.component.scss',
})
export class TrafficLightComponent implements OnInit {
  @Input() id?: number;
  currentColor: string = 'red';
  interval: any;
  emergencyMode: boolean = false;

  ngOnInit(): void {
    this.startTrafficLightCycle();
  }

  startTrafficLightCycle() {
    let cycle = ['red', 'yellow', 'green', 'yellow'];
    let durations = [5000, 2000, 5000, 2000];
    let index = 0;

    this.interval = setInterval(() => {
      this.currentColor = cycle[index];
      index = (index + 1) % cycle.length;
    }, durations[index]);
  }

  cross() {
    if (this.currentColor === 'yellow') {
      alert('неправилно пресичане');
    }
  }

  setEmergencyMode(active: boolean) {
    this.emergencyMode = active;

    if (active) {
      clearInterval(this.interval);
      this.currentColor = 'yellow';

      setTimeout(() => {
        this.startTrafficLightCycle();
      }, 10000);
    }
  }
}
