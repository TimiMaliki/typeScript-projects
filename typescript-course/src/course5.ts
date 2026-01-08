// Type InterFaces in TypeScript

// interface Book {
//   readonly isbn: number;
//   title: string;
//   author: string;
//   genre?: string;
//   printAuthor(): void;
// }

// const deepWork: Book = {
//   isbn: 9781455586691,
//   title: 'Deep Work',
//   author: 'Cal Newport',
//   genre: 'Self-help',
//     printAuthor() {
//         console.log(this.title, this.genre)
//     }
// };
// deepWork.printAuthor()
// deepWork.title = 'New Title'; // allowed
// deepWork.isbn = 654321; // not allowed

// Method

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork: Book = {
  isbn: 9781455586691,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
};
deepWork.printAuthor();
const result = deepWork.printTitle('is an awesome book');
console.log(result);


