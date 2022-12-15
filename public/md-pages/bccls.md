**Who:** Just me

**What:** Redesigned desktop, tablet, and mobile versions of my [local library system's website](https://www.bccls.org/)

**When:** October 2022

**Where:** Brown University's CSCI 1300 UI/UX course

**Why:**

- Practice responsive and accessible web design skills
- Undergo the full design process of producing wireframes, mockups, a design guide, and the final website
- Apply key usability principles to improve user experience

**How:**
Built entirely in vanilla HTML, CSS, and Javascript and deployed on Github pages.

**Can I try it?**
You can see the finished website [here](https://sleepysloth218.github.io/bccls/) and view the source code on [my Github](https://github.com/sleepysloth218/responsive-redesign/).

![bccls project thumbnail](/assets/projects/bccls/thumbnail.png)

## What I Did

- analyzed the existing page and looked for problems
- designed low-fi and high-fi prototypes for the new page
- created the new responsive page in HTML/CSS compatible with 3 device sizes (mobile, tablet, and desktop)

[original website](https://www.bccls.org/)

![original website](/assets/projects/bccls/ogwebsite.png)

I chose this website for my local library account at home because I use it once every couple of months and every time, I find myself having to scan the full page of irregularly laid out irreleveant information to find the important stuff I want to access.

## Existing Issues

Analyzed based on usability and accessibility criteria (detected using [WebAIM WAVE](https://wave.webaim.org/))

### Usability Issues

- layout is **cluttered and distracting**
  - no specific section draws eyes
  - no clear reading order or hierarchy
  - most relevant sections to user such as "search", "login", and "find a library", are lost among other less important information like pet pictures
- **inconsistent text styling**, especially among links makes unintuitive distinctions between functionally equivalent text
- slideshow in center highlights current events and services which are repeated in other sections
- **page is fixed width**, with no responsiveness for screen size
- **mobile site is just a completely different webpage** with different styles for many components
  - most information from desktop site is hidden
    - **pros: distills down clutter** and highlights essential functionality unlike desktop site
    - **cons: poor memorability**, disorienting when switching devices especially for users used to one or other

### Accessibility Issues

- page language not specified
- many HTML form elements that do not have attached labels
  - personally, unsure of the severity of this since there's descriptive text next to them
- some images have alternative text but some do not
- "forgot your password?” text is too small in login section
- contrast errors for the white headings on light blue backgrounds

additionally: not identified by WAVE but I was concerned that many buttons were images, though with alt text

## Low-fi Mockups

Created and annotated in Balsamiq

<object data="/assets/projects/bccls/desktop.pdf" type="application/pdf" width="100%" height="500px"></object>

<object data="/assets/projects/bccls/tablet.pdf" type="application/pdf" width="100%" height="500px" /></object>

<object data="/assets/projects/bccls/mobile.pdf" type="application/pdf" width="100%" height="500px" /></object>

## Style Guide

Developed in Figma to define the key aesthetic characteristics of the page including, fonts, colors, and styling for the major components.

<iframe style="border: 1px solid #000;" width="100%" height="500"
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FGeykdbntRv53s0MyL7NCe2%2FBCCLS-Design-Guide%3Fscaling%3Dmin-zoom%26page-id%3D0%253A1%26node-id%3D1%253A2"
                        allowfullscreen></iframe>

## High-fi Mockups

Created and annotated in Figma. Click through the pages to view the annotations and the different screen sizes.

<iframe style="border: 1px solid #000;" width="100%" height="500"
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Foxi4ivFQZo31755RvYM5Ju%2FBCCLS-High-Fi-Mockups%3Fnode-id%3D1%253A899%26scaling%3Dscale-down-width%26page-id%3D0%253A1"
                        allowfullscreen></iframe>

## Final Version

Following the Figma mockup I built out the page using pure vanilla HTML/CSS.

Due to the time constraints some interactive elements were not fully developed, but I would like to go back in the future and flesh out the webpage:
- image slideshow is static
- book browsing carousels are also static
- navigation bar menu
  - on desktop dropdowns should display on hover
  - hamburger menu should open on mobile

You can view the finished version [here](https://sleepysloth218.github.io/bccls/)