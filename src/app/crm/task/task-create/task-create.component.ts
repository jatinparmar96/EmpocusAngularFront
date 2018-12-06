import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'app/shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDataService } from 'app/shared/services/form-data.service';
import { ShareService } from 'app/shared/services/share.service';
import { NotifyService } from 'app/shared/services/notify.service';
import { DataService, Person} from 'app/shared/services/data.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {

  people: Person[] = [];
  selectedPeople = [];
  selectedPeople2 = [];

  active= 'today';
  task_data: FormGroup;
  Task: FormGroup;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
	id: any = "new";
  constructor(
    private dataService: DataService,
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private formService: FormDataService,
    private shareService: ShareService,
    private notifyService: NotifyService,
    private router:Router,
  ) 
  {
    this.shareService.setVisibility(false)
    this.task_data= this.fb.group({
      "address_id":['new',Validators.required],
      "id":['new',Validators.required],
      "title":['',Validators.required],
      "due_date":['',Validators.required],
      "due_time":['',Validators.required],
      "task_type":['',Validators.required],
      "outcome":['',Validators.required],
      "related_to":['',Validators.required],
      "task_desc":['',Validators.required],
      

    });
    this.resetErrorMessages();
  }

  ngOnInit() {
    this.dataService.getPeople()
    .pipe(map(x => x.filter(y => !y.disabled)))
    .subscribe((res) => {
        this.people = res;
        this.selectedPeople = [this.people[0].id, this.people[1].id];
    });

    this.route.params.subscribe(params => {
      console.log(params['id'])
			if(params['id']=='new'){
				this.id="new";
			}else{
				this.id = +params['id']; // (+) converts string 'id' to a number
        this.getData(this.id);
        
			}
    });
    
  
  }
  
  getData(id:any){
		this.apiService.get("admin/task/"+id)
		.then(data => { 
			let l_data: any = data;
      this.task_data.patchValue(l_data.data);					
      console.log(this.task_data.value)
		})
	}
  addOrUpdate(Task){		
		this.formTouched = true;
		if(Task.invalid){
			return false;
		}
		this.resetErrorMessages();
		this.isProcessing = true;
		
			//post request
			this.apiService.post("admin/task",Task.value).then( data => {
        let result: any = data;
        //success
        console.log(result);
        this.isProcessing = false;
        if(result.status)
							{
								this.notifyService.show({
									title: 'Success',
									message: result.message
								},'success'); 
							}
							else{
									this.notifyService.show({
										title: 'Error',
										message: result.message
                  }, 'error');
                  this.errors = result.error;
							}
    
			})
			.catch( error => {
        this.isProcessing = false;
        let errors: any = error;
        this.errors = errors;
			})
		
  }
  resetErrorMessages(){
		this.errors = {			
      "title":[""],
      "due_date":[""],
      "due_time":[""],
      "task_type":[""],
      "outcome":[""],
      "related_to":[""],
      "task_desc":[""],
		}
  }
  
  cancel(){
    this.router.navigateByUrl('/crm/task/create');
  }

}