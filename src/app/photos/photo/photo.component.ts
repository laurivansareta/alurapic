import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})

export class PhotoComponent {    
    title = 'Foto';
    @Input() description='';
    @Input() url='';
}