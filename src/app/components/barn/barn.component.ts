import { Component, OnInit } from '@angular/core';
import { Barn } from 'src/app/models/barn';
import { BarnService } from 'src/app/services/barn.service';


@Component({
  selector: 'app-barn',
  templateUrl: './barn.component.html',
  styleUrls: ['./barn.component.css']
})
export class BarnComponent implements OnInit {
  barnList: Barn[] = [];

  constructor(private barnService: BarnService) { }

  ngOnInit(): void {
    this.barnService.getAllBarns().subscribe(barn => {
      this.barnList = barn;
    })
  }

}



