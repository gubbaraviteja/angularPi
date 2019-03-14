import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'haveFunWithPi';
  pi = "3.1415926535 897932384626 4338327950288 4197169399375 1058209749445 92307816406286 2089986280348 253421170679821 4808651328230";
  piAim = "3.141592653589793238462643383279502884197169399375105820974944592307816406286 20899862803482534211706798214808651328230";
  piInput = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  pi100 = ["1415926535", "897932384626", "4338327950288", "4197169399375", "1058209749445", "92307816406286", "2089986280348",
    "253421170679821", "4808651328230"];
  pi100UserInput = [];

  tranlsate() {
    return this.pi.replace(/[0123456789]/g, m => this.piInput[m]);
  }

  isValueCorrect(input, fact){
    return input == fact;
  }
}
