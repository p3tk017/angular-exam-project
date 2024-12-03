import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-entry-list',
  standalone: true,
  imports: [],
  templateUrl: './entry-list.component.html',
  styleUrl: './entry-list.component.css'
})
export class EntryListComponent implements OnInit {
  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.apiService.getEnries().subscribe(e => {
      console.log(e);
    })
  }
}
