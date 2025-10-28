import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { RouterModule } from '@angular/router';
// Typy dla linków i itemów
interface Link {
  name: string;
  url?: string;
  text?: string;
  protected?: boolean;
  show?: boolean;
  type?: string;
}

interface Meeting {
  date: string;
  show: boolean;
  links?: Link[];     // dla zwykłych sekcji
  meetings?: Meeting[]; // dla spotkań z podziałem na daty
}

interface Item {
  title: string;
  show: boolean;
  image?: string;       // 🆕 obrazek JPG lub PNG
  fullscreen?: boolean; // 🆕 tryb pełnoekranowy po kliknięciu
  links?: Link[];
  meetings?: Meeting[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,        // <-- potrzebne do date pipe i dyrektyw typu ngSwitch
    NgFor,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentDateTime: Date = new Date(); // <-- dodaj to
  items: Item[] = [
     { 
      title: 'spotkania różne Sylwester, bal przebierańców, grill i inne', 
      show: false,
      links: [
        { name: 'Album zdjęć', url: 'https://photos.app.goo.gl/UMSnLEitBRwq5MmH6' , type: 'foto'}
      ]
    },
    { 
      title: 'Lewin Kłodzki rekolekcje (różne lata)', 
      show: false,
      links: [
        { name: 'Album zdjęć', url: 'https://photos.app.goo.gl/6zoDJrG4TM8fte5y6', type: 'foto'},
        { name: 'Film 1', url:'https://drive.google.com/file/d/1dljUMxwhUrTb6Lf3_0UkFojdKVJB5nnC/view?usp=sharing', type: 'film'},
        { name: 'Film 2', url:'https://drive.google.com/file/d/13k6eLd7Y_MZc-MkM41DMlPDD_bthFj9K/view?usp=sharing', type: 'film'},
        { name: 'Film 3', url:'https://drive.google.com/file/d/1VvEk7og9-WByuMJ58SpiJ61f-Ne3Ghob/view?usp=sharing', type: 'film'},
        { name: 'Film 4', url:'https://drive.google.com/file/d/1RK8PA186Xwu5oaZml1LrWQuvTec6JKgQ/view?usp=sharing', type: 'film'},
        { name: 'Film 5', url:'https://drive.google.com/file/d/1w7P9LdDiJWidmBUBBaI4MJ0gNZg0KR1t/view?usp=sharing', type: 'film'},
        { name: 'Film 6', url:'https://drive.google.com/file/d/1V7lzHGPqG9tDR_wqnCW-HoVVL4IJFotQ/view?usp=sharing', type: 'film'},
    
      ]
    },
    { 
      title: 'Wniebogłosy (VI 2025 r.)', 
      show: false,
      links: [
        { name: 'Album zdjęć', url: 'https://photos.app.goo.gl/mS69ooJixbNriKseA', type: 'foto'},
        { name: 'Film 1', url:'https://drive.google.com/file/d/1RD5D9Op3MbeZHNNukB8idsmLiLOQyHix/view?usp=sharing', type: 'film'},
        { name: 'Film 2', url:'https://drive.google.com/file/d/12ed5-y2IB609eF10kC8QIikIneaFKm5D/view?usp=sharing', type: 'film'},
        { name: 'Film 3', url:'https://drive.google.com/file/d/1IQ1DxYKIxOnSPBYAcoLFEO3dtcW293oY/view?usp=sharing', type: 'film'},
        { name: 'Film 4', url:'https://drive.google.com/file/d/10FB2rRfoxmlgvjLADFm4vkBMjNDWb_N1/view?usp=sharing', type: 'film'},
        { name: 'Film 5', url:'https://drive.google.com/file/d/1oOK9a4pgeOTyLqM52PQ-rDM3AfblLkKK/view?usp=sharing', type: 'film'},
        { name: 'Film 6', url:'https://drive.google.com/file/d/1wsr0UBsdG0uAOJfKUsBw-EcO_1CbnsmK/view?usp=sharing', type: 'film'},
        { name: 'Film 7', url:'https://drive.google.com/file/d/1V7768UmItqDbk0GujosgnNTc8uFXKyAS/view?usp=sharing', type: 'film'},
        { name: 'Film 8', url:'https://drive.google.com/file/d/1be5iGHRCsVLNFHg5qcM_LwPbdP6cjrhK/view?usp=sharing', type: 'film'},
        { name: 'Film 9', url:'https://drive.google.com/file/d/12L3wt-3LuQgqtUdFvPGowG5zPhnsLH-4/view?usp=sharing', type: 'film'},
        { name: 'Film 10', url:'https://drive.google.com/file/d/1va4-sahc3p81-V2xyXQellN2aiwYFS-S/view?usp=sharing', type: 'film'},
        { name: 'Film 11', url:'https://drive.google.com/file/d/1NMS7qxHVu4U9EtsHspy9p5keuDP_uWil/view?usp=sharing', type: 'film'},
        { name: 'Film 12', url:'https://drive.google.com/file/d/16duXGjCWEiCZLbQplpYEuo_rqLaEH1zh/view?usp=sharing', type: 'film'},
        { name: 'Film 13', url:'https://drive.google.com/file/d/18326TYDRwaPQcHhV_CT3HNk_GJNtJuW9/view?usp=sharing', type: 'film'},
        { name: 'Film 14', url:'https://drive.google.com/file/d/1IrKI5GpZjpktCh9FExkN2TF83WRNaY4O/view?usp=sharing', type: 'film'},
        { name: 'Film 15', url:'https://drive.google.com/file/d/1U4l6CEO-K8Uj4LhM3n83tLIaG40ZoQGz/view?usp=sharing', type: 'film'},
      ]
    },
    { 
      title: 'Częstochowa rekolekcje ( VIII 2025 r.)', 
      show: false,
      links: [
         { name: 'Album zdjęć', url: 'https://photos.app.goo.gl/a93TNSxNteFAiFi26', type: 'foto'},
        { name: 'Film 1', url:'https://drive.google.com/file/d/1xCTxLX8MxScZwr8h99BRUCKIG_ARZFnv/view?usp=sharing', type: 'film'},
        { name: 'Film 2', url:'https://drive.google.com/file/d/17KBIS55dHflHdeN9-bumwKdU13ih2x3e/view?usp=drive_link', type: 'film'},
        { name: 'Film 3', url:'https://drive.google.com/file/d/1z0EU60QIOQxI5XRJzoyktSzOROCtvukj/view?usp=drive_link', type: 'film'},
        { name: 'Film 4', url:'https://drive.google.com/file/d/1nczXz5BDiqv8rl93tJNxPrAMXp3BULaR/view?usp=sharing', type: 'film'},
        { name: 'Film 5', url:'https://drive.google.com/file/d/1MlL6h3kYPwWggd8v8MqswTVqEtlE_M6-/view?usp=sharing', type: 'film'},
        { name: 'Film 6', url:'https://drive.google.com/file/d/1ZjjRL_yxFyuY_MJDqiPFvjpPqNKUaMUq/view?usp=sharing', type: 'film'},
      ]
    },
    { 
      title: 'Bardo warsztaty (X 2025 r.)', 
      show: false,
      links: [
          { name: 'Album zdjęć', url: 'https://photos.app.goo.gl/x7qcuRwbpNFf89q76', type: 'foto'},
        { name: 'Film 1', url:'https://drive.google.com/file/d/1TY18uyg7ezf_PDijkkJl4d84F9i2nuQP/view?usp=sharing', type: 'film'},
        { name: 'Film 2', url:'https://drive.google.com/file/d/1-Swnw1Rii9jnHi4bUQwPG2G-sMYlQ90_/view?usp=sharing', type: 'film'},
        { name: 'Nagranie audio 1', url: 'https://drive.google.com/file/d/1a4K1HMlxAA6pi1LoZck_mU7Pfql_FxMT/view?usp=sharing', type: 'audio' },
        { name: 'Nagranie audio 2', url: 'https://drive.google.com/file/d/1F7QjFfPsNd0nHXJSyyoTv4tb8XJrRiQl/view?usp=sharing', type: 'audio' },
      ]
    },
        { 
      title: 'Katedra Wrocławska - msza św. -Błogosławione Paschalis i IX towarzyszek (X 2025 r.)', 
      show: false,
      links: [
        { name: 'Zdjęcia', url: 'https://photos.app.goo.gl/gN626K9SJMqcSdJXA', type: 'foto'},
        { name: 'Film 1', url:'https://drive.google.com/file/d/1iWIGDrsbLOYHRafsJKCLoyaEKH0np8Rv/view?usp=sharing', type: 'film'},
        { name: 'Film 2', url:'https://drive.google.com/file/d/1Jh9ln3ijJduJ-NFsFMsv9SZOBs3KZsmg/view?usp=sharing', type: 'film'},
        { name: 'Film 3', url:'https://drive.google.com/file/d/1wn6xPzzqDEPAQ0ObtKl_be3btkFLtBDC/view?usp=sharing', type: 'film'},
        { name: 'Film 4', url:'https://drive.google.com/file/d/1Y4Kd2HV-ztTFVbBbXvpC3K7CFcMG4opU/view?usp=sharing', type: 'film'},
        { name: 'Film 5', url:'https://drive.google.com/file/d/1_qvVR4R8zORM-AUaoRORnIVIr35vyb3l/view?usp=sharing', type: 'film'},
        { name: 'Film 6', url:'https://drive.google.com/file/d/13_rdAXVwKvr_iUrMH3VKFt1Y6Nd_aWMK/view?usp=sharing', type: 'film'},
        { name: 'Opis', 
          text: `🕊 Okoliczności męczeństwa

W maju 1945 r., podczas przesuwania się linii frontu i wkroczenia żołnierzy Armii Czerwonej, siostry elżbietanki były wielokrotnie szykanowane, zagrożone i brutalnie traktowane. 
11 maja 1945 r. Siostra Maria Paschalis została zaatakowana przez żołnierza radzieckiego, który chciał ją zmusić do uległości. Ona odmówiła, powołując się na swoje powołanie zakonne i czystość, i została postrzelona. 
Zmarła następnego dnia, 12 maja 1945 r., w szpitalu w Nysie.
Pozostałe siostry poniosły śmierć w różnych miejscach i w różnych miesiącach pierwszej połowy 1945 r. w rejonie Śląska i Czech. 
Imiona tych dziewięciu towarzyszek:
Edelburgis, Rosaria, Adela, Sabina, Melusja, Sapientia, Adelheidis, Felicitas, Acutina

⛪ Beatyfikacja i kult
Proces beatyfikacyjny rozpoczął się na szczeblu diecezjalnym 25 listopada 2011 r. w archikatedrze we Wrocławiu. 
Proces diecezjalny został formalnie zamknięty 26 września 2015 r., a akta przesłano do Rzymu Kongregacji Spraw Kanonizacyjnych. 
19 czerwca 2021 r. papież Franciszek podpisał dekret o męczeństwie Marii Paschalis i jej towarzyszek, co umożliwiło ich beatyfikację. 
Beatyfikacja odbyła się 11 czerwca 2022 r. w Archikatedrze św. Jana Chrzciciela we Wrocławiu, pod przewodnictwem kard. Marcello Semeraro, delegata papieskiego. 
Od 11 maja obchodzone jest liturgiczne wspomnienie błogosławionej Marii Paschalis i jej dziewięciu Towarzyszek. `,
          show: false,
          protected: false,
          type: 'opis'
}
      ]
    },
            { 
      title: 'Szkoła Uwielbienia (27.10.2025 r.)', 
      show: false,
      image: '20251027.jpg',

      links: [
        { name: 'Wprowadzenie', url:'https://drive.google.com/file/d/17TmTFzpeYG2FqRqeYqwY_iyYjgx9ojyo/view?usp=sharing',type: 'film' },
        { name: 'Opis', 
          text: ` ➡️ Ks. dr hab. Rajmund Pietkiewicz - prof. PWT. poprowadził nas w modlitwę uwielbienia poddanego Duchowi Św. Spotkanie miało charakter otwarty.`, 
          show: false,
          protected: false,
          type: 'opis'
         }      ]
    },

    { 
      title: 'Spotkania wspólnoty (2025 r.)', 
      show: false,
      meetings: 
      [
        { date: '20 IX 2025 Kiełczów',
          show: false,
          links: [  

            { name: 'Zdjęcia', url: 'https://photos.app.goo.gl/24qSGVTj46433Xt46', type: 'foto' },
            {
              name: 'opis',
              text: `spotkanie u Eli i Marka`,
              show: false,
              protected: false,
              type: 'opis'
            }
          ]
        },


        { date: '30 IX 2025 salka',
          show: false,
          links: [
            { name: 'Zdjęcia', url: 'https://photos.app.goo.gl/hQyN3K1tTqvJrxAs9', type: 'foto' },
            {
              name: 'opis',
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
              protected: true,
              type: 'opis'
            }
          ]
        },

        { date: '07 X 2025 kościół',
          show: false,
          links: [  

            { name: 'Zdjęcie', url: 'https://drive.google.com/file/d/1x0PNbdJCRfBZIb3jsBZkXBLH6WfXkvWm/view?usp=sharing' , type: 'foto'},
            { name: 'Film 1', url:'https://drive.google.com/file/d/1RGL-CwDoKONNwqyaucm9hQd1hu0tUCdq/view?usp=sharing', type: 'film'},
            {
              name: 'opis',
              text: `Święto Matki Bożej Różańcowej czczone jest 7 października. Dzień ten jest rocznicą bitwy pod Lepanto (1571), w której państwa Świętej Ligi skupione wokół Państwa Kościelnego pokonały flotę Imperium Osmańskiego. Papież Pius V ogłosił w 1572 roku ten dzień świętem Matki Bożej Zwycięskiej.`,
              show: false,
              protected: false,
              type: 'opis'
            }
          ]
        }
      ]
    }
  ];

 private readonly summaryPassword = 'syn';

  // --- OTWIERANIE LINKÓW ---
  openLink(link: Link) {
    if (!link.url) return;

    // jeśli link kończy się na .m4a, otwórz w nowym oknie z odtwarzaczem
    if (link.url.endsWith('.m4a')) {
      const audioWindow = window.open('', '_blank');
      if (audioWindow) {
        audioWindow.document.write(`
          <html>
            <body style="display:flex;align-items:center;justify-content:center;height:100vh;background:#000;color:#fff;">
              <h3>${link.name}</h3>
              <audio controls autoplay style="width:90%;">
                <source src="${link.url}" type="audio/mp4">
              </audio>
            </body>
          </html>
        `);
        audioWindow.document.close();
      }
    } else {
      // zwykły link do filmu/albumu
      window.open(link.url, '_blank');
    }
  }

// --- ROZWIJANIE EVENTÓW ---
toggle(obj: { show: boolean }) {
  obj.show = !obj.show;
}


  // --- CHRONIONE TEKSTY ---
  toggleLink(link: Link) {
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

  trackByTitle(index: number, item: Item) {
    return item.title;
  }

  trackByName(index: number, link: Link) {
    return link.name;
  }

toggleImage(item: Item) {
  item.fullscreen = !item.fullscreen;
}

  closePage() {
    window.close();
  }
}