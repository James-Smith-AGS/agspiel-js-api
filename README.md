# AG-Spiel JavaScript API-Wrapper

![developtesting](https://github.com/James-Smith-AGS/agspiel-js-api/workflows/developtesting/badge.svg?branch=develop&event=push)

__Bitte beachtet bei der Nutzung folgendes:__
`§5 Das Benutzen und von Programmen/Bots, die einen Spielvorteil ermöglichen, Funktionen bieten die sich mit Premiumfeatures überschneiden oder hohe Serverbelastungen erzeugen (z.B. Parsen der Seite mit mehr als einem Aufruf pro Sekunde), ist verboten. Die Bewerbung/Verbreitung von Browserplugins oder anderer clientseitiger Software zur Erweiterung/Veränderung der Webseite ist verboten.`
__Außerdem: Der volle Funktionsumfang dieser API kann nur mit einem Premiumaccount im AG-Spiel gewährleistet werden!__

## Inhaltsverzeichnis

* [Features](#funktionsumfang)
* [Installation](#installationsanleitung)
* [Cookie auslesen](#cookie-auslesen)
* [Beispiele](#beispiele)

## Funktionsumfang

* AG-Liste (API)
* Index-Liste (API)
* AG / Profil auslesen (API & Website)
* Chronik auslesen (Website)
* Aktionärsstruktur auslesen (Website)
* Bilanzen auslesen (Website)
* Kontoauszug auslesen (Website)
* Orderbuch auslesen (API)
* Depot auslesen - Aktien, Anleihen, Kredite, Zertis (API)

## Installationsanleitung

* [NodeJS](https://nodejs.org/en/download/) installieren
* Projekt-Ordner erstellen
* Im Terminal des gerade erstellten Ordners NPM initialisieren `npm init -y`
* Dieses Paket installieren `npm install --save agspiel-js-api`
* .js-Datei anlegen und das Paket importieren `const agspiel = require('agspiel')`
* Mit dem eigenen `ag-spiel`-Cookie authentifizieren und die API nutzen

```js
const agspiel = require('agspiel');

const api = new ags.Api("<Dein-AG-Spiel-Cookie>");

api.ag(140037).then((ag) => {
    console.log(ag);
});
```

## Cookie auslesen

Die Cookies könnt ihr, solange ihr beim AG-Spiel eingeloggt seid, über euren Browser erfahren (Bei Firefox STRG+Umschalt+Q und eine beliebige Anfrage anklicken. Danach seht ihr rechts die Cookies).
Indem ihr die "Klasse" initialisiert `new ags.Api(agspiel-cookie)` (siehe Beispiel oben) könnt ihr euch also "einloggen" und die API im vollen Umfang nutzen.

## Beispiele

* AG

```js
api.ag(140037).then((ag) => {
    console.log(ag);
});

// Output:
  _wkn: 140037,
  _name: 'Smith AG',
  _gruendung: 2015-09-24T15:43:39.000Z,
  _aktienzahl: 3943847,
  _in_liquidation: false,
  _kurs: 1455.72,
  _brief: 1501.52,
  _geld: 1455.72,
  _brief_stueckzahl: 8132,
  _geld_stueckzahl: 21413,
  _sw_aktie: 909.46,
  _bbw_aktie: 1581.56,
  _fp_aktie: 1169.78,
  _kgv: 116.15,
  _tagesvolumen: 0,
  _depotwert: 8263222109.95,
  _bargeld: 311181033.72,
  _highscore: 117,
  _highscore_groesse: 30,
  _highscore_wachstum: 472,
  _highscore_newcomer: 0,
  _agsx_punkte: 994,
  _in_agsx: false,
  _handelsaktivitaet: 41,
  _ceo: Ceo {
    _name: 'James-Smith',
    _index: 792,
    _reg_datum: 2015-09-24T15:40:59.000Z,
    _isGesperrt: false,
    _isUserproject: false,
    _premium: 2
  },
  _aktien: [
    Aktie { _wkn: 173636, _stueckzahl: 27 },
    ...
  ],
  _anleihen: [
    Anleihe {
      _betrag: 100000000,
      _zins: 0.2,
      _auszahlung_datum: 2020-08-25T08:18:31.000Z,
      _laufzeit: 5
    },
    ...
  ],
  _kredite: [
    Kredit {
      _betrag: 35000000,
      _zins: 0.273,
      _rueckzahlung_datum: 2020-08-28T12:16:29.000Z,
      _laufzeit: 5
    },
    ...
  ],
  _zertifikate: [
    Zertifikat {
      _betrag: 5125.78,
      _typ: 'call',
      _hebel: 1.441,
      _punkte: 23299,
      _ablauf_datum: 2020-08-24T20:11:41.000Z
    }
  ],
  _orders: [
    Order {
      _typ: 'buy',
      _limit: 1128.53,
      _stueckzahl: 24026,
      _isOrderregel: false,
      _isSystembankorder: false,
      _datum: 2020-08-23T14:09:24.000Z
    },
    ...
  ],
  _dividende: 0,
  _max_zertis: 1,
  _tages_hoch: 1454.26,
  _tages_tief: 1454.26,
  _kurs_14d: 6.93,
  _kurs_30d: -6.17,
  _kurs_60d: -0.68,
  _kurs_90d: -3.05,
  _bw_14d: 0.64,
  _bw_30d: 1.6,
  _bw_60d: -1.63,
  _bw_90d: 8.22,
  _fp_14d: 2.3,
  _fp_30d: 1.08,
  _fp_60d: 10.85,
  _fp_90d: 12.3,
  _index: Index {
    _id: 792,
    _name: 'Extrem Liberaler Index',
    _highscore: 2,
    _punkte: 570,
    _gruendung: 2014-05-10T08:31:19.000Z
  }
}
```

* Chronik

```js
api.chronik(153748).then((chronik) => {
    console.log(chronik);
});

// Output:
Chronik {
  _namenswechsel: [
    Namenswechsel {
      _datum: 2020-02-05T23:00:00.000Z,
      _oldName: 'MAPHIA EXPRESS',
      _newName: 'Seuchen AG '
    },
    ...
  ],
  _kes: [
    Ke {
      _datum: 2019-05-31T22:00:00.000Z,
      _anzahl: 4999440,
      _volumen: 624930000
    },
    ...
  ],
  _khs: [
    Kh {
      _datum: 2020-08-18T22:00:00.000Z,
      _anzahl: 400000,
      _volumen: 90820000
    },
    ...
  ],
  _uebernahmen: [
    Uebernahme {
      _datum: 2020-06-03T22:00:00.000Z,
      _uebernommener: 174799,
      _uebernahmekh: 14000
    },
    ...
  ],
  _regname: 'Waldbahn-Bayern',
  _regdatum: 2016-05-26T22:00:00.000Z,
  _uebernehmer: null,
  _uebernahmedatum: null,
  _liquidationsdatum: null
}
```

* Aktionärsstruktur

```js
api.aktionaere(140037).then((aktionaere) => {
    console.log(aktionaere);
});

// Output:
[
  Aktionaer {
    _rank: 1,
    _wkn: 135665,
    _name: 'Egel',
    _anzahl: 1190513,
    _aenderung: 0
  },
  Aktionaer {
    _rank: 2,
    _wkn: 140818,
    _name: 'BEST AG',
    _anzahl: 996857,
    _aenderung: 0
  },
  ...
]

```

* Bilanzen

```js
api.bilanzen(140037).then((bilanzen) => {
    console.log(bilanzen);
});

// Output:
[
  Bilanz {
    _datum: 2018-09-29T22:00:00.000Z,
    _aktienzahl: 3943847,
    _kurs: 271.1,
    _aktiendepot: 840188327,
    _anleihendepot: 462000000,
    _kreditdepot: 0,
    _zertifikatedepot: 0,
    _gesamtdepotwert: 1302188327,
    _bargeld: 335909969,
    _kfd: -25.22,
    _bwaktie: 415.36,
    _platzwachstum: 694,
    _platzgroesse: 39,
    _platzgesamt: 331,
    _fpaktie: 362.54,
    _buchwert: 1638098295
  },
  Bilanz {
    _datum: 2018-01-31T23:00:00.000Z,
    _aktienzahl: 3943847,
    _kurs: 260.51,
    _aktiendepot: 763224729,
    _anleihendepot: 432000000,
    _kreditdepot: 0,
    _zertifikatedepot: 0,
    _gesamtdepotwert: 1195224729,
    _bargeld: 333420505,
    _kfd: 0,
    _bwaktie: 387.6,
    _platzwachstum: 567,
    _platzgroesse: 39,
    _platzgesamt: 146,
    _fpaktie: 0,
    _buchwert: 1528645235
  },
  Bilanz {
    _datum: 2018-08-30T22:00:00.000Z,
    _aktienzahl: 3943847,
    _kurs: 260.51,
    _aktiendepot: 763224729,
    _anleihendepot: 432000000,
    _kreditdepot: 0,
    _zertifikatedepot: 0,
    _gesamtdepotwert: 1195224729,
    _bargeld: 333420505,
    _kfd: 0,
    _bwaktie: 387.6,
    _platzwachstum: 567,
    _platzgroesse: 39,
    _platzgesamt: 146,
    _fpaktie: 0,
    _buchwert: 1528645235
  },
  ...
]
```

* Kontoauszug

```js
api.kontoauszug(140037).then((kontoauszug) => {
    console.log(kontoauszug);
});

// Output:
[
  Kontoauszug {
    _id: 20907214,
    _datum: 2020-08-24T05:40:04.000Z,
    _konto: 'Aktien',
    _betrag: -2104.92,
    _vermerk: 'Kauf 18 Stk. #176221 (Temple of Love) zu 116,94€'
  },
  ...
]
```

* Index-Liste

```js
api.indexListe().then((indizes) => {
    console.log(indizes);
});

// Output:
[
  Index {
    _id: 7,
    _name: 'SAX - Solider Aktienindex',
    _highscore: 30,
    _punkte: 134,
    _gruendung: 2013-11-07T21:08:06.000Z
  },
  Index {
    _id: 76,
    _name: 'Premiumrendite AG - Index',
    _highscore: 3,
    _punkte: 549,
    _gruendung: 2011-07-03T10:47:05.000Z
  },
  ...
]
```

* AG-Liste

```js
api.agListe().then((ags) => {
    console.log(ags);
});

// Output:
[
  AgOfList { _wkn: 100001, _name: 'Rady', _ceo: 'Rady' },
  AgOfList { _wkn: 100352, _name: 'MLM System AG', _ceo: 'HerrMadoff' },
  AgOfList { _wkn: 101224, _name: 'AlPharm AG', _ceo: 'blueman' },
  ...
]
```
