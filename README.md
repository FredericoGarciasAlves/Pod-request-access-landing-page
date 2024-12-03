# Frontend Mentor - Pod Request Access Landing Page Solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
-   [Author](#author)

## Overview

A beginner-level project, but nothing particularly new for me. I encountered some difficulty deciding how to layer and apply filters to the images. The JavaScript part was already familiar to me, but I found the method I used interesting, especially for scenarios like adding a product to a cart in an online store. For this kind of project, it felt a bit verbose. Instead, I could have written the paragraphs in HTML, set them to `display: none` inline, and toggled their visibility with JavaScript. In my view, this approach keeps everything in its place. I'm unsure if this has a significant impact on processing, but with modern processors, any difference would likely be negligible—a grain of sand in the desert, in my opinion.

### The challenge

Users should be able to:

-   View the optimal layout depending on their device's screen size
-   See hover states for interactive elements
-   Receive an error message when the form is submitted if:
    -   The `Email address` field is empty should show "Oops! Please add your email"
    -   The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![](./assets/image/picture-pod.png)
![](./assets/image/picture-pod-js.png)
![](./assets/image/picture-pod-mobile.png)
![](./assets/image/picture-pod-mobile-js.png)

## My process

I started with HTML, analyzed it, and took some time to determine the hierarchy of the elements. This model included overlapping layouts, which made me think about which box should have a `position: relative`. This was the challenging part. I created a large container to hold all the elements. Then I moved on to CSS, starting with the desktop version, followed by the responsive design. Finally, I worked on animations with JavaScript.

### Built with

-   Semantic HTML5 markup
-   position
-   MatchMedia()
-   indexOf() or includes()
-   setAtributte()

### What I learned

I learned how to remove the default placeholder text from the email input field when the "@" is missing and how to check if the "@" symbol is present in the input value using `indexOf`. I could have also used `includes()`.

```js
form.setAttribute("novalidate", true);
```

```JS
if (!emailValue || emailValue.indexOf("@") === -1)
```

### Continued development

My intentions are to continue learning CSS, JavaScript, and their APIs.

## Author

-   instragam - [@fred_alves23](https://www.instagram.com/fred_alves23/)
-   Frontend Mentor - [@FredericoGarciasAlves](https://www.frontendmentor.io/profile/FredericoGarciasAlves)
-   Twitter - [@FredericoGA70](https://x.com/FredericoGA70)
-   Threads - [@fred_alves](https://www.threads.net/@fred_alves23)
