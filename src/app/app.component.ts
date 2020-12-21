import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'alurapic';

  photos = [
    {
      url: 'https://thumbs.jusbr.com/imgs.jusbr.com/publications/artigos/144922528/images/1412967253.jpeg',
      description: 'Leão'
    },
    {
      url: 'https://i0.statig.com.br/bancodeimagens/a8/77/le/a877lepxh7xa3woi9vt16b741.jpg',
      description: 'Leoa'
    }
  ]

}
