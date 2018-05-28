import {Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    currentJustify = 'justified';

    model: NgbDateStruct;
    date: {year: number, month: number};

    selectToday() {
        this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
    }
}
