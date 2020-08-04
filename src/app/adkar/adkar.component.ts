import { Component, OnInit } from '@angular/core';
import { InfoadkarsService } from '../infoadkars.service';;
import * as $ from 'jquery';
@Component({
  selector: 'app-adkar',
  templateUrl: './adkar.component.html',
  styleUrls: ['./adkar.component.css']
})
export class AdkarComponent implements OnInit {
  infoadkars = null;
  constructor(private infoadkarss: InfoadkarsService) {
  }

  Functiondates(id, info) {

    const url = 'http://www.mp3quran.net/api/husn/ar/' + id + '.json';
    const http = new XMLHttpRequest();
    http.open('GET', url);
    http.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const results = JSON.parse((this.responseText));
      $('#Title').remove();
      $('.Text').remove();
      $('AUDIO').remove();
      // tslint:disable-next-line: forin
      for (const key1 in results) {
        const arrayres = results[key1];
        const newH1 = document.createElement('h1');
        newH1.setAttribute('style', 'font-size: 50px;border-width:5px;border-bottom-style:solid');
        const newContent = document.createTextNode(key1);
        newH1.appendChild(newContent);
        const Audio = document.createElement('AUDIO');
        Audio.setAttribute('controls', 'controls');
        const source = document.createElement('source');
         // tslint:disable-next-line: prefer-for-of
        var numid = id;
        const res = info;
         // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < res.length; i++) {
           if (numid == res[i].ID) {
            source.setAttribute('src', res[i].AUDIO_URL);
           }
         }
        source.setAttribute('type', 'audio/mpeg');
        Audio.appendChild(source);
        const att = document.createAttribute('id');
        att.value = 'Title';
        newH1.setAttributeNode(att);
        const currentDiv = document.getElementById('general');
        currentDiv.appendChild(newH1);
        currentDiv.appendChild(Audio);
        // tslint:disable-next-line: prefer-for-of
        for (let index = 0; index < arrayres.length; index++) {
          const newp = document.createElement('p');
          const newContent2 = document.createTextNode(arrayres[index].Text);
          newp.appendChild(newContent2);
          const att2 = document.createAttribute('class');
          att2.value = 'Text pb-3 pt-3 pr-1 pl-1';
          newp.setAttribute('style', 'border:1px black solid');
          newp.setAttributeNode(att2);
          currentDiv.appendChild(newp);
        }
      }
    }
  };
    http.send();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

  FunctionAdkar(event) {
    const id = event.target.attributes.id.value;
    this.infoadkars = this.infoadkarss.retornar();
    this.Functiondates(id, this.infoadkars);
  }

  SearchBar() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

  ngOnInit(): void {
    $('#first').remove();
    this.infoadkars = this.infoadkarss.retornar();
    this.Functiondates(27, this.infoadkars);
  }
}
