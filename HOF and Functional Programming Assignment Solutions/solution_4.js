const books = [
    { name:  'Mathematics', author: 'Archimedes', publicationYear: 2010},

    { name:  'Chemistry', author: 'Antoine Lavoisier', publicationYear: 2009},

    { name:  'Biology', author: 'Aristotle', publicationYear: 2008},

    { name:  'Physics', author: 'Issac Newton', publicationYear: 2011},

    { name:  'English', author: 'Geoffrey Chaucer', publicationYear: 2005},

    { name:  'Philosophy', author: 'Socrates', publicationYear: 2007},

    { name:  'Computer Sc', author: 'Alan Turing', publicationYear: 2012},
]

const filteredBooks = books.filter((book)=>{

    const bookAfter2010 = Object.assign(book,{author: book.author.toUpperCase()});

    return bookAfter2010.publicationYear >= 2010;
})
console.log(filteredBooks);
