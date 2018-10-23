import { Component, OnInit, Input } from '@angular/core';
import { speedDialFabAnimations } from './speed-dial-fab.animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-speed-dial-fab',
  templateUrl: './speed-dial-fab.component.html',
  styleUrls: ['./speed-dial-fab.component.scss'],
  animations:speedDialFabAnimations
})
export class SpeedDialFabComponent implements OnInit {
  
  @Input() link:any;
  fabButtons = [
    {
      icon: 'fa fa-plus',
      button: 'btn btn-outline-danger',
      link: '/dashboard/branch-master/new',
      text:'Add Branch'
    },
    {
      icon: 'fa fa-plus',
      button: 'btn btn-outline-success',
      link: '/dashboard/bank-master/new',
      text:'Add Bank'
    },
    {
      icon: 'fa fa-circle',
      button: 'btn btn-outline-primary',
      link: '/dashboard/raw-product/new',
      text: 'Add Product'
    },
    {
      icon: 'fa fa-plus',
      button: 'btn btn-outline-secondary',
      link: '/dashboard/charts-of-accounts/new',
      text: 'Add Chart of Account'
    },
    {
      icon: 'fa fa-plus',
      button: 'btn btn-outline-danger',
      link: '/dashboard/unit-of-measurement/new',
      text:'Unit of Measurement'
    }
  ];
  buttons = [];
  fabTogglerState = 'inactive';

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

  showItems() {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab() {
    this.buttons.length ? this.hideItems() : this.showItems();
  }

  @Input()
  setLink(link)
  {
    this.link = link;
  }
  goToLink()
  {
    console.log(this.link)
    this.router.navigateByUrl(this.link);
  }
}
