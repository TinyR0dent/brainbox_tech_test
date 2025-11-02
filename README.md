# Tech test example for Brainbox Consumer Rights

# Showcasing core React Native knowledge and design ideas

# To run the app

## install dependencies:

`npm install`

### If you get an error doing that try:

`npm install --legacy-peer-deps`

## Open a terminal in the root of the project and run:

`npx expo start`

### If you're running it through WSL you'll need to run:

`npx expo start --tunnel`

## When expo loads you can:

### Launch for web by entering 'w' into the terminal

### Launch on physical mobile device:

### Download the Expo Go app

#### On the app select 'Scan QR' and scan the qr code in the terminal

### Launch on emulator by entering 'a' into the terminal (requires an emulator running)


## Run unit tests with:
 `npx jest `


# Tech test checklist

- ~~ Fetch and display data from: https://jsonplaceholder.typicode.com/posts ~~
- ~~ Implement a search filter ~~
- ~~ Favourite toggle ~~
- ~~ Simple details screen ~~
- ~~ Error & loading states ~~

## Bonus checklist:

- ~~ Typescript ~~
- ~~ Unit Tests (Jest) ~~
- Seperate API Service File - (I was happy to leave it as just the hooks)
- ~~ Pull-to-refresh on list ~~

# UI Considerations

- I left the default assets/images because it wasn't relevant to the task, but I was considering switching these to the branded logos.
- Added an animation to the favouriting feature to make it feel more interactive.
- Opted for the colours used on the Consumer Rights branding for the favourited items and loading spinner to fit the themeing,
- Added an 'x' button to the search filter field to make it easier for users to clear the search field
- Added highlighting to the title where it matched the search query to make it easier for the user to see where the matching text is.
- I struggled to decide on an optimal design for the data screen after selecting an item. With the data being lorem ipsum text I couldn't decide on how best to present the data. Whether it needed to be uniform from the left to improve readability and consistency, or if it was more important for the data to be visually striking and neutral across the space. In the end I opted for centering the title to make it stand out, and left-aligned the body to improve readability. Given more meaningful data, whether it's punchy titles and bodies or important data which needs to be clear and presentable, this decision would be easier to make.