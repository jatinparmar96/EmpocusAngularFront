import { Component, OnInit, ViewContainerRef, ViewChildren, ComponentFactoryResolver, ComponentFactory } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "app/shared/services/api.service";
import { ShareService } from "app/shared/services/share.service";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { LeadDataRowComponent } from "../lead-data-row/lead-data-row.component";

@Component({
  selector: "app-lead-view",
  templateUrl: "./lead-view.component.html",
  styleUrls: ["./lead-view.component.scss"],
  animations: [
    trigger("detailExpand", [
      state(
        "collapsed",
        style({ height: "0px", minHeight: "0", display: "none" })
      ),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      )
    ])
  ]
})
export class LeadViewComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ["Company Name", "Lead Status", "Assigned To"];
  expandedElement: PeriodicElement;
  visibility: string = 'hidden';

  expandedRow: number;
  @ViewChildren('myRow', { read: ViewContainerRef }) containers;

  rows: any = null;
  link: any = "/crm/lead/new";
  paginationData: any = {
    total: 0,
    from: 0,
    to: 0,
    prev_page_url: null,
    next_page_url: null,
    per_page: 20,
    current_page: 1
  };
  constructor(
    private router: Router,
    private apiService: ApiService,
    private shareService: ShareService,
    private resolver: ComponentFactoryResolver
  ) {
    this.shareService.setVisibility(true);
    this.shareService.setLink(this.link);
  }

  ngOnInit() {
    // this.getData();
  }
  edit(id) {
    this.router.navigateByUrl("/crm/lead/" + id);
  }
  toCreate() {
    this.router.navigateByUrl("/crm/lead/new");
  }
  toNext() {
    this.router.navigateByUrl("crm/lead/new");
  }
  show(id) {
    this.router.navigateByUrl("/crm/lead/show/" + id);
  }
  expandElement(element, expandedElement) {

    this.visibility = expandedElement == element ? 'visible' : 'hidden';
    console.log(this.visibility);
  }
  getData(page = 1) {
    this.apiService.get("admin/crm/leads?page=" + page).then((data: any) => {
      let l_data: any = data;
      l_data = l_data.data;
      this.rows = l_data.data;
      this.paginationData = {
        total: l_data.total,
        from: l_data.from,
        to: l_data.to,
        prev_page_url: l_data.prev_page_url,
        next_page_url: l_data.next_page_url,
        per_page: l_data.per_page,
        current_page: l_data.current_page,
        id: "get_list"
      };
    });
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA = [
  {
    "Company Name": "Rokso Pvt Ltd",
    "Assigned To": "Jatin Parmar",
    "Lead Status": "Qualified",
    "id": 1
  },
  {
    "Company Name": "Rokso Pvt Ltd",
    "Assigned To": "Jatin Parmar",
    "Lead Status": "Qualified",
    "id": 1
  },
  {
    "Company Name": "Rokso Pvt Ltd",
    "Assigned To": "Jatin Parmar",
    "Lead Status": "Qualified",
    "id": 1
  },
  {
    "Company Name": "Rokso Pvt Ltd",
    "Assigned To": "Jatin Parmar",
    "Lead Status": "Qualified",
    "id": 1
  },
  {
    "Company Name": "Rokso Pvt Ltd",
    "Assigned To": "Jatin Parmar",
    "Lead Status": "Qualified",
    "id": 1
  },
  {
    "Company Name": "Rokso Pvt Ltd",
    "Assigned To": "Jatin Parmar",
    "Lead Status": "Qualified",
    "id": 1
  },
];
