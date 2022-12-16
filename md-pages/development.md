<header>

**Who:** Just me

**What:** Web app to sort and filter through Billboard Top 100 data and add songs to a playlist

**When:** November 2022

**Where:** Brown University's CSCI 1300 UI/UX course

**Why:**

- Practice using functional components in React
- Use modular design to create an interface which can adapt to different datasets
  

**How:**
Built in React and deployed on Github pages

**Can I try it?**
You can view the final website [here]().

**Future goals:**
Pull data from an API, improve responsiveness, improve artist filters

</header>

![development project thumbnail](/assets/projects/development/thumbnail.png)

This project was completed alone for my User Interfaces and User Experience class. It was built entirely in React from scratch without using any external component libraries or stylesheets. It was a fun exercise in practicing working with React, especially with functional components which is different from the class components which I am used to working with most of the time.

Features:
- Responsive grid of cards displaying each song with different chart data
- "Playlist" component that allows you to add and remove songs and view the playlist length
- Ability to sort and filter by different chart status data
  - Artist filters are created procedurally based on the artists found in the provided data

As of now the website uses a static JSON file to source the song data, but in the future I would like to extend this project to fetch the data from an API and render the most up to date charts. I would also like to improve the responsiveness of the page and fix the artist filters to recognize songs with multiple artists.