import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {
    
    @Output() onTyping = new EventEmitter<string>();
    @Input() value: string = '';
    debounce: Subject<string> = new Subject<string>();
    filter: string  = '';

    ngOnInit(){
        this.debounce
        .pipe(debounceTime(300))
        .subscribe(filter => this.onTyping.emit(filter)); //this.filter = filter
    }

    keyupFilter(target: EventTarget) {
        this.filter = (target as HTMLInputElement).value;
        this.debounce.next(this.filter);
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }
}