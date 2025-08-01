//Object example
const text = {
  contents: 'ala ma kota',
  check(word) {
    if (this.contents.split(' ').includes(word)) {
      return true;
    } else {
      return false;
    }
  },
  getCount(txt) {
    return txt.split(' ').length;
  },
  setCapitalize(txt) {
    return txt
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  },
  setMix(txt) {
    return txt
      .split('')
      .map((char, index) => {
        if (index % 2 === 0) {
          return char.toLowerCase();
        } else {
          return char.toUpperCase();
        }
      })
      .join('');
  },
  generateRandom(len) {
    let out = '';
    for (let i = 0; i < len; i++) {
      let c = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      out += c;
    }
    return out;
  }
};

console.log(text.check('ma'));
console.log(text.getCount('ala ma kota'));
console.log(text.setCapitalize('ala ma kota'));
console.log(text.setMix('ala ma kota'));
console.log(text.generateRandom(5));

//class example
class Book {
  constructor() {
    this.users = [];
  }
  addUser(name, age, phone) {
    this.users.push({
      name,
      age,
      phone
    });
  }
  showUsers() {
    for (let user of this.users) {
      console.log(user);
    }
  }
  findByName(name) {
    let u = consthis.users.find((user) => user.name === name);
    console.log(u);
  }
  findByPhone(phone) {
    let p = this.users.find((user) => user.phone === phone);
    console.log(p);
  }
  getCount() {
    console.log(this.users.len());
  }
}

const book = new Book();

book.addUser('adam', 19, '123');
book.addUser('anna', 29, '124');

book.showUsers();
book.findByPhone("124");


