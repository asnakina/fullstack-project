# fullstack-project
The goal is to build the app that has a JSON API back-end and a React front end. 
The app will have at least 2 related models and all 4 CRUD operations for the whole project. 
Between each model all CRUD operations will be present.

![Main page](/printscreens/printscreen1.jpg)

![Another page](/printscreens/printscreen2.jpg)

![Different page](/printscreens/printscreen3.jpg)

## M.V.P
- Navigation Bar contains Home, Maps, Login/Register, etc. 
- Create all routs, associations, seed file, models file. 
- CRUD (i.e. ability to set up your favourite classes or add a pass to user's basket for further paying options)
- a slideshow with understandable React JavaScript code 
- animations 
- excellent design

![Associations M.V.P.](/printscreens/printscreen4.jpg)

## Post M.V.P features
- access to Google Maps
- account_type: string. Setting "account_type" to "admin" or "teacher" or "student"
we can change the view depending on what the account type is.
- teachers table
- img_url for the classes
- contains language change option for the nav bar and the essentials, etc.
- a printing option for a user account
- a calendar with dates
- 360 degrees view
- a chat room
- payment options

![Associations Post M.V.P.](/printscreens/printscreen5.jpg)

##                           Components Hierarchy:

#### 
- App.js with linkes to all components and the header
- App.css

#### NavBar
- NavBar.js - vertical sidebar

#### Main pages
- MainView.js with main page animated words

#### About
- AboutView.js with a video

#### Locations/Reviews
- LocationsView.js
- ReviewsView.js
- ReviewsRender.js
- ReviewForm.js
- Map.js

#### Classes/"Add favourite" feature
- ClassesView.js with a table of classes and locations
- ClassesRender.js

#### Retreats
- RetreatsView.js
- Carousel.js with slide-show

#### Exercises
- ExercisesView.js with gifs

#### Login/Register/Account/"Delete favourite" feature
- AuthForms.js
- RegisterForm.js
- LoginForm.js
- Profile.js

##                           Instruction how to install the app:
- open 2 terminal windows with Ctrl+T
- in 1st one you will run your server side with: 1) cd yogaPlace 2) npm i 3) run rails db:drop db:create db:migrate db:seed 4) rails s -p 3001
- on 2nd one you will run your client side with: 1) cd yogaPlace 2) cd client 3) npm i 4) npm run start

## Don't forget to run server first and after that the client.
## Enjoy the app!


