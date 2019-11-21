        ReactDOM.render(
            <h1>Hello, React!</h1>,
            document.getElementById('root')
        );

Ovo je linija koda koja povezuje react svet i onaj drevni dokument svet.  
Render je funkcija koja uzme ono što je prvi argument a što bi trebalo da bude neki UI i ubaci u element sa IDjem root u react DOM. To se kasnije sinhronizuje
sa html DOM-om.  
U suštini prvi argument je react element čiji se rezultat (UI) uključuje u kontejner (drugi argument). Ukoliko je već uključen i ukoliko je došlo do  
menjanja React koristi svoj diffing algoritam da vidi promene i odradi update samo tamo gde je potrebno.   
Po defaultu react uzima index.html stranicu kao izvor html DOM-a. 

BONUS:  
Šta povezuje index.js i index.html?
Kako react zna da treba u index.html da uključi index.js?  

ODGOVOR:  
React koristi html-webpack-plugin. To je webpack plugin koji nam generše html fajl sa sve uključenim bundlovanim javascript koji se dobije na kraju mapiranjem  
i transpajliranjem svega u javascript. Plugin se koristi tako što mu se zadamo startnu tačku a to je index.js i odatle on krene i kreira rezultujući "bundle"  
koji uključi u html fajl.