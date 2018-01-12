import { Component } from '@angular/core';
const styles = require('./app.component.scss');
@Component({
  selector: 'app-root',
  template: require('./app.component.html'),
  styles: [`${styles}`]
})
export class AppComponent{
  title = 'app';

}

