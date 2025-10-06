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
      title: 'Lewin Kłodzki rekolekcje (różne lata)', 
      show: false,
      links: [
        { name: 'Film 1', url:'https://drive.google.com/file/d/1dljUMxwhUrTb6Lf3_0UkFojdKVJB5nnC/view?usp=sharing'},
        { name: 'Film 2', url:'https://drive.google.com/file/d/13k6eLd7Y_MZc-MkM41DMlPDD_bthFj9K/view?usp=sharing'},
        { name: 'Film 3', url:'https://drive.google.com/file/d/1VvEk7og9-WByuMJ58SpiJ61f-Ne3Ghob/view?usp=sharing'},
        { name: 'Film 4', url:'https://drive.google.com/file/d/1RK8PA186Xwu5oaZml1LrWQuvTec6JKgQ/view?usp=sharing'},
        { name: 'Film 5', url:'https://drive.google.com/file/d/1w7P9LdDiJWidmBUBBaI4MJ0gNZg0KR1t/view?usp=sharing'},
        { name: 'Film 6', url:'https://drive.google.com/file/d/1V7lzHGPqG9tDR_wqnCW-HoVVL4IJFotQ/view?usp=sharing'},
        { name: 'Album zdjęć', url: 'https://photos.app.goo.gl/6zoDJrG4TM8fte5y6' }
      ]
    },
    { 
      title: 'Wniebogłosy (2025 r.)', 
      show: false,
      links: [
        { name: 'Film 1', url:'https://drive.google.com/file/d/1RD5D9Op3MbeZHNNukB8idsmLiLOQyHix/view?usp=sharing'},
        { name: 'Film 2', url:'https://drive.google.com/file/d/12ed5-y2IB609eF10kC8QIikIneaFKm5D/view?usp=sharing'},
        { name: 'Film 3', url:'https://drive.google.com/file/d/1IQ1DxYKIxOnSPBYAcoLFEO3dtcW293oY/view?usp=sharing'},
        { name: 'Film 4', url:'https://drive.google.com/file/d/10FB2rRfoxmlgvjLADFm4vkBMjNDWb_N1/view?usp=sharing'},
        { name: 'Film 5', url:'https://drive.google.com/file/d/1oOK9a4pgeOTyLqM52PQ-rDM3AfblLkKK/view?usp=sharing'},
        { name: 'Film 6', url:'https://drive.google.com/file/d/1wsr0UBsdG0uAOJfKUsBw-EcO_1CbnsmK/view?usp=sharing'},
        { name: 'Film 7', url:'https://drive.google.com/file/d/1V7768UmItqDbk0GujosgnNTc8uFXKyAS/view?usp=sharing'},
        { name: 'Film 8', url:'https://drive.google.com/file/d/1be5iGHRCsVLNFHg5qcM_LwPbdP6cjrhK/view?usp=sharing'},
        { name: 'Film 9', url:'https://drive.google.com/file/d/12L3wt-3LuQgqtUdFvPGowG5zPhnsLH-4/view?usp=sharing'},
        { name: 'Film 10', url:'https://drive.google.com/file/d/1va4-sahc3p81-V2xyXQellN2aiwYFS-S/view?usp=sharing'},
        { name: 'Film 11', url:'https://drive.google.com/file/d/1NMS7qxHVu4U9EtsHspy9p5keuDP_uWil/view?usp=sharing'},
        { name: 'Film 12', url:'https://drive.google.com/file/d/16duXGjCWEiCZLbQplpYEuo_rqLaEH1zh/view?usp=sharing'},
        { name: 'Film 13', url:'https://drive.google.com/file/d/18326TYDRwaPQcHhV_CT3HNk_GJNtJuW9/view?usp=sharing'},
        { name: 'Film 14', url:'https://drive.google.com/file/d/1IrKI5GpZjpktCh9FExkN2TF83WRNaY4O/view?usp=sharing'},
        { name: 'Film 15', url:'https://drive.google.com/file/d/1U4l6CEO-K8Uj4LhM3n83tLIaG40ZoQGz/view?usp=sharing'},
        { name: 'Album zdjęć', url: 'https://photos.app.goo.gl/mS69ooJixbNriKseA' }
      ]
    },
    { 
      title: 'Częstochowa rekolekcje (2025 r.)', 
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
      title: 'Spotkania w salce (2025 r.)', 
      show: false,
      links: [
        { name: 'Album zdjęć (30 IX)', url: 'https://photos.app.goo.gl/hQyN3K1tTqvJrxAs9' },
        {
          name: 'Podsumowanie spotkania (30 IX)',
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
          protected: true
        }
      ]
    }, 
    { 
      title: 'Spotkania różne 2025', 
      show: false,
      links: [
        { name: 'Album zdjęć', url: 'https://photos.app.goo.gl/24qSGVTj46433Xt46' }
      ]
    }
  ];

 private readonly summaryPassword = 'syn';

  openLink(link: any) {
    if (link.url) {
      if (link.url.includes('photos.app.goo.gl')) {
        window.open(link.url, '_blank');
        alert('Album otwarty w nowej karcie. Po obejrzeniu kliknij w przeglądarce "Wróć" do kroniki.'); 
      } else {
        window.open(link.url, '_blank');
      }
    }
  }

  toggle(item: any) {
    item.show = !item.show;
  }

  toggleLink(link: any) {
    if (link.protected) {
      if (!link.show) {
        const password = prompt('Podaj hasło, aby odczytać podsumowanie:');
        if (password === this.summaryPassword) {
          link.show = true;
        } else {
          alert('Błędne hasło!');
        }
      }
    } else {
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
