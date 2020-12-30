import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css', './solutions-cards.css']
})
export class SolutionsComponent implements OnInit {

  constructor(private titleService:Title) { 
    this.titleService.setTitle("Solutions");
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
