/*Zad4
Zapoznaj się z informacjami o dziedziczeniu prototypowym w Javascript.

a) Jak się to ma do działania obiektów i “klas” w Javascript? Dlaczego mówimy, że w Javascript klasy są tzw. “syntax sugar”? Opisz mechanizm własnymi słowami.
b) Rozbuduj obiekty typu String dodając im metodę mirror(), która po odpaleniu dla tekstu zwróci jego odbicie:

"Ala ma kota".mirror() === "atok am alA"*/

/*Zad 4a
Klasy w JavaScript są tzw. „syntax sugar”, ponieważ nie wprowadzają żadnej nowej funkcjonalności, 
a stanowią jedynie uproszczony i bardziej czytelny zapis już istniejącego prototypowego dziedziczenia. 
W JavaScript klasy są tak naprawdę szablonami do tworzenia obiektów. Co do dziedziczenia prototypowego, 
każdy obiekt ma swój prototyp, który sam w sobie jest obiektem i również może mieć własny prototyp. 
W ten sposób tworzy się łańcuch prototypów, który ostatecznie kończy się na Object.prototype, z którego dziedziczy 
każdy inny obiekt. Jeśli dana metoda lub wartość/pole nie istnieje w naszym obiekcie, można jej szukać na prototypach, 
z których dziedziczy nasz obiekt.*/

//Zad 4b
String.prototype.mirror = function () {
  return this.split('').reverse().join('');
};

let str = "Ala ma kota";

console.log(str.mirror());

/*Zad5
Zapoznaj się z informacjami o tzw. domknięciach (ang. clousures) w JavaScript.

a) Opisz mechanizm własnymi słowami.
b) Stwórz funkcję createCounter, która zwraca funkcję inkrementującą licznik. Funkcja zwrócona przez createCounter powinna:
Zwiększać wartość licznika o 1 przy każdym wywołaniu,
Zwracać bieżącą wartość licznika po każdej inkrementacji.
Dodatkowo funkcja createCounter powinna działać tak, że za każdym razem, gdy wywołujesz createCounter, tworzysz nowy licznik, który ma swoją własną odrębną wartość, niezależną od innych liczników.
Użyj w tym celu mechanizmu domknięć.*/

/*Zad5a
Closure w JavaScript odnosi się do funkcji, którą zawieramy i zwracamy w innej funkcji; funkcja ta ma dostęp do zmiennych 
z funkcji zewnętrznej. W ten sposób zmienne z zewnętrznej funkcji stają się prywatne i nie ma do nich bezpośredniego 
dostępu. Można je jedynie wyświetlać/modyfikować za pomocą wywołania funkcji wewnętrznej. Ponadto, po zakończeniu 
wykonywania funkcji zewnętrznej, nadal mamy dostęp do jej zmiennych, jeśli funkcja wewnętrzna się do nich odnosi.*/


//Zad5b
function createCounter() {
  let count = 0;
  function returnCounter() {
    count += 1;
    return count;
  }
  return returnCounter;
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3

const counter2 = createCounter();
console.log(counter2()); // 1
console.log(counter2()); // 2
