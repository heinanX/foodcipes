### Log

**Upcoming Tasks:**

- search form
- carousel
- carousel card: div split in two cols, one large image, title description in other and call to action button
- accessability

- add package for auto capitalization
- general styling

**Completed (as in fully functioning but lacking design)**

- individual recipe page
- add url to referred recipe [id] page
- index filtering
- add a /search page ?

**Issues**

- fix "//@ts-expect-error type mismatch", row 66, recipes/[id]/page
- revalidate data fetching inside actions.tsx
- remove outline when recipeNavBtns are clicked with mouse?

**Init Thoughts About Pages:**
/ = holds different categories (carousels) and also a search form.
/recipes = holds an index feature
/:id = holds a single recipe

..

**Day 1: Project setup and inital structure build.**
I have created the initial pages needed for the recipe collection.
Where I left off is in the pages file for Home, where I am fetching the data from Sanity and storing it inside a variable. I haven't refined the fetch yet.

**Next up:** work on fetching the correct data and how to present it.

..

**Day 2: Individual data fetching.**
I'm fetching the necessary data from the database for a single ID and am currently busy displaying the correct info on the individual page.

**Next up:** Add stockphoto for recipe without image.

..

**Day 3: Processing image data and visuals.**
I'm successfully processing recipe image data and have added visuals to front page. I have decided to put it inside its own component for now, for easy use in the future and to minimize code.

**Next up:** I need to render image on [id] page.

..

**Day 4: Processing image data and visuals.**
Head and neck is killing me so did some cleanup, fixed the overflow issue with header and added component to render image to [id] page.

**Next up:** I need to fix the grid-col issue in the ingredients section as there is too much space between units and ingredient.

..

**Day 5: Bugs and data structure.**
Took care of some bugs, like width property on header to fix overflow issue. I also refactored data rendering for better structure and accessibility by changing the map to render a single <ul> with multiple items instead of multiple <ul> elements.

Did some remodeling and added elements for additional recipe properties. Introduced RecipeNavBtns for quick access to the recipe and added focus styling for improved accessibility.

Made the [id] page fully responsive.

**Next up:** leave [id] page for now and focus on fetching recipes under a specific tag. (I need to add link to original recipe.)

..

**Day 6: Error fetching data client side.**

Struggled with fetching data based on a search function. I wanted it to be handled inside a server component but had to use a client component for the search fields. After spending a few hours troubleshooting and learning how to use Apollo Client on the client side, I watched a very helpful video and learned how to handle it server-side.

..

**Day 7: Recipe Index**
Renamed my Index component from indexResults to indexList. It made more sense since it's more of a list than a result of something. I'm not overly fond of fetching every recipe document when I never need them all at the same time, but given that this is a small-scale app meant just for me, I decided not to overcomplicate things. I've limited the data I fetch from each document, which already improves performance and reduces data transfer.

..

**Day 8: Cleanup, active state, setup for seachForm**
Did some cleaning up in the files, fixed spelling errors, and added an active state for the active letter on the index page. Set up documents for SearchForm and copied functionality from NavIndex to SearchRecipe, making minor edits.

**Next up:** I need to fix the RecipeCards. The image rendering is set to 52x52, which I don't want on screen or tablet mode. I might also work on the start page and fix the SearchForm inside the header, but I can't decide where to put it yet.

..

**Day 9: mobile header**
I fixed the image size of the recipe cards, and I started on the mobile header. I dont know if I want to link to the search page in the header or if I want to have the search bar for easy and quick use..

..

**Day 10: Header and Search form**
Still unsure how to approach the search bar, I decided to move forward with the nav menu. As it was initially constructed, the menu stayed open when navigating to a link, which wasn’t very user friendly. To fix this, I wrote a useEffect that set the menu's open state to false by comparing the old path with the new path.

Next, I realized I didn’t want users to be able to navigate to the same page they were already on. However, I also wanted to keep NavBar as a server component if possible. This seemed achievable by passing the current pathname variable to the NavBar componet, but I quickly realized that this only worked for the mobile view component. In the end, I made NavBar a client component so I could track the current path and exclude it from being rendered in both mobile and desktop mode.

Search form: I have implemented the search form on the dedicated search page. It now fetches data and filters it for a match. If a match is found in any of the titles, ingredients, or tags, the results becomes visible. This solution works for my small-scale app for now, but it may not be optimal for larger-scale applications. In the future, I might exclude ingredients from the search or add criteria that allow users to choose what they want to search through.

**Next up:** add icon to search form. Accessibility message?

..

**Day 11:**
