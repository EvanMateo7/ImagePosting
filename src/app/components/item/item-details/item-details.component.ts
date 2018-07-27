import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../core/auth.service';
import { Item } from '../../../models';
import { AngularFirestore, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from 'rxjs'


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  selectedItem: Observable<Item>;
  itemDoc: AngularFirestoreDocument<Item>;

  constructor(private auth: AuthService, private route: ActivatedRoute, private afs: AngularFirestore) { }

  ngOnInit() {
    console.log("Initialize: ItemDetailsComponent...");
    this.selectedItem = null;
    this.getItem(); 
  }

  getItem(): void {
    const itemId = this.route.snapshot.paramMap.get("itemId");
    this.itemDoc = this.afs.doc(`items/${itemId}`);
    this.selectedItem = this.itemDoc.valueChanges();
  }

}
