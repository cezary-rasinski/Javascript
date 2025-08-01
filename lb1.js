//LAB 1
//zad9:
/*Cyfry rzymskie są reprezentowane przez siedem różnych symboli: 
I, V, X, L, C, D i M. Podając liczbę rzymską, przekonwertuj ją na liczbę całkowitą.

Przykład 1:
Input: s = "III"
Output: 3

Przykład 2:
Input: s = "LVIII"
Output: 58

Przykład 3:
Input: s = "MCMXCIV"
Output: 1994
Założenia:

1 <= s.length <= 15
s zawiera wyłącznie znaki ('I', 'V', 'X', 'L', 'C', 'D', 'M').
Zakładamy że s jest poprawną liczbą rzymską z zakresu [1, 3999].*/

function decodeRoman(txt) {
  const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  
  let rev = txt.split('').reverse().join('');
  let sum = 0;
  let prev = 0;
  
  for (let ch of rev){
    let value = romanMap[ch];
    
    if (value < prev){
      sum -= value;
    } else {
      sum += value;
    }
    
    prev = value;
  }     
  return sum;
}
let roman = "MMMDCCCLXXVI"
console.log(decodeRoman(roman));

//zad10:
/*Jako poszukiwacz przygód, doszedłeś do tajemniczej komnaty, na ścianie której znajduje się tajemniczy zapis.
W starych notatkach znajdujesz tylko krótki ciąg, który ponoć wskazuje kierunek poruszania się po powyższym zapisie.


const str = "rrrdddllddrrruuuurrddrruurddddlld";

Twoim zadaniem jest zdekodować ukrytą informację. Dekodowanie rozpoczynasz w lewym górnym rogu, a następnie powinieneś się poruszać zgodnie z literami, gdzie r oznacza prawo, d dół, l lewo, a u górę.
Po pobraniu kodów z odpowiednich miejsc zamień je na litery za pomocą String.fromCharCode(x).
Wynikiem powinien być wypisane w konsoli hasło.*/
function decode(arr, dir) {
  
	let result = "";
  	let Ipos = 0;
  	let Jpos = 0;
  	
  	const Imap = {
      'd' : 1,
      'u' : -1
    };
  	const Jmap = {
      'r' : 1,
      'l' : -1
    };
  
  	let c = String.fromCharCode(arr[Ipos][Jpos]);
    result += c;
  
  	for (let ch of dir){
      if (ch === 'r' || ch === 'l'){
        Jpos += Jmap[ch];
        let c = String.fromCharCode(arr[Ipos][Jpos]);
        result += c;
      } else {
        Ipos += Imap[ch];
        let c = String.fromCharCode(arr[Ipos][Jpos]);
        result += c;
      }
    }
  	return result;
}

const arr = [
  [66, 97, 114, 100, 4, 2, 110, 11, 1, 6, 20],
  [99, 3, 10, 122, 76, 101, 111, 3, 32, 100, 0],
  [6, 22, 1, 111, 32, 10, 110, 7, 97, 97, 67],
  [60, 97, 116, 32, 100, 23, 97, 114, 100, 32, 34],
  [2, 106, 15, 6, 111, 56, 80, 20, 10, 86, 10],
  [20, 110, 121, 32, 107, 55, 50, 99, 110, 105, 8],
  [12, 9, 22, 102, 66, 100, 12, 105, 50, 76, 110],
  [42, 81, 123, 92, 26, 98, 20, 1, 20, 11, 10]
];
const str = "rrrdddllddrrruuuurrddrruurddddlld";
let s = decode(arr, str);
console.log(s);

/*zad11:
Biorąc pod uwagę ciąg znaków s składającego się ze słów i spacji, napisz funkcję która zwraca długość ostatniego słowa w ciągu.
Słowo jest maksymalnym podciągiem składającym się wyłącznie ze znaków innych niż spacje.

Przykład 1:
Input: s = "Hello World"
Output: 5

Przykład 2:
Input: s = "   fly me   to   the moon  "
Output: 4

Założenia

1 <= s.length <= 104
s zawiera tylko znaki angielskiego alfabetu i spacje ' '.
W s znajduje się co najmniej jedno słowo.*/

function lastWordLength(string){
  string = string.trim().split(' ').reverse();
  return string[0].length;
}

let s2 = "   fly me   to   the moon  "
let len = lastWordLength(s2)
console.log(len);


/*zad12:
Wspinasz się po schodach. Dotarcie na szczyt zajmuje n kroków. Za każdym razem można pokonać 1 lub 2 stopnie. 
Na ile różnych sposobów można wspiąć się na szczyt?

Przykład 1:
Input: n = 2
Output: 2

Przykład 2:
Input: n = 3
Output: 3

Założenia:
1 <= n <= 45*/

function steps(n) {
	if (n == 1){return 1;}
  	if (n == 2){return 2;}
  
  	let oneBefore = 2;
  	let twoBefore = 1;
  	let allWays = 0;
  	for (let i = 3; i <= n; i++){
      allWays = (oneBefore + twoBefore);
      twoBefore = oneBefore;
      oneBefore = allWays;
    }
  	return allWays;
}
console.log(steps(6));