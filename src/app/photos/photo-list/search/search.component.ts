import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

    debounce: Subject<string> = new Subject<string>();

    ngOnInit(){
        this.debounce
        .pipe(debounceTime(1000))
        .subscribe(filter => this.filter = filter);
    }

    keyupFilter(target: EventTarget) {
        this.filter = (target as HTMLInputElement).value;
        this.debounce.next(this.filter);
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }
}