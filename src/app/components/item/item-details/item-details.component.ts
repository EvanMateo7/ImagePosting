import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../core/auth.service';
import { Item } from '../../../models';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  selectedItem: Item;

  constructor(private auth: AuthService, private route: ActivatedRoute, private afs: AngularFirestore) { }

  ngOnInit() {
    console.log('Initialize: ItemDetailsComponent...');
    this.selectedItem = null;
  }

}
