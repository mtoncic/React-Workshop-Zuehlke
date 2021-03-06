U ovom folderu postoji i jedan png fajl to je screenshot koji sam uhvatio na krstarica forumu.  

Posmatrajmo dati UI i uočimo šta bi bile logičke celine koja ga čine.  
Koji su delovi ove UI slagalice?  


Kasnije ćemo pričati o konceptu komponente ....

When I mention component I refer to a reusable, decopupled part of the UI. 
I would say self-defined part of the UI. It is piece with meaning.
Is html element in it's default state a component? I wouldn't say so, although it is self-explainatory.

Can those be counted in compnents:
- button
- label (<label>labeling something</label>)
- font
- a list of something
- color
- navbar

Here are some articles when different views on a component are described:
1. https://medium.com/@wereheavyweight/how-were-using-component-based-design-5f9e3176babb
Here the starting point is Component Based Design influenced by Atomic Design but with "custom namings"
"First of all, we tip our hat to Brad Frost, who literally wrote the book on Atomic Design. 
He introduced us to the idea that we aren’t actually designing web pages or app screens but are in fact designing design systems.
However, we found that the metaphoric nature of Atomic Design caused some confusion among our clients. 
Especially the abstract naming conventions can be a little daunting. 
Therefore we defined our own take on in."
Identity -> Elements -> Components -> Compositions -> Layout -> Pages

As a baseline they define Identity. Something that gives the identity to the application.
Typefaces, typography, primary and secondary colours, ...

They get a Component as a result of combining multiple elements.
Elements in their terminology represents something with state. Elements can be: inputs, buttons, links, drop-downs...
Things like cards, heros and navigation menus are traditional examples of Components.

Compositions as components combined. Like a list of components.

Layout, is a more abstract collection of design principles. 
Herein the amounts of white-space, grids and wrappers are defined.

The last group are the actual Pages (or screens) of the project. 
Each Page consists of an arrangement of Compositions and Components.

``
In short, Component Based Design allows us to quickly design many screens 
that are easy to maintain and update with new features. 
Multiple designers can work on the same project in unison because everything is clearly defined.
``

2. https://blog.bitsrc.io/building-a-consistent-ui-design-system-4481fb37470f
Creating and maintaining a consistent UI and UX across every part of your product helps 
your users intuitively navigate and successfully interact with different sections of your applications without confusion.
Keeping your UI consistent between multiple sections of your product and across apps 
creates something even much more valuable: your brand. Branding your UX and UI 
is the key to making users “feel at home” while interacting with new product, 
increasing their loyalty and satisfaction.
Companies like Uber, Pinterest, Airbnb, Walmart, Atlasssian and many more achieve consistency 
in their UI through a component-based design system.
Airbnb’s Design Studio used this approach when building their design system: 
“Our designs should be unified platforms that drive greater efficiency through well-defined and reusable components”.

A UI design system is more than a component library. 
It’s more than the colors of your components. 
It’s an ever-growing and ever-evolving source of truth for the 
basic parts from which your entire product experience is made of.

3. https://codeburst.io/ui-design-system-and-component-library-where-things-break-d9c55dc6e386

Zaključak:
Kada mi neko pomene pojam Komponenta, to direktno povezujem za nešto na UIju što ima neko veće značenje od html elementa,
nešto što je reusabilno i jasno definisano. 
Velike kompanije kao što su Netflix, Airbnb, Uber ... koriste sistem baziran na komponentama. 
Komponente nam omogućavaju konzinstentan dizajn (podjednak osećaj kroz čitavu aplikaciju, feels like home)
Sviđa mi se i tumačenje na vizuelni dizajn i dizajn orjentisan ka ponašanju. To daje korisnicima način da kroz aplikaciju znaju koja boja šta znači
a sa druge strane i šta mogu da očekuju ako kliknu negde. 
Dobra stvar je i verzionisanje komponenti. Pošto postojanjem koncepta komponente mi ukidamo nepotrebno dupliranje koda, idemo ka čistijem kodu i dizajnu.
Mi takođe izbegavamo situaciju u kojoj bi morali na više mesta da menjamo istu stvar. Ovako isporučujemo jednu verziju komponente svuda,
bilo da imamo web aplikaciju i/ili mobilnu, .. Kada sa te strane pogledamo komponente imaju i dosta sličnosti sa servisima u mikroservisnom svetu.
Jedna od zamki koja se pominje kada dizajniram naš sistem na komponentama je da učinimo da sve bude isto na svakom delu aplikacije.
Da element uvek ima istu marginu u odnosu na okolinu, da navbar uvek ima isti spacing itd...
Your real design system is what your users get. Nothing more or less.
Upravo tako, jedina bitna stvar je da korisnik ima dobro iskustvo kroz našu aplikaciju. A koncepti su tu da nama olakšaju komunikaciju,
da približe developere, dizajnere, ux inženjere. Da budu na istom jeziku, da se razumeju. 
Praktični dizajn sistem mora da ukloni distancu između slike i koda, kao i distancu između planova i evolucije kroz vreme.
Kroz ovu rečenicu možemo zaključiti da dizajner i developer moraju usko da sarađuju kao i da je evolucija neminovna, i stalna.
Komponentni dizajn nas se doveo ili je imao u planu da nas dovede dotle.