### Log

**Upcoming Tasks:**

- search form
- individual recipe page
- carousel
- index filtering
- accessability
- add a /search page ?
- add package for auto capitalization
- general styling

**Issues**

- fix "//@ts-expect-error type mismatch", row 66, recipes/[id]/page
- revalidate data fetching inside actions.tsx

**Init Thoughts About Pages:**
/ = holds different categories (carousels) and also a search form.
/recipes = holds an index feature
/:id = holds a single recipe

**Day 1: Project setup and inital structure build.**
I have created the initial pages needed for the recipe collection.
Where I left off is in the pages file for Home, where I am fetching the data from Sanity and storing it inside a variable. I haven't refined the fetch yet.

**Next up:** work on fetching the correct data and how to present it.

**Day 2: Individual data fetching.**
I'm fetching the necessary data from the database for a single ID and am currently busy displaying the correct info on the individual page.

**Next up:** Add stockphoto for recipe without image.

**Day 3: Processing image data and visuals.**
I'm successfully processing recipe image data and have added visuals to front page. I have decided to put it inside its own component for now, for easy use in the future and to minimize code.

**Next up:** I need to render image on [id] page.

**Day 4: Processing image data and visuals.**
Head and neck is killing me so did some cleanup, fixed the overflow issue with header and added component to render image to [id] page.

**Next up:** I need to fix the grid-col issue in the ingredients section as there is too much space between units and ingredient.

**Day 4: Bugs and data structure.**
Took care of some bugs, like width property on header to fix overflow issue. I also refactored data rendering for better structure and accessibility by changing the map to render a single <ul> with multiple items instead of multiple <ul> elements.

Did some remodeling and added elements for additional recipe properties. Introduced RecipeNavBtns for quick access to the recipe and added focus styling for improved accessibility.

Made the [id] page fully responsive.

**Next up:** leave [id] page for now and focus on fetching recipes under a specific tag.
