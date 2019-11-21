Do sada smo radili sa stateless komponentama, komponentama kojima smo preko propsa prosleđivali  
ono što treba da renderuju.   
Postoji i drugi način a to je da komponenta čuva svoje stanje i brine o njemu i njegovom updatovanju.  
Stanje je slično propsu ali je privatno i pripada isključivo komponenti.


### **Kada komponenta treba da sadrži stanje?**

Onda kada bi njena odgovornost bila da updatuje stanje i da je to stanje nekako prirodno uz nju (pripada njoj).

### **Kada koristiti lifecycle metode?**

Onda kada nam je to potrebno :) Lifecycle metode su bukvalno kukice (hook) 
kojima se prikačimo na neki određeni trenutak u životu komponente i odradimo nešto.  
Npr nekada nam je bitno da komponenta bude deo DOM-a pre nego odradimo nešto, nekad nam je potrebno da očistimo neke resurse  
kada komponenta više nije deo DOM-a itd...  


Odličan primer koji povezuje ova dva koncepta je Sat koji se updatuje svake sekunde.  
Sat bi imao stanje, odnosno sati minute i sekunde. Kada komponenta postane deo DOM-a mi bi krenuli da brojimo, odnosno  
da updatujemo stanje a to možemo odraditi koristeći lifecycle metodu componentDidMount dok stanje možemo očistiti kada se   
komponenta izbacuje iz DOM-a i za to možemo koristiti lifecycle metodu componentDidUnmount.  

1. Stanje komponente je u state propertiju klase. Ono se inicijalizuje sa **this.state** jedino u konstruktoru.
2. Kada updatujemo stanje komponente to radimo isključivo koristeći **setState** metodu kojoj prosleđujemo promenu stanja.
3. Update može da se desi asinhrono i kako bi bili sigurni da smo kako treba promenili stanje to možemo raditi ovako:  

        this.setState((state, props) => ({
            counter: state.counter + props.increment
        }));

Ovde smo prosledili funkciju koja vraća update stanja. To je druga opcija. Kada uradimo setState react odradi MERGE (sjedinjavanje)
trenutnog stanja i delića koji smo poslali.

