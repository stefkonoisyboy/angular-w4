import { Component, QueryList, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrafficLightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChildren(TrafficLightComponent)
  trafficLights?: QueryList<TrafficLightComponent>;
  emergencyActive: boolean = false;
  emergencyTimeout: any;

  activateEmergency() {
    if (this.emergencyActive) return;

    this.emergencyActive = true;
    this.trafficLights?.forEach((light) => light.setEmergencyMode(true));

    setTimeout(() => {
      this.emergencyActive = false;
    }, 20000); // 10 seconds emergency + 10 seconds cooldown
  }
}
