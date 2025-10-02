import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    { 
      title: '2025 Częstochowa rekolekcje', 
      show: false,
      links: [
        { name: 'Film 1', url:'https://drive.google.com/file/d/1xCTxLX8MxScZwr8h99BRUCKIG_ARZFnv/view?usp=sharing'},
        { name: 'Film 2', url:'https://drive.google.com/file/d/17KBIS55dHflHdeN9-bumwKdU13ih2x3e/view?usp=drive_link'},
        { name: 'Film 3', url:'https://drive.google.com/file/d/1z0EU60QIOQxI5XRJzoyktSzOROCtvukj/view?usp=drive_link'},
        { name: 'Film 4', url:'https://drive.google.com/file/d/1nczXz5BDiqv8rl93tJNxPrAMXp3BULaR/view?usp=sharing'},
        { name: 'Film 5', url:'https://drive.google.com/file/d/1MlL6h3kYPwWggd8v8MqswTVqEtlE_M6-/view?usp=sharing'},
        { name: 'Film 6', url:'https://drive.google.com/file/d/1ZjjRL_yxFyuY_MJDqiPFvjpPqNKUaMUq/view?usp=sharing'},
        { name: 'Album zdjęć', url: 'https://photos.app.goo.gl/a93TNSxNteFAiFi26' }
      ]
    },
    { 
      title: '2025 Spotkanie w Kiełczowie', 
      show: false,
      links: [
        { name: 'Album zdjeć', url: 'https://photos.app.goo.gl/24qSGVTj46433Xt46' }
      ]
    },
    { 
      title: '2025 wrzesień 30', 
      show: false,
      links: [
        { name: 'Album zdjęć', url: 'https://photos.app.goo.gl/hQyN3K1tTqvJrxAs9' },
        
{
  name: 'Podsumowanie spotkania',
  text: `
A było to dnia dzisiejszego, kiedy po mszy świętej zgromadziła się nasza czcigodna wspólnota w skromnej, aczkolwiek wonnej salce parafialnej.
Na wstępie ksiądz proboszcz, jako pasterz surowy, rzekł do nas słowa karcenia:  
„Czemuż to drzwi otwarte, a okna rozwiane, skoro na dworze ziąb, a w salce klimat jak w piwnicy średniowiecznej?”.  
My zaś milczeliśmy, bo któż odważy się w dyskusję wdać z pasterzem, co klucz do konfesjonału dzierży?
Na stole pyszniły się ciasta, owoce, słodycze i cukierki – uczta duchowo-słodka 🍰, czyli agape w wydaniu cukierniczo-domowym.  
Jednakże żaden z trzech księży nie zaszczycił nas swoją obecnością, co w kronikach zapisujemy z westchnieniem: „Duch obecny, ale ciała brakło”.
Dziękowaliśmy liderce ustępującej, która rozdała nam bransoletki z błogosławieństwem ✨ – byśmy wiedzieli, że nawet na rękach możemy nieść znaki łaski.  
Nowym wodzem wspólnotowym została Kasia D., którą odtąd zwać będziemy „Liderką Wybraną” 🎉.
Rozmówiono się też o rekolekcjach weekendowych w Bardzie – spoczniemy tam w pokoju ośmioosobowym 🛌, by wspólnota nasza nie tylko duchowo, lecz i fizycznie zacieśniała więzi w braterskim ścisku.

👗 Przenieśliśmy się do drugiej salki, by stroje mierzyć na dzień różańca ze świętymi.  
Choć święci patrzyli z politowaniem, my z radością dopasowywaliśmy stroje – by choć w kroju przypominać o rzeczach wyższych ✨.

🏡 Gdy wszystkie sprawy doczesne i duchowe zostały dokonane, rozeszliśmy się w pokoju do domów swoich, zostawiając salkę z jej zapachem i wspomnieniem słodkiej agapy 🍰.
Tak było!
`,
  show: false,
  protected: true // dodajemy flagę chronionego tekstu
}
      ]
    }
  ];

    // hasło do odczytu chronionych podsumowań
  private readonly summaryPassword = 'ela';

  toggle(item: any) {
    item.show = !item.show;
  }

toggleLink(link: any) {
  // jeśli link jest chroniony
  if (link.protected) {
    if (!link.show) { // jeśli jeszcze nie odblokowany
      const password = prompt('Podaj hasło, aby odczytać podsumowanie:');
      if (password === this.summaryPassword) {
        link.show = true; // odblokowujemy
      } else {
        alert('Błędne hasło!');
      }
    }
  } else {
    // zwykłe działanie dla linków niechronionych
    link.show = !link.show;
  }
}


  trackByTitle(index: number, item: any) {
    return item.title;
  }

  trackByName(index: number, link: any) {
    return link.name;
  }

  closePage() {
  window.close();
}

}
