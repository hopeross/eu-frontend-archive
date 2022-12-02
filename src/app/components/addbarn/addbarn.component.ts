import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Barn } from 'src/app/models/barn';
import { BarnService } from 'src/app/services/barn.service';

@Component({
  selector: 'app-addbarn',
  templateUrl: './addbarn.component.html',
  styleUrls: ['./addbarn.component.css']
})
export class AddbarnComponent implements OnInit {
  //private newBarn: Barn = new Barn();

  constructor(private barnService: BarnService, private router: Router) { }

  ngOnInit(): void {
  }

  addNewBarn() {
    // this.barnService.createBarn((this.newBarn)).subscribe(() =>{
    //   this.router.navigate(['barn']);
    //   window.location.reload();
    // })
  }
}