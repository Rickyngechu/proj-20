# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![](./images/Screenshot%202024-04-18%20035057.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Rickyngechu/proj-20)
- Live Site URL: [Add live site URL here](https://frontendmentour-20.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```
CSS

 a{
  overflow:overflow-clip.
 }
```

I have learnt about interacting with the clipboard API for copying html content and also event delegation.

```js
let itemsArray = [];
itemsArray.push("your items");
localStorage.setItem("item", itemsArray);

const proudOfThisFunc = async () => {
  try {
    let text = textToBeCopied.innerHTML;
    await navigator.clipBoard.WriteText(text);
  } catch (err) {
    console.err(err);
  }
};
```

### Continued development

Later on I may implement the darkmode and light mode functionality and even add a button where you can clear up your local storage.

### Useful resources

- [How to use the clipBoardAPI](https://www.freecodecamp.org/news/copy-text-to-clipboard-javascript/) - This gave me the starts up with how to use the clipboard API.

## Author

- Website - [Erick Ngechu](https://rickyportf.netlify.app/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/Rickyngechu)

## Acknowledgments

I do acknowledge the developers of tailwind css for their awsome job in providing with faster tools for developing websites.Secondly I would like to thank most of the bloggers.
