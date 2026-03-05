# Smartschool++ Notes

## Overzicht

**Smartschool++ Notes** is een Chrome-extensie die een compact notitiepaneel toevoegt aan Smartschool.
Het paneel verschijnt linksonder op de pagina en laat gebruikers snel notities maken terwijl ze Smartschool gebruiken.

De extensie is ontworpen om **de normale Smartschool interface niet te verstoren** en slaat alle notities lokaal op in de browser.

---

## Functionaliteiten

* Meerdere notities aanmaken
* Titel en vak toevoegen aan elke notitie
* Automatisch opslaan via Chrome Storage
* Notities blijven bestaan na het herladen van de pagina
* Verwijderen van notities met één klik
* Modern Smartschool-achtig donker thema
* Minimaliseerbaar notitiepaneel
* Scrollbare lijst met notities

---

## Interface

Het notitiepaneel bevat drie hoofdonderdelen:

### 1. Header

* Titel: **Notities**
* Minimaliseer knop

### 2. Notitie lijst

Toont alle opgeslagen notities met:

* titel
* vak
* inhoud
* verwijderknop

### 3. Invoer

Gebruikers kunnen nieuwe notities maken via:

* titelveld
* vakveld
* tekstveld
* knop **Nieuwe notitie**

---

## Installatie (Developer Mode)

1. Download of clone de repository
2. Open **Google Chrome**
3. Ga naar:

```
chrome://extensions
```

4. Zet **Developer mode** aan (rechtsboven)
5. Klik op **Load unpacked**
6. Selecteer de map van de extensie

De extensie zal automatisch actief worden op Smartschool.

---

## Projectstructuur

```
smartschool-notes/
│
├── manifest.json
├── content.js
├── style.css
└── README.md
```

### manifest.json

Definieert de Chrome extensie en laadt de scripts op Smartschool.

### content.js

Injecteert het notitiepaneel en beheert:

* opslag
* toevoegen van notities
* verwijderen van notities

### style.css

Bevat de volledige styling van het notitiepaneel.

---

## Data opslag

Alle notities worden opgeslagen via:

```
chrome.storage.local
```

Dit betekent dat:

* gegevens lokaal in de browser worden opgeslagen
* geen externe servers worden gebruikt
* notities behouden blijven na herstart van Chrome

---

## Veiligheid

De extensie:

* leest geen persoonlijke Smartschool data
* verstuurt geen informatie naar externe servers
* gebruikt alleen de Chrome `storage` permissie

---

## Toekomstige uitbreidingen

Mogelijke toekomstige functies:

* Zoekfunctie voor notities
* Tags per vak
* Vastpinnen van belangrijke notities
* Kleurcodes per vak
* Sleepbare en resizebare sidebar
* Export / backup van notities
* Markdown ondersteuning

---

## Auteur

Project gemaakt door **Noah El Ouazzani**
Smartschool++ uitbreiding voor persoonlijk gebruik.

---

## Licentie

Dit project is bedoeld voor educatief gebruik.
