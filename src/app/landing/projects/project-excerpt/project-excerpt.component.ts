import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-excerpt',
  templateUrl: './project-excerpt.component.html',
  styleUrls: ['./project-excerpt.component.scss']
})
export class ProjectExcerptComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() imgUrl: string;
  @Input() link: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
