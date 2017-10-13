import { Component } from '@angular/core';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styles: [`
      .white {
    color: white;
    }
  `]
})
export class inputComponent  {
    username = '';
    display = true;
    logs = [];


    resetUsername() {
      return this.username = ''
    };

    toggleVisability() {
        this.logs.push(new Date());
        return this.display = !this.display;
    }


}
