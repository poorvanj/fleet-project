# fleet-project

## Setup Instructions

(1) Clone this repository using
**`git clone git@github.com:poorvanj/fleet-project.git`**
or download it directly.

(2) Using npm, run **`npm install`** to install all project dependencies.

(3) To run the app on **`localhost:8080`**, run **`npm start`**.

(4) To run the app using Webpack, run **`webpack --watch`** and hit **`localhost:8080`**.

## Pointers about this project

### 1) Used Font Awesome
As an alternative, I've used Font Awesome's React library to display icons on the home page. Of course, displaying assets from the provided assets folder would involve an implementation similar to:

**`<a href="#"><img src="/src/assets/facebook.svg"/></a>`**

### 2) Implemented handling of JSON data with Redux
Another alternative would be to use a Flux-based architecture, which I have typically used with fetching of JSON data.

### 3) Unclear on this scenario...
The problem statement requires the app to:

(1) Display the first 21 `providers`

(2) Where the entry has a `yearStarted` attribute value >= `2010`

(3) Sorted by the `companyName` attribute value in ascending alphanumeric order

The app maintains the sequence specified above.

If however, the `providers` are first sorted by `companyName` and then the top 21 `providers` are displayed, the results would be different from the case where step (1) is performed before (3).

### 4) Loader screen
The loader screen is deliberately implemented to display for a longer period of time. However, that could be reduced / removed completely.

### 5) Icon URLs from JSON data do not display company logos
Icon urls in the JSON data provided do not redirect to respective company logos but instead display only a photo hosting provider's logo. 

### 6) Responsive design
The app is built to allow viewing on tablets / mobile devices.

## Technology Choices

ReactJS was of course, the expected framework of choice for implementation. I decided to go with Redux as that was a straightforward implementation given the JSON fetching and sharing with components.

## Improvements

(1) Add Previous / Next buttons for navigations on the provider list pages (`/air`, `/ocean`, `/customBroker`) for better navigability, user experience and performance.

## If I had more time...

(1) I would implement the "Load More" functionality (I wasn't sure if this was required in the problem statement). I did however, implement a rough logic for this. A state attribute would store the number of companies loaded and every click on `Load More` would display the next 8 companies.

(2) I would implement some animation for the loading screen.

