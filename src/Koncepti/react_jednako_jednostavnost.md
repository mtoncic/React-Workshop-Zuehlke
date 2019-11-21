# REACT = JEDNOSTAVNOST

React je biblioteka koja se bavi isključivo VIEW slojem aplikacije. 
Znači kako će aplikacija da izgleda na klijentu (browser, aplikacija na telefonu, itd...).

HTML (HyperTextMarkupLanguage) - izgled, struktura  
...Predstavlja strukturu stranice kao stablo.

Javascript - Ponašanje, dinamičnost  

CSS - izgled, sjaj

Danas je Javascript mnogo više od ponašanja, ali to je posebna tema.


U početnom rešenju bitna su nam dva fajla:  
index.html => koji se nalazi u public folderu  
index.js => koji se nalazi u src folderu

U index.html fajlu nam se nalazi html (HyperTextMarkupLanguage- predstavlja startnu strukturu naše stranice)  
Dok index.js fajl predstavlja nešto što povezuje ono što je React VirtualDom sa našim html DOM-om.

Whhaaat?
Da... u kratkim crtama možemo da zamislimo našu stranicu kao niz čvorova koji su nekako povezani u strukturu stabla.  
window predstavlja ceo prozor,   
document stranicu   
a html niz čvorova koji pripadaju našoj stranici.  
VirtualDOM je isto to samo u javascriptu predstavljeno kao niz objekata.

React povezuje ta dva DOM-a. Odnosno VirtualDOM je reprezentacija HTML DOM-a, znači identični su.

Kada uradimo neku akciju i na neki način utičemo da se desi neka promena na DOM-u, odnosno našoj stranici ako želite slikovitije.  
Na primer, na stranici imamo neku listu namirnica koje trebamo kupiti i formu za unos nove namirnice na taj spisak.
Kada kliknemo DODAJ unosimo ono što smo popunili u tekstualnom polju na spisak namirnica a time kreiramo novi element u našem stablu da bi to prikazaju
u obliku DOM-a. 
Ovim postupkom smo prvo uticali na promenu Virtualnog DOM-a a ta promena se reflektovala na DOM u browseru i mi smo videli promenu.



