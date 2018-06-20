import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;

  selectedUser: User;
  newUser: User;

  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  posts:Post[];

  constructor(private afs: AngularFirestore) {
    console.log('Constructing: UserComponent with AngularFirestore...');
  };

  ngOnInit() {
    console.log('Initialize: UserComponent...');

    this.usersCollection = this.afs.collection("users");
    this.users = this.usersCollection.snapshotChanges().pipe(map(changes => {
        return changes.map(x => {
          const data = x.payload.doc.data() as User;
          data.id = x.payload.doc.id;
          return data;
        })
      })
    );

    this.selectedUser = null;
    this.newUser = null;
  }

  selectUser(user): void {
    this.selectedUser = user;
    this.newUser = null;
  }

  addNewUser(): void {
    this.newUser = {name:"" ,age: 0};
    this.selectedUser = null;
  }
  

  updateUser(): void {
    console.log("updating...");
    this.userDoc = this.afs.doc(`users/${this.selectedUser.id}`);
    this.userDoc.update(this.selectedUser);
  }

  deleteUser(user): void {
    console.log("deleting...");
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.delete();
  }

  addUser(): void {
    console.log("adding...");
    this.usersCollection.add(this.newUser);
  }
}


interface User {
  id?: string
  name:string,
  age:number,
}

interface Address {
  street:string,
  city:string,
  state:string
}

interface Post {
  id: number,
  titel: string,
  body: string,
  userId: number
}