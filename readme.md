npm install
npm start

server host:

http://localhost:3001/author
authors=[
{
"author_id": 1,
"first_name": "Basarat",
"last_name": "Ali"
},
{
"author_id": 2,
"first_name": "Mike",
"last_name": "Cantelon"
},
{
"author_id": 3,
"first_name": "Marc",
"last_name": "Harter"
}
]

http://localhost:3001/books

books=[
{
"isbn": 1,
"book_title": "Beginning Node.js",
"publish_date": "2018-04-23"
},
{
"isbn": 2,
"book_title": "Node.js in Action",
"publish_date": "2019-05-12"
}
]

booksauthors=[
{
"isbn": 1,
"author_id": 1
},
{
"isbn": 2,
"author_id": 2
},
{
"isbn": 2,
"author_id": 3
}
]
