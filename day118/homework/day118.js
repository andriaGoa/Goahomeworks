class LibraryItem {
    constructor(title, year) {
      this.title = title;
      this.year = year;
      this.isAvailable = true;
    }
    borrowItem() {
      if (this.isAvailable) {
        this.isAvailable = false;
        console.log(`${this.title} has been borrowed.`);
      } else {
        console.log(`${this.title} is currently not available.`);
      }
    }
    returnItem() {
      if (!this.isAvailable) {
        this.isAvailable = true;
        console.log(`${this.title} has been returned.`);
      } else {
        console.log(`${this.title} was not borrowed.`);
      }
    }
    getAvailability() {
      return this.isAvailable ? "Available" : "Not Available";
    }
  }
  class Book extends LibraryItem {
    constructor(title, year, author, genre) {
      super(title, year);
      this.author = author;
      this.genre = genre;
    }
    getSummary() {
      return `${this.title} by ${this.author}, Genre: ${this.genre}, Published in ${this.year}.`;
    }
  }
  class Magazine extends LibraryItem {
    constructor(title, year, issueNumber) {
      super(title, year);
      this.issueNumber = issueNumber;
    }
  
    getSummary() {
      return `${this.title}, Issue #${this.issueNumber}, Published in ${this.year}.`;
    }
  }
  const book1 = new Book('The Great Gatsby', 1925, 'F. Scott Fitzgerald', 'Fiction');
  const magazine1 = new Magazine('National Geographic', 2024, 100);
  console.log(book1.getSummary());
  console.log(magazine1.getSummary());
  console.log(`${book1.title} is ${book1.getAvailability()}.`);
  book1.borrowItem();
  console.log(`${book1.titl