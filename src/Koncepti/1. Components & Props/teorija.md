# Komponente i način da im se nešto kaže

    "Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen." - reactjs.org

Komponenta je logička celina.  
Komponenta je funkcija.  
Rezultat izvršenja komponente je deo korisničkog interfejsa (Onoga što vidimo)  
Kombinovanjem komponenti dobijamo celokupan UI.

Možemo uzeti za primer bilo koju forum stranicu.
Uglavnom imamo neku objavu pored te objave podatke onoga ko je to objavio.
Ispod objave komentare i lajkove.

Ceo taj post bi mogli nazvati **ForumThread**  
Opis onoga ko je postavio bi bila komponenta pod imenom **MemberCard**  
Samu objavu kao **Post** i ona bi sadržala tekst, datum i vreme objavljivanja, 
status (da li je editovana ili nije) itd  
Komentar bi bio komponenta za sebe (**Comment**) ali bi pripadala listi komentara koja bi opet mogla biti komponenta za sebe (npr **CommentList**)  

I eto, logički smo podelili ono što smo videli i već imamo predstavu gde se
šta uklapa i na koji način.   
Ovo bi bile naše komponente:  

    ForumThread  
    MemberCard  
    Post  
    CommentList  
    Comment  

Konvencija: Početno slovo komponente uvek velikim slovom da bi se razlikovalo od
html tagova.

Komponenta ima strukturu. Ono što prikazuje to je neka struktura. Ukoliko želimo našu komponentu da napravimo generičkom, odnosno
da zavisi od onoga što komponenti "kažemo" to možemo činiti kada joj prosledimo objekat sa nekim svojstvima koji je nazvan props.  
Šta u stvari želim da kažem?  
Recimo da imamo komponentu Pera koja prikazuje njegovo ime, godine i interesovanja  

    function Pera(){
        return `Pera ima 30 godina i zanima ga softversko inženjerstvo`;
    }

Ovako komponenta nije reusabilna (nije generička). Radi to što radi i ne može da se prilagodi spolja.
Ukoliko bi išli ka generalizaciji ova komponenta bi se trebala zvati Person i da štampa podatke osobe  

    function Person(){
        return `Pera ima 30 godina i zanima ga softversko inženjerstvo`;
    }

Ali ona još uvek štampa samo Perine podatke. Mi komuniciramo sa komponentom preko propsa odnosno objekta sa nekim svojstvima koji 
mi komponeti pošaljemo a ona će znati da je iskoristi.

Props su propertiji (svojstva) objekta props a čini ih svaki onaj parametar koji prosledimo komponenti

    <Person name="Pera" age="30" interest="softversko inženjerstvo" />

U ovom slučaju dobijamo 

    props = {
        name: "Pera",
        age: "30",
        interest: "software engineering"
    }

Ukoliko je naša komponenta funkcija ovako bismo koristili props:

    function Person(props){
        return `${props.name} ima ${props.age} godina i zanima ga ${props.interest}`;
    }

Kada je to klasa onda pristupamo props-u preko pokazivača this
Ono što definiše šta će se prikazati u klasnoj komponeti je render funkcija

    class Person extends React.Component {
        render(){
            return `${this.props.name} ima ${this.props.age} godina
                    i zanima ga ${this.props.interest}`;
        }
    }


Higher-Order Components (HOCs) — su odličan način da se reusuje logika druge komponente
To su u suštini javascript funkcije koje kao argument uzmu komponentu i vrate drugu.
Dok komponenta props pretvori u UI, HOC pretvori jednu komponentu u drugu.


Za one koji žele da znaju više  
https://medium.com/the-andela-way/understanding-react-components-37f841c1f3bb
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
https://blog.scottlogic.com/2011/06/10/javascript-anonymous-functions.html
https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052