import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-salat',
  templateUrl: './salat.component.html',
  styleUrls: ['./salat.component.css']
})
export class SalatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#first').remove();
    var userLang = navigator.language ;
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const url = 'https://api.pray.zone/v2/times/today.json?city=figueres';
    const http = new XMLHttpRequest();
    http.open("GET", url);
    http.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var prayer_results = JSON.parse(this.responseText);
        console.log(JSON.stringify(prayer_results.results.location.local_offset));
        var prayer_date = new Date(prayer_results.results.datetime[0].date.gregorian);

              var local_offset = prayer_results.results.location.local_offset;
              document.getElementById("prayer_city").innerHTML = prayer_results.results.location.city;
              document.getElementById("prayer_date").innerHTML = prayer_date.toLocaleDateString(userLang, options);
              document.getElementById("Imsak").innerHTML = prayer_results.results.datetime[0].times.Imsak;
              document.getElementById("Fajr").innerHTML = prayer_results.results.datetime[0].times.Fajr;
              document.getElementById("Dhuhr").innerHTML = prayer_results.results.datetime[0].times.Dhuhr;
              document.getElementById("Asr").innerHTML = prayer_results.results.datetime[0].times.Asr;
              document.getElementById("Maghrib").innerHTML = prayer_results.results.datetime[0].times.Maghrib;
              document.getElementById("Isha").innerHTML = prayer_results.results.datetime[0].times.Isha;
    }
    };
    http.send();
}


}
