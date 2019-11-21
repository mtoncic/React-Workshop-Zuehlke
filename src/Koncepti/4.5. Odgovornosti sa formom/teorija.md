Sada kada trebamo implementirati dodavanje novih todo stavki trebamo razmisliti o odgovornostima.  
  
Dodavanje ćemo uključiti kroz formu.  
Čija je to odgovornost?  
TodoItem-a ?  
TodoList-e ?  
???  


Zapravo to nije odgovornost ni jedne ni druge komponente koju imamo. Moramo kreirati neki wrapper koji  
će objediniti TodoListu i formu za dodavanje novih todo stavki. Forma može pripadati njoj a može i biti posebna komponenta.  
Neka bude deo komponente za sada. Kada updatujemo polja forme to će se oslikati u stanju wrapper komponente.  

Sada imamo i problem sa prosleđivanjem nove todo stavke... Kada popunimo formu i idemo dodaj mi bi morali da kreiramo novu  
todo stavku i prosledimo je todoListi.   
Jednostavniji način je da pomerimo listu jedan nivo iznad u našu wrapper komponentu i da wrapper komponenta updatuje (dodaje nove stavke u listu)  
i prosleđuje TodoList komponenti koja će odraditi klasifikaciju na done i active.   