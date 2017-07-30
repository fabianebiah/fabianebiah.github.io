import { Component, OnInit , Input} from '@angular/core';


@Component({
  selector: 'app-det-produto',
  templateUrl: './det-produto.component.html',
  styleUrls: ['./det-produto.component.css']
})
export class DetProdutoComponent implements OnInit {

  @Input() menu: string;
  
  constructor() { }

  ngOnInit() {
  }

}
