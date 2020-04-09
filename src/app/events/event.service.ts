import { Component, OnInit, Input, EventEmitter, Injectable } from '@angular/core';
import {Event} from "./event.model"
@Injectable({
  providedIn: 'root'
})
export class EventService {

  
  @Input() myEvent:Event;

  eventSelected=new EventEmitter<Event>();
  eventUpdate=new EventEmitter<Event[]>();
  zminnaEvent=new EventEmitter<Event>();

  events: Event[]=[
    new Event("КУРС JS","promise and all","https://vueschool.io/articles/wp-content/uploads/2017/12/why-js.png"),
    new Event("КУРС C++","OOP all","https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png"),
    new Event("КУРС JAVA","OOP And Game","https://upload.wikimedia.org/wikipedia/uk/thumb/8/85/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_Java.png/250px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_Java.png"),
  ]


  
  getEvents(): Event[] {
    return this.events.slice();
  }

addNewEvent(data: Event):void{
  this.events.push(data);
  this.eventUpdate.emit(this.events);
}
deleteEvent(data: Event):void{
  var index=this.events.indexOf(data);
  this.events.splice(index,1);
  this.eventUpdate.emit(this.events);
}

getSingleEvent(index:number):Event{
return this.events[index];
}


  constructor() { }

 
}
