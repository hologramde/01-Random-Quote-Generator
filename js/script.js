/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator

By Minh Dang, hologramdesign@gmail.com

I am aiming to get an 'Exceed expectations'
grade but do not mind if I pass with a
lower grade. Thanks :)
******************************************/


/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "Win through your actions, never through argument.",
    source: "Robert Greene",
    citation: "The 48 Laws of Power",
    year: "1998",
    tags: [ "Leadership", "Influence" ]
  },
  {
    quote: "Know who you're dealing with – do not offend the wrong person.",
    source: "Robert Greene",
    citation: "The 48 Laws of Power",
    year: "1998",
    tags: [ "Negotiation", "Leadership", "Management" ]
  },
  {
    quote: "Never appear too perfect. Envy creates silent enemies.",
    source: "Robert Greene",
    citation: "The 48 Laws of Power",
    year: "1998",
    tags: [ "Envy", "Enemies" ]
  },
  {
    quote: "Death is nothing, but to live defeated is to die every day.",
    source: "Napoleon Bonaparte",
    citation: "",
    year: "1769–1821",
    tags: [ "Death", "Defeat" ]
  },
  {
    quote: "Do the difficult things while they are easy and do the great things while they are small.",
    source: "Lao Tzu",
    citation: "",
    year: "4th Century BC",
    tags: [ "Wisdom", "Time management" ]
  },
  {
    quote: "Great acts are made up of small deeds.",
    source: "Lao Tzu",
    citation: "",
    year: "4th Century BC",
    tags: [ "Philanthropy", "Generosity", "Charity", "Compassion" ]
  },
  {
    quote: "What you do not want done to yourself, do not do to others.",
    source: "Confucious",
    citation: "",
    year: "551–479 BC",
    tags: [ "Wisdom", "Compassion", "Empathy" ]
  },
  {
    quote: "Wherever you go, go with all your heart.",
    source: "Confucious",
    citation: "",
    year: "551–479 BC",
    tags: [ "Wisdom", "Compassion", "Purpose" ]
  },
  {
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    source: "Abraham Lincoln",
    citation: "",
    year: "1809–1965",
    tags: [ "Wisdom", "Life", "Purpose" ]
  },
  {
    quote: "Hard work beats talent when talent doesn't work hard.",
    source: "Tim Notke",
    citation: "",
    year: "",
    tags: [ "Work", "Persistence" ]
  },
  {
    quote: "Work hard, be kind, and amazing things will happen.",
    source: "Conan O'Brien",
    citation: "",
    year: "",
    tags: [ "Work", "Persistence" ]
  }
];

/***
 * `getRandomQuote` function
 * Generate a random number and use that to return an object from the `quotes` array.
***/

let quote = "";
let source = "";
let citation = "";
let year = "";
let tags = "";


function getRandomQuote() {

    let i = Math.floor( Math.random() * quotes.length );

    quote = quotes[i].quote;
    source = quotes[i].source;
    citation = quotes[i].citation;
    year = quotes[i].year;
    tags = quotes[i].tags.join(", ");

}

/***
 * Function to change background to a random RGB color
***/

function changeBackgroundColor() {

    let red =  Math.floor( Math.random() * 255 );
    let green =  Math.floor( Math.random() * 255 );
    let blue =  Math.floor( Math.random() * 255 );

    let color = `rgb( ${red}, ${green}, ${blue} )`;

    document.querySelector("body").style.backgroundColor = color;

}

/***
 * `printQuote` function
 * Run the `changeBackgroundColor` function
 * Run the `getRandomQuote` function and display the quote on the page
***/

function printQuote() {

    changeBackgroundColor();

    getRandomQuote();

    // Create the string      
    let html = `<p class="quote">${quote}</p>
    <p class="source">${source}`;

    // If `citation` is present, add it to the string
    if ( citation !== "" ) {
      html += `<span class="citation">${citation}</span>`;
    } 

    // If `year` is present, add it to the string
    if ( year !== "" ) {
      html += `<span class="year">${year}</span>`;
    }

    // If `tag` is present, add to the string
    if ( tags !== "" ) {
      html += `<p>Tags: ${tags}</p>`;

    }

    html += `</p>`;

    // Insert string to the page
    document.getElementById("quote-box").innerHTML = html;

}

/***
 *  Run the `printQuote` function when the page is loaded then run it every 12 seconds
***/

printQuote();

setInterval( printQuote, 12000 );


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);