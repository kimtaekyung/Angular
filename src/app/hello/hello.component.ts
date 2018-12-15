import { Component, OnInit } from '@angular/core';
/**
 * 인터페이스는 최상단에 위치
 */
interface User {
  id: number;
  name: string;
}
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {

  inputName: string;
  content: string;
  attrId: string;
  classA: boolean;
  classB: boolean;
  name: string;
  show = true;
  flag = true;
  value = '31';
  users: User[] = [
    {id: 1 , name: 'Lee'},
    {id: 2 , name: 'Kim'},
    {id: 3 , name: 'Baek'}
  ];
  constructor() {
    console.log('constructor()');
    this.inputName = '이름을 입력 하세요';
    this.setContent();
    this.attrId = '1';
    this.classA = true;
    this.classB = false;
    this.name = '';
  }

  ngOnInit() {
    console.log('constructor()');
  }

  setName(inputName: string) {
    this.inputName = inputName;
  }

  setContent() {
    this.content = '<p>content</p>';
  }

  removeUser(userid: number) {
    console.log(userid);
    this.users = this.users.filter(({id}) => id !== userid);
    console.log(this.users);
  }

  addUser(username: string){
    this.users.push({
      id : this.getNewUserId(), name: username
    });
  }

/*
var odds = evens.map(v => v + 1);   // [3, 5, 7, 9]
var nums = evens.map((v, i) => v + i);  // [2, 5, 8, 11]
var pairs = evens.map(v => ({even: v, odd: v + 1})); // [{even: 2, odd: 3}, ...]
*/
  getNewUserId(): number {
    return this.users.length ? Math.max(...this.users.map(({id}) => id)) + 1 : 1;
  }
}
