import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ShareService } from '../../shared/services/share.service';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
@Component({
    selector: 'app-full-layout',
    templateUrl: './full-layout.component.html',
    styleUrls: ['./full-layout.component.scss']
})

export class FullLayoutComponent {
    options = {
        direction: 'ltr'
    };
    isLoading = true;
    constructor(
        private shareService: ShareService,
        private router: Router) {
        this.shareService.setVisibility(false);
        this.router.events.subscribe((routerEvent: Event) => {
            if (routerEvent instanceof NavigationStart) {
                this.isLoading = true;
            }
            else if (routerEvent instanceof NavigationEnd) {
                this.isLoading = false;
            }
        })
    }


    ngOnInit() {
    }
    ngOnChanges(): void {
        this.checkVisibility()
    }
    checkVisibility() {
        return this.shareService.getVisiblity();
    }
    toLink() {
        this.router.navigateByUrl(this.shareService.getLink());
    }
}
