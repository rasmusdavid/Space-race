import { game } from "./game.js";
import { keyDown, keyUp } from "./event.js";

document.body.addEventListener("keydown", keyDown); // ev window.add....elelr document.body.
document.body.addEventListener("keyup", keyUp);

game.start();

/*

SPACE RACE!

Styr spelare 1 med w och s. Skjut mot din motspelare med a
Styr spelare 2 med o och l. Skjut mot din motspelare med k

Rapport uppgift 2


1.	Jag gillade uppgiften, jag tyckte att den summerade vad vi har lärt oss 
hittills på ett bra sätt och tyckte att vi fick bra med tid på oss att göra den. 
Under dessa 2 veckorna så har vi haft bra med tid att både skapa ett fungerande spel 
och hunnit små fixa med detaljer för att göra spelet snyggt.

2.	Det var vid tillfälle lite svårt att få all kod att gå ihop. Även om vi hade
en plan på hur projektet skulle se ut så skriver vi alla kod på lite olika vis
och ”antar” att andra skrev på samma sätt. Så det har blivit en hel del console.logs
för att kolla var det gått snett.

3.	Ett problem så jag personligen tyckte var riktigt påtagligt var att få alla att
dyka upp på bestämd tid och engagera sig i processen. Det var ganska frustrerande 
att vänta på att folk skulle dyka upp och sen kommer dom 1 dagar senare och har inte 
gjort något som var bestämt. Jag förstår att det fungerar så här på en arbetsplats 
också men jag blev verkligen besviken på det bristande engagemanget och att hela gruppen 
har mer eller mindre samma resultat trots att mängden man bidragit varierat mycket. 

4.	Något jag är sjukt nöjd över är raketens partiklar som kommer flygande bakom raketen. 
Även om den skapade mycket irritation innan den väl fungerade så var det verkligen värt 
det när det väl fungerade. Jag är också nöjd med utförandet av raketen. Men om du undrar 
varför den är uppbyggd på det sättet som den är så är det för att jag försökte få den 
mer triangelformad men misslyckades med kollisionen på en triangel så det fick jag släppa.


Tack för en bra kurs! Jag hoppas på att vi får ha dig i en annan lite längre fram.


Rasmus Davidsson


*/