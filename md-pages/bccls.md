**Who:** Just me

**What:** Redesigned desktop, tablet, and mobile versions of my [local library system's website]()

**When:** October 2022

**Where:** Brown University's CSCI 1300 UI/UX course

**Why:**

- Practice responsive and accessible web design skills
- Undergo the full design process of producing wireframes, mockups, a design guide, and the final website
- Apply key usability principles to improve user experience

  

**How:**
Built entirely in vanilla HTML, CSS, and Javascript and deployed on Github pages.

**Can I try it?**
You can see the finished website [here]() and view the source code on [my Github]().

![bccls project thumbnail](/assets/projects/bccls/thumbnail.png)

## What I did

- analyzed the existing page and look for problems
- designed low-fi and high-fi prototypes for the new page
- created the new responsive page in HTML/CSS compatible with 3 device sizes (mobile, tablet, and desktop)

[original website](https://www.bccls.org/)

![original website](/assets/projects/bccls/ogwebsite.png)

I chose this website for my local library account at home because I use it once every couple of months and every time, I find myself having to scan the full page of irregularly laid out irreleveant information to find the important stuff I want to access.

## Existing issues

Analyzed based on usability and accessibility criteria (detected using [WebAIM WAVE](https://wave.webaim.org/))

### Usability issues

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

### Accessibility issues

- page language not specified
- many HTML form elements that do not have attached labels
  - personally, unsure of the severity of this since there's descriptive text next to them
- some images have alternative text but some do not
- "forgot your password?” text is too small in login section
- contrast errors for the white headings on light blue backgrounds

additionally: not identified by WAVE but I was concerned that many buttons were images, though with alt text

## Low-fi mockups

Created and annotated in Balsamiq

## Style guide

Developed in Figma to define the key aesthetic characteristics of the page including, fonts, colors, and styling for the major components.

## High-fi mockups

Created and annotated in Figma

## Final version