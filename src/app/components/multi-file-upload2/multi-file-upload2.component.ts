import { Component, ViewChild } from '@angular/core';
import { FileUploader, FileLikeObject, FileItem } from 'ng2-file-upload';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';
@Component({
  selector: 'app-multi-file-upload2',
  templateUrl: './multi-file-upload2.component.html',
  styleUrls: ['./multi-file-upload2.component.scss']
})
export class MultiFileUpload2Component {
  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  public uploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;
  files:any = [];

  constructor() { 

  }

  getFiles(): FileLikeObject[] {
    this.files = this.uploader.queue;
    return this.uploader.queue.map((fileItem) => {
      return fileItem.file;
    });
  }
  getFiles2(){
    
  }

  fileOverBase(ev): void {
    this.hasBaseDropZoneOver = ev;
  }
  delete(i){
    if(i==0){
      this.uploader.queue = this.uploader.queue.slice(1,this.uploader.queue.length)
    }
    else if(i < this.uploader.queue.length)
    this.uploader.queue = this.uploader.queue.slice(0,i).concat(this.uploader.queue.slice(i+1,this.uploader.queue.length))
  }

  reorderFiles(reorderEvent: CustomEvent): void {
    console.log(reorderEvent)
    let temp = this.files;
    this.files = [];
    // let element = this.uploader.queue.splice(reorderEvent.detail.from, 1)[0];
    // console.log('element: ',element)
    // this.uploader.queue.splice(reorderEvent.detail.to, 0, element);
    // console.log('uploader queue: ',this.uploader.queue)
    
    this.files =reorderEvent.detail.complete(temp);
  }
 

  toggleReorderGroup() {
    this.reorderGroup.disabled = !this.reorderGroup.disabled;
  }
}



