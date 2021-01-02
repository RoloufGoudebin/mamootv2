import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-valeurs',
  templateUrl: './valeurs.component.html',
  styleUrls: ['./valeurs.component.css', './solutions-cards.css', 'carousel-story.css']
})
export class ValeursComponent implements OnInit {




  constructor(private titleService:Title) {
    this.titleService.setTitle("Nos Valeurs");
  }

  ngOnInit() {
    this.loadScript('../assets/js/main.js')

  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
