Događaji kao što je klik na neki element, hover, pritisak nekog tastera itd...
Na gotovo isti način se rešavaju kao kod čistog HTML-a.
Kako bi se pokazao alert nakon klika na div u htmlu?

        <a href="#" onclick="alert("clicked")">
            Click me
        </a>

A kod React-a:

        <a href="#" onClick={customMadeAlert}>
            Click me
        </a>

Razlike:
1. Kod Reacta koristimo JSX i nisu sve mala slova eventa već je camelCase.  
2. Kod Reacta prosleđujemo funkciju kao event handler dok u htmlu string  


Ukoliko imamo customMadeAlert u okviru naše komponente i želimo da kada kliknemo na ovaj element u htmlu odradimo nešto  
ali ne promenimo url to možemo uraditi tako što ćemo pozvati preventDefault nad eventom i samim tim odraditi samo ono što mi želimo.  
Bez podrazumevanog ponašanja.  

        class DummyComponent extends React.Component {

            customMadeAlert(event){
                event.preventDefault(); //ovim izbacujemo podrazumevano ponašanje
                //something
            }

            render() {
                return  <a href="#" onClick={this.customMadeAlert}>
                    Click me
                </a>;
            }

        }

Kao što vidimo kada klikom pozovemo naš event handler implicitno se kao parametar šalju informacije o eventu u takozvanom event objektu.  
Šta ukoliko mi želimo nešto da prosledimo, kako to da učinimo?  

        .
        .
        render() {
                return  <a href="#" onClick={() => this.customMadeAlert(ourParam)}>
                    Click me
                </a>;
            }
        .
        .

A ukoliko želimo da sa našim parametrom ourParam prosledimo i onaj koji javascript po defaultu dobije (eventObject):  

        .
        .
        render() {
                return  <a href="#" onClick={(e) => this.customMadeAlert(ourParam, e)}>
                    Click me
                </a>;
            }
        .
        .

Ovde gore eksplicitno moramo da prosledimo event Object dok u ovoj sintaksi se on implicitno šalje:  

        .
        .
        render() {
                return  <a href="#" onClick={this.customMadeAlert.bind(this, ourParam)}>
                    Click me
                </a>;
            }
        .
        .


Ukoliko u okviru naše event handler metode želimo da pristupimo kontekstu komponente, nećemo moći ukoliko ne prosleđujemo kontekst preko naše funkcije nekako. 
        
        class DummyComponent extends React.Component {

            something(){
                // ...
            }

            customMadeAlert(event){
                event.preventDefault(); //ovim izbacujemo podrazumevano ponašanje
                this.something() ... // this je undefined
            }

            render() {
                return  <a href="#" onClick={this.customMadeAlert}>
                    Click me
                </a>;
            }

        }

U javascriptu klasne metode nisu podrazumevano povezane (bound) sa kontekstom klase. Ima više načina da se ovo reši:

1. 
        class DummyComponent extends React.Component {
            
            constructor(props)
            {
                super(props);

                this.customMadeAlert = this.customMadeAlert.bind(this);
            }

            something(){
                // ...
            }

            customMadeAlert(event){
                event.preventDefault(); //ovim izbacujemo podrazumevano ponašanje
                this.something() ... // OK
            }

            render() {
                return  <a href="#" onClick={this.customMadeAlert}>
                    Click me
                </a>;
            }

        }

2. class DummyComponent extends React.Component {

            something(){
                // ...
            }

            customMadeAlert = (event) => {
                event.preventDefault(); //ovim izbacujemo podrazumevano ponašanje
                this.something() ... // OK
            }

            render() {
                return  <a href="#" onClick={this.customMadeAlert}>
                    Click me
                </a>;
            }

        }

3. class DummyComponent extends React.Component {

            something(){
                // ...
            }

            customMadeAlert(e){
                e.preventDefault(); //ovim izbacujemo podrazumevano ponašanje
                this.something() ... // OK
            }

            render() {
                return  <a href="#" onClick={(e) => this.customMadeAlert(e)}>
                    Click me
                </a>;
            }

        }

U ovom trećem načinu imamo problem sa performansama ukoliko se naša komponenta stalno renderuje. Jer se uvek kada se render metoda pozove
ponovo kreira event handler.

