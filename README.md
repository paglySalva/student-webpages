# student-webpages
Test repository for allowing students to deploy their webpages

- This repository contains a folder for each of you, identified by your student number (e.g., student-01).
- Open the "example" folder, where you will find three files: `index.html`, `styles.css`, and `scripts.js`, representing the HTML, CSS, and JavaScript files, respectively. 
- These files contain the code for the example web page (the online shop for trainers).
- Do you want to implement your own online shop? Copy the code from these files and paste it into the CodePen environment. Ensure the HTML code (`index.html`) goes in the left panel, the CSS code (`styles.css`) in the middle panel, and the JavaScript code (`scripts.js`) in the right panel of the CodePen editor.
- Make some changes and develop your own idea. If you feel adventurous, there are tips (cheat sheets) for HTML, CSS, and JavaScript below that will help you be more creative. Do not hesitate to reach out to any UWS staff member if you have questions.
- Once you have created your web page, contact any staff member. We will copy your files onto a USB stick and upload them to the repository, making your web page accessible from anywhere in the world!


You can access the example project [here](https://paglysalva.github.io/student-webpages/example/).




## Cheat Sheets you can use
 - [HTML Cheat Sheet](#html-cheat-sheet)
 - [CSS Cheat Sheet](#css-cheat-sheet)
 - [JavaScript Cheat Sheet](#javascript-cheat-sheet)


# HTML Cheat Sheet
A reminder of HTML elements.

## Minimal page
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Title</title>
    </head>
    <body>
        <!-- content here -->
    </body>
</html>
```

## Head
```html
<head>
    <title>Title</title>
    <base href="base-url" />
    <link href="style.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
        /* CSS code */
    </style>
    <script src="script.js"></script>
    <script>
        // Javascript code
    </script>
    <meta charset="UTF-8">
    <meta name="keywords" content="keywords">
    <meta name="description" content="description">
    <meta name="author" content="name">
    <meta http-equiv="refresh" content="10">
</head>
```

tag | element
--- | ---
**title** | page title
**base** | base url for all links
**link** | link to external source
**style** | CSS inside HTML page
**script** | Javascript code
**meta** | metadata
**meta** *http-equiv*="refresh" *content*="10" | auto-refresh page in 10s


## Text content

### Headings
```html
<h1>Main heading</h1>
<!-- etc -->
<h6>Level-6 heading</h6>
```

tag | element
--- | ---
**h1** | main heading
**h6** | least important heading

### Paragraphs
```html
<p>Paragraph.<br/>
Other line.</p>
<p>Other paragraph.</p>
<hr/>
<p>See the line above.</p>
```

tag | element
--- | ---
**p** | paragraph
**br** | line break
**hr** | horizontal line

### Formatting
```html
<em>Formatting</em> is <strong>important</strong> !
(a+b)<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> + 2ab
```

tag | element
--- | ---
**sub** | subscript
**sup** | superscript
**em** | emphasize
**strong** | important
**mark** | highlighted
**small** | small
**i** | italic
**b** | bold

### Quotes
```html
<cite>This book</cite> was written by this author.
<q cite="url">quotation</q>
<blockquote cite="url">
Lorem ipsum<br/>
Lorem ipsum
</blockquote>
```

tag | element
--- | ---
**cite** | title of a work
**q** | inline quotation
**blockquote** | quotation


## Content

### Links
```html
<a href="url">link</a>
<a href="url" target=_blank>open in a new window</a>

<a href="#comments">watch comments</a>
<h2 id="comments">comments</h2>
```

tag | element
--- | ---
**a** | hyperlink

### Images
```html
<img src="image.png" alt="description" width="300" height="200" />
```

tag | element
--- | ---
**img** | image

### Blocks
```html
<div>block</div>
<span>inline</span>
```

tag | element
--- | ---
**div** | block-level element
**span** | inline element


## Lists

### Unordered list
```html
<ul>
    <li>item</li>
    <li>item</li>
    <li>item</li>
</ul>
```

tag | element
--- | ---
**ul** | unordered list
**li** | list item

### Ordored list
```html
<ol>
    <li>first</li>
    <li>second</li>
    <li>third</li>
</ol>
```

tag | element
--- | ---
**ol** | ordered list
**li** | list item

### Definition list
```html
<dl>
    <dt>term</dt><dd>definition</dd>
    <dt>term</dt><dd>definition</dd>
    <dt>term</dt><dd>definition</dd>
</dl>
```

tag | element
--- | ---
**dl** | definition list
**dt** | term
**dd** | definition


## Tables

### Basic table
```html
<table>
<tr>
    <th>heading 1</th>
    <th>heading 2</th>
</tr>
<tr>
    <td>line 1, column 1</td>
    <td>line 1, column 2</td>
</tr>
<tr>
    <td>line 2, column 1</td>
    <td>line 2, column 2</td>
</tr>
</table>
```

tag | element
--- | ---
**table** | table
**tr** | table row
**th** | table heading
**td** | table cell

### Advanced table
```html
<table>
<caption>caption</caption>
<colgroup>
    <col span="2" style="..." />
    <col style="..." />
</colgroup>
<thead>
    <tr>
        <th>heading 1</th>
        <th>heading 2</th>
        <th>heading 3</th>
    </tr>
</thead>
<tfoot>
    <tr>
        <th>footer 1</th>
        <th>footer 2</th>
        <th>footer 3</th>
    </tr>
</tfoot>
<tbody>
    <tr>
        <td>line 1, column 1</td>
        <td>line 1, column 2</td>
        <td>line 1, column 3</td>
    </tr>
    <tr>
        <td>line 2, column 1</td>
        <td>line 2, column 2</td>
        <td>line 2, column 3</td>
    </tr>
</tbody>
</table>
```

tag | element
--- | ---
**caption** | caption
**colgroup** | defines groups of columns
**col** | defines column's properties
**thead** | groups headings together
**tfoot** | groups footers together
**tbody** | groups other rows


## Forms
```html
<form action="url" method="post">
    <fieldset>
        <legend>Who are you ?</legend>
        <label>Login :<input type="text" name="login" /></label><br/>
        <label for="pswd">Password :</label><input type="password" name="password" id="pswd" /><br/>
        <input type="radio" name="sex" value="male" />Male<br/>
        <input type="radio" name="sex" value="female" />Female<br/>
    </fieldset>
    
    <label>Your favorite color : <select name="color">
        <option>red</option>
        <option>green</option>
        <option>blue</option>
    </select></label>
    
    <input type="checkbox" name="available" value="monday" />Monday<br/>
    <input type="checkbox" name="available" value="tuesday" />Tuesday<br/>
    
    <textarea name="comments" rows="10" cols="30" placeholder="Write your comments here"><textarea/>
    
    <input type="submit" value="Button text">
</form>
```

tag | element
--- | ---
**form** | form
**label** | label for input
**fieldset** | group inputs together
**legend** | legend for fieldset
**input** type="*text*" | text input
**input** type="*password*" | password input
**input** type="*radio*" | radio button
**input** type="*checkbox*" | checkbox
**input** type="*submit*" | send form
**select** | drop-down list
**option** | drop-down list item
**optgroup** | group of drop-down list items
**datalist** | autocompletion list
**textarea** | large text input


## HTML5 Semantic

### Page layout
```html
<header>My website</header>
<nav>
    <a href="page1">Page 1</a>
    <a href="page2">Page 2</a>
    <a href="page3">Page 3</a>
</nav>

<section>
    Hello everybody, Welcome to my website !
</section>

<article>
    <header>
        <h2>Title</h2>
    </header>
    <p>
        My article
    </p>
</article>

<aside>
    Writen by me
</aside>

<section id="comments">
    <article>Comment 1</article>
    <article>Comment 2</article>
</section>

<footer>
Copyright notice
</footer>
```

tag | element
--- | ---
**header** | header of document or section
**footer** | footer of document or section
**section** | section
**article** | article, forum post, blog post, comment
**aside** | aside content related to surrounding content
**nav** | navigation links

### New elements
```html
<figure>
    <img src="image.png" alt="figure 1" />
    <figcaption>Figure 1</figcaption>
</figure>

<details>
    <summary>Declaration of M. X on <time datetime="2013-12-25">Christmas day</time></summary>
    <p>M. X said...</p>
</details>

Downloading progress : <progress value="53" max="100"></progress>
Disk space : <meter value="62" min="10" max="350"></meter>
```

tag | element
--- | ---
**figure** | an illustration
**figcaption** | caption of a figure element
**details** | details that can be shown or hidden
**summary** | visible heading of a details element
**progress** | progress of a task
**meter** | display a gauge
**time** | machine-readable time indication


# CSS Cheat Sheet
A quick reference guide for CSS properties and selectors.

## Basic Sintax
```css
selector {
    property: value;
}
```
## Selectors
### Element Selector
#### Paragraph
Selects all `<p>` elements and sets their text color to blue.
```css
p {
    color: blue;
}
```
#### Headings
```css
h1 {
    font-size: 2em;
    color: darkblue;
}
h2 {
    font-size: 1.5em;
    color: darkgreen;
}
h3 {
    font-size: 1.2em;
    color: darkred;
}
```
#### Divisions
```css
div {
    margin: 20px;
    padding: 10px;
    background-color: #f0f0f0;
}
```
### Class Selectors
Example: Selects all elements with the class “classname” and sets the font size to 16px.
```css
.classname {
    font-size: 16px;
}
```
### ID Selectors
Example: Selects the element with the ID “idname” and sets the margin to 20px.
```css
#idname {
    margin: 20px;
}
```
## Common Properties
### Text
```css
color: blue; /* Sets the text color */
font-family: Arial, sans-serif; /* Sets the font family */
font-size: 16px; /* Sets the font size */
font-weight: bold; /* Sets the font weight */
text-align: center; /* Aligns text to the center */
text-decoration: underline; /* Underlines text */
text-transform: uppercase; /* Transforms text to uppercase */
line-height: 1.5; /* Sets the line height */
```
### Background
```css
background-color: #f0f0f0; /* Sets the background color */
background-image: url('image.jpg'); /* Sets a background image */
background-repeat: no-repeat; /* Prevents the background image from repeating */
background-size: cover; /* Scales the background image to cover the element */
```
### Box Model
```css
margin: 20px; /* Sets the margin */
padding: 10px; /* Sets the padding */
border: 1px solid #ccc; /* Sets the border */
width: 100px; /* Sets the width */
height: 100px; /* Sets the height */
box-sizing: border-box; /* Includes padding and border in the element's total width and height */
```
### Display and Positioning
```css
display: block; /* Sets the display to block */
display: inline; /* Sets the display to inline */
display: inline-block; /* Sets the display to inline-block */
position: relative; /* Sets the position to relative */
position: absolute; /* Sets the position to absolute */
position: fixed; /* Sets the position to fixed */
top: 10px; /* Sets the top position */
left: 10px; /* Sets the left position */
right: 10px; /* Sets the right position */
bottom: 10px; /* Sets the bottom position */
z-index: 10; /* Sets the stack order */
```
### Flexbox
```css
display: flex; /* Enables flexbox layout */
flex-direction: row; /* Sets the direction of the flex items */
justify-content: center; /* Aligns flex items along the main axis */
align-items: center; /* Aligns flex items along the cross axis */
flex-wrap: wrap; /* Allows flex items to wrap */
```
### Grid
```css
display: grid; /* Enables grid layout */
grid-template-columns: repeat(3, 1fr); /* Defines the columns of the grid */
grid-template-rows: auto; /* Defines the rows of the grid */
gap: 10px; /* Sets the gap between grid items */
```
### Pseudo-classes and Pseudo-elements
```css
a:hover {
    color: red; /* Changes the color of links on hover */
}
a:visited {
    color: purple; /* Changes the color of visited links */
}
p::before {
    content: "Note: "; /* Adds content before the paragraph */
    color: red; /* Sets the color of the added content */
}
```


## Responsive Design

```css
@media (max-width: 600px) {
    body {
        background-color: lightblue; /* Changes the background color on small screens */
    }
}
```


# JavaScript Cheat Sheet
A quick reference guide for JavaScript actions focused on user interactions.

## Variables
```javascript
let name = "John"; // Can be reassigned
const age = 30;   // Cannot be reassigned
```


## Functions
```javascript
function greet() {
    console.log("Hello, World!");
}

greet(); // Calls the function
```

## Event Listeners
### Click Event
Adds a click event listener to a button with the ID “myButton” that displays an alert when clicked.
```javascript
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});
```

### Mouseover Event
Changes the background color of an element to yellow when the mouse is over it.
```javascript
document.getElementById("myElement").addEventListener("mouseover", function() {
    this.style.backgroundColor = "yellow";
});
```

### Input Event
Updates the text content of an element with the ID “output” with the value of an input field as the user types.
```javascript
document.getElementById("myInput").addEventListener("input", function() {
    document.getElementById("output").textContent = this.value;
});
```

## DOM Manipulation
### Changing Content
Changes the text content of an element.
```javascript
document.getElementById("myElement").textContent = "New Content";
```


### Adding and Removing Classes
Adds or removes a class from an element.
```javascript
document.getElementById("myElement").classList.add("myClass");
document.getElementById("myElement").classList.remove("myClass");

```