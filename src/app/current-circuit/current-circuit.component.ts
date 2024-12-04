import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Circuit } from '../types/circuits';

@Component({
  selector: 'app-current-circuit',
  standalone: true,
  imports: [],
  templateUrl: './current-circuit.component.html',
  styleUrl: './current-circuit.component.css'
})
export class CurrentCircuitComponent implements OnInit{
  circuit = {} as Circuit;

  constructor (private route: ActivatedRoute, private apiService: ApiServiceService) {}

  ngOnInit(): void {
    
    const id  = this.route.snapshot.params["circuitId"]; 

    this.apiService.getSingleCircuit(id).subscribe((circuit) => {
      this.circuit = circuit; 
    });

  }
}
