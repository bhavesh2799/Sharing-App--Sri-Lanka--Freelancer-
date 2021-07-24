import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { MultiFileUploadComponent } from '../components/multi-file-upload/multi-file-upload.component';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss'],
})
export class RoomPage implements OnInit {
  @ViewChild(MultiFileUploadComponent) fileField: MultiFileUploadComponent;


  isChat;
  isShare;
  isMobile;
  constructor(private router:Router,private platform:Platform) { 
    
  }
  items = [
    {'id':1,'icon':'musical-notes','name':'file1'},
    {'id':2,'icon':'document','name':'file1'},
    {'id':3,'icon':'document','name':'file1'},
    {'id':4,'icon':'musical-notes','name':'file1'},
    {'id':5,'icon':'document','name':'file1'},
    {'id':6,'icon':'musical-notes','name':'file1'},
    {'id':7,'icon':'document','name':'file1'},
    {'id':8,'icon':'musical-notes','name':'file1'},
    {'id':9,'icon':'musical-notes','name':'file1'},
    {'id':10,'icon':'document','name':'file1'},
    {'id':11,'icon':'document','name':'file1'},
    {'id':12,'icon':'musical-notes','name':'file1'},
    {'id':13,'icon':'document','name':'file1'},
    {'id':14,'icon':'musical-notes','name':'file1'},
    {'id':15,'icon':'document','name':'file1'},
    {'id':16,'icon':'musical-notes','name':'file1'},
    {'id':17,'icon':'musical-notes','name':'file1'},
    {'id':18,'icon':'document','name':'file1'},
    {'id':19,'icon':'musical-notes','name':'file1'},
    {'id':20,'icon':'document','name':'file1'},
    {'id':21,'icon':'musical-notes','name':'file1'},
    {'id':22,'icon':'musical-notes','name':'file1'},
    {'id':23,'icon':'document','name':'file1'},
    {'id':24,'icon':'document','name':'file1'},
    {'id':25,'icon':'musical-notes','name':'file1'},
    {'id':26,'icon':'document','name':'file1'},
    {'id':27,'icon':'musical-notes','name':'file1'},
    {'id':28,'icon':'document','name':'file1'},
  ]

  ngOnInit() {
    if(this.platform.isLandscape){
      this.isChat = true;
      this.isShare = true;
      this.isMobile = false;
    }
    else{
      this.isChat = false;
      this.isShare = false;
      this.isMobile = true;
    }
    
  }
  backToHome(){
    this.router.navigateByUrl('/home');
  }
  chatOpen(){
    this.isChat = !this.isChat;
  }
  uploadFiles(){
    
  }
  showShare(){
    this.isShare = !this.isShare;
  }

}
