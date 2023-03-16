import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
  takeOffEnabled: boolean = true;

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.message = 'Shuttle in flight.';
    }
 }

 handleLand() {
  let result = window.confirm("The shuttle is landing. Landing gear engaged.");
  if (result) {
     this.color = 'blue';
     this.height = 10000;
     this.width = 0;
     this.message = "The shuttle has landed.";
  }
}

handleAbortMission() {
  let result = window.confirm("Are you really want to abort the mission?");
  if (result) {
     this.color = 'blue';
     this.height = 10000;
     this.width = 0;
     this.message = "Mission aborted.";
  }
}


moveRocketRight(rocketImage, direction) {
  if (direction === 'right') {
     let movement = parseInt(rocketImage.style.left) + 10 + 'px';
     rocketImage.style.left = movement;
     this.width = this.width + 10000;
  }
}

moveRocketLeft(rocketImage, direction) {
  if (direction === 'left') {
     let movement = parseInt(rocketImage.style.right) + 10 + 'px';
     rocketImage.style.right = movement;
     this.width = this.width + 10000;
  }
}

moveRocketUp(rocketImage, direction) {
  if (direction === 'up') {
     let movement = parseInt(rocketImage.style.down) + 10 + 'px';
     rocketImage.style.down = movement;
     this.height = this.height + 10000;
  }
}

moveRocketDown(rocketImage, direction) {
  if (direction === 'down') {
     let movement = parseInt(rocketImage.style.up) + 10 + 'px';
     rocketImage.style.up = movement;
     this.height = this.height - 10000;
  }
}
}
