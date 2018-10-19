import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {ShareService } from '../../shared/services/share.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-full-layout',
    templateUrl: './full-layout.component.html',
    styleUrls: ['./full-layout.component.scss']
})

export class FullLayoutComponent {
    options = {
        direction: 'ltr'
    };
    constructor(
        private shareService:ShareService,
        private router:Router){
            this.shareService.setVisibility(false);
        }
        

    ngOnInit(){
    }
    ngOnChanges(): void {
      this.checkVisibility()
        
    }
    checkVisibility()
    {
        return this.shareService.getVisiblity();
    }
    toLink()
    {
        this.router.navigateByUrl(this.shareService.getLink());
    }
}