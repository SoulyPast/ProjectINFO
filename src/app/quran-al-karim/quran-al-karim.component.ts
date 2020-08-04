import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as $ from 'jquery';
@Component({
  selector: 'app-quran-al-karim',
  templateUrl: './quran-al-karim.component.html',
  styleUrls: ['./quran-al-karim.component.css']
})
export class QuranAlKarimComponent implements OnInit {

  constructor() { }
  info = null;
  rewaya = null;

  ngOnInit(): void {
    $('#first').remove();
    const rewaya = [];
    axios.get('https://beta.mp3quran.net//api//_arabic.json')

  .then(resp => {
      const data = resp.data.reciters;
      // tslint:disable-next-line: prefer-for-of
      this.info = data;
      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < data.length; index++) {
        rewaya.push(data[index].rewaya);
      }

      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

      const unique = rewaya.filter( onlyUnique );
      this.rewaya = unique;

  })
  .catch(error => {
      console.log(error);
  });


  }

  Functionsorat(event, link, name, rewaya) {
    const id = event.target.attributes.id.value;
    console.log(id + ' ' + link + ' ' + name + ' ' + rewaya);
    $('#myUL').remove();

    let Arraysorat = ['الفاتحة', 'البقرة' ,'آل عمران','النساء','المائدة','الأنعام','الأعراف','الأنفال','التوبة','يونس','هود','يوسف'
    ,'الرعد','إبراهيم','الحجر','النحل','الإسراء','الكهف','مريم','طه','الأنبياء','الحج','المؤمنون','النور','الفرقان',
    'الشعراء','النمل','القصص','العنكبوت','الروم','لقمان','السجدة','سورة الأحزاب','سبأ','فاطر','يس','الصافات','ص','الزمر',
    'غافر','فصلت','الشورى','الزخرف','الدخان','الجاثية','الأحقاف','محمد','الفتح','الحجرات','ق','الذاريات','الطور','النجم',
    'القمر','الرحمن','الواقعة','الحديد','المجادلة','الحشر','الممتحنة','الصف','الجمعة','المنافقون','	التغابن','الطلاق','التحريم'
    ,'الملك','القلم','الحاقة','المعارج','نوح','الجن','المزمل','المدثر','القيامة','الإنسان','المرسلات'
    ,'النبأ','النازعات','عبس','التكوير','الإنفطار','المطففين','الإنشقاق','البروج','الطارق','الأعلى','الغاشية','الفجر','البلد'
    ,'الشمس','الليل','الضحى','الشرح','التين','العلق','القدر','البينة','الزلزلة','العاديات','القارعة','التكاثر','العصر',
    'الهمزة','الفيل','قريش','الماعون','الكوثر','الكافرون','النصر','المسد','الإخلاص','الفلق','الناس'];

    console.log(Arraysorat.length);
    axios.get(link)
    .then(resp => {
        for (let index = 1; index < 115; index++) {
          const num = index.toString().length;
          let Link = null;
          if (num === 1) {
            Link = resp.request.responseURL + '00' + (index) + '.mp3';
          } else if (num === 2) {
            Link = resp.request.responseURL + '0' + (index) + '.mp3';
          } else {
            Link = resp.request.responseURL + (index) + '.mp3';
          }
         // console.log(Arraysorat[index]);
          console.log(Arraysorat[index - 1]);
          console.log();
          const h1 = document.createElement('h6');
          const ism = document.createTextNode(Arraysorat[index - 1]);
          h1.appendChild(ism);
          const Audio = document.createElement('AUDIO');
          Audio.setAttribute('controls', 'controls');
          const source = document.createElement('source');
          source.setAttribute('src', Link);
          source.setAttribute('type', 'audio/mpeg');
          Audio.appendChild(source);
          const currentDiv = document.getElementById('text');
          currentDiv.appendChild(h1);
          currentDiv.appendChild(Audio);
          }
    })
    .catch(error => {
        console.log(error);
    });
  }
}

