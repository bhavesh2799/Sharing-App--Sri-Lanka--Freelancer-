import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MultiFileUploadComponent } from '../components/multi-file-upload/multi-file-upload.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{

  roomCode;
  roomName;

  constructor(private router:Router) {}
  ngOnInit() {
    
  }
  kunFayaKun(){
    this.router.navigateByUrl('/room');
  }

  IAmAMotherFuckingStarBoy(){
    //Creates a new room for sharing files
  }
  taakeJhanke(){
    //to connect to existing room
  }

}
