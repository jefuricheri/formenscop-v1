import { Component, OnInit, ViewChild  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import frLocale from '@fullcalendar/core/locales/fr';

declare var $: any;

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})

export class PlanningComponent implements OnInit {
  plannings: any;

  constructor(private http: HttpClient,) { }

  calendarOptions: CalendarOptions = {}

  titreEvent = "";
  startEvent = "";
  timestartEvent = "";
  endEvent = "";
  timeendEvent = "";
  idEvent = "";

  switch = false;
  alldayEvent = false;
  eventFocused = {}

  ngOnInit() {

    this.http.get('http://localhost:3000/evenement').subscribe(data => {
      console.log(data);

      this.plannings = data

      this.calendarOptions = {

        plugins: [interactionPlugin, dayGridPlugin,  timeGridPlugin ],
        
        headerToolbar: {
          
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: "dayGridMonth",
        droppable: true,
        editable: true,
        selectable: true,
        selectMirror: true,
        locales: [frLocale],
        events: this.plannings,
        
        dateClick: (info) => {
          this.switch = true
          this.titreEvent = ""
          this.startEvent = info.dateStr
          this.timestartEvent = "00:00"
          this.endEvent = info.dateStr
          this.timeendEvent = "00:00"
          $('#modal').modal(focus);
        },
        select: (info) => {
          console.log()
          this.titreEvent = ""
          this.startEvent = info.startStr
          this.timestartEvent = ""
          this.endEvent = info.endStr
          this.timeendEvent = ""
          $('#modal').modal(focus);
        },
        eventClick: (info) => {  
        this.switch = false
        this.eventFocused = info
        
        this.idEvent = info.event.extendedProps._id
        this.titreEvent = info.event.title
        this.startEvent = this.formatDate(<any>info.event.start)
        this.timestartEvent = this.formatTime(<any>info.event.start);
        this.endEvent = this.formatDate(<any>info.event.end)
        this.timeendEvent = this.formatTime(<any>info.event.end);
        $('#modal').modal(focus);

        },
        eventDrop: (info) => {  
          this.editEvent(info)
        },
        eventResize: (info) => {  
          this.editEvent(info)
        },
      }
    }
    )
  }

  createEvent(title:any, start:any, timestart:any, end:any, timeend:any, allDay:Boolean){
    console.log(timestart)
    var donnee = { title: title, start: `${start}T${timestart}`, end: `${end}T${timeend}`, allDay : allDay}
    this.http.post<any>(`http://localhost:3000/evenement`, donnee).subscribe(data => {
      console.log(data)
    });

  }

  updateEvent(title:any, start:any, timestart:any, end:any, timeend:any, allDay:Boolean){
    var donnee = { title: title, start: `${start}T${timestart}`, end: `${end}T${timeend}`, allDay : allDay}
    this.http.put<any>(`http://localhost:3000/evenement/${this.idEvent}`, donnee).subscribe(data => {
      console.log(data)
    })
  }

  editEvent(info:any){
    var id = info.event.extendedProps._id
    var donnee = { title: info.event.title, start: info.event.start, end: info.event.end, allDay : info.event.allDay}
    this.http.put<any>(`http://localhost:3000/evenement/${id}`, donnee).subscribe(data => {
      console.log(data);
    });
  }

  deleteEvent(info:any){
    var id = info.event.extendedProps._id
    info.event.remove()
    this.http.delete<any>(`http://localhost:3000/evenement/${id}`).subscribe(data => {
      console.log(data);
    }); 
  }

  formatDate(date:Date){
    var jour = `${date.getDate()}`;
    var mois = `${(date.getMonth() + 1)}`

    if(parseInt(jour) < 10){
      jour = `0${jour}`
    }
    if(parseInt(mois) < 10){
      mois = `0${mois}`
    }

    var annee = date.getFullYear()

    return `${annee}-${mois}-${jour}`
  }

  formatTime(date:Date){
    var heure = `${(date.getHours())}`
    var minute = `${date.getMinutes()}`;

    if(parseInt(heure) < 10){
      minute = `0${minute}`
    }
    if(parseInt(minute) < 10){
      heure = `0${heure}`
    }
    return `${heure}:${minute}`
  }

}