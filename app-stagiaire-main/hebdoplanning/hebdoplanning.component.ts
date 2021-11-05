import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import dayGridPlugin from '@fullcalendar/daygrid'; // for dayGridMonth view 
import frLocale from '@fullcalendar/core/locales/fr';

declare var $: any;

@Component({
  selector: 'app-hebdoplanning',
  templateUrl: './hebdoplanning.component.html',
  styleUrls: ['./hebdoplanning.component.scss']
})
export class HebdoplanningComponent implements OnInit {
  

  constructor(private http: HttpClient) { }
  calendarOptions: CalendarOptions = { }

  titreEvent = "";
  startEvent = "";
  endEvent = "";
  idEvent = "";

  switch = false;
  eventFocused = {}

  ngOnInit() {

    this.http.get('http://localhost:3000/evenement').subscribe(data => {
      console.log(data);

      this.calendarOptions = {
        initialView: "timeGridWeek",
        plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin],

        locales: [frLocale],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: "",
        },
        events: data,

      }
    }
    )
  }

}
