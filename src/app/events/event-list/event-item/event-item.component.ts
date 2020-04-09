import {Event} from "../../event.model";
import {EventService} from "../../event.service";
import { Component, OnInit, Input, EventEmitter, Injectable } from '@angular/core';


@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {


  @Input() myEvent:Event;
  @Input() index:number;


constructor(private eventService: EventService){}
  // onSelected(){
  //   this.eventService.eventSelected.emit(this.myEvent);
  // }
  
  onDelete(){
    this.eventService.deleteEvent(this.myEvent);
  }

  ngOnInit(): void {
  }

}
