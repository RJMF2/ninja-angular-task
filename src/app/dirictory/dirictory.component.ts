import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { DataService } from '../data.service';

declare var firebase: any;
@Component({
  selector: 'app-dirictory',
  templateUrl: './dirictory.component.html',
  styleUrls: ['./dirictory.component.css'],
})
export class DirictoryComponent implements OnInit {
  ninjas: any = [];
  constructor(private logger: FirebaseService, private dataService: DataService) { }
  log() {
    console.log(this.logger.logit());
  }
  ngOnInit() {
    // this.dataService.fetchData().subscribe(
    //   (res) => this.ninjas = res
    // );
    this.fbGetData();
  }

  fbGetData() {
    firebase.database().ref('/').on('child_added', (snapshot) => {
      this.ninjas.push(snapshot.val());

    })
  }
  fbPostData(name, color) {
    firebase.database().ref('/').push({ name: name, color: color });
  }
  // fbDeleteData(name,color) {
  //   firebase.database().ref('/').remove({name:name,color:color);
  // }
}
