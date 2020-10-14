Test username: test123@gmail.com
Test password: test123

# Idea #

Project was created to help me and my friends to keeps track of job offers we apply to, as we try to emigrate to anywhere in Western Europe (thus country and city fields to track offers). I wanted something more appealing than a regular Excel document, that would be accessible from any device.

At first it was supposed to be running based on local storage. But I decided that as a Frondend Dev I will have to learn how does Backend work, so I have watched a Node.js Crash Course to get a brief understanding of Backend. Not much, just enough to write my own backend for this app. Ended up with fake api just for the showcase pupose, as has some difficulties in managing a non-relational database and didn't want to spend too much of the time on fully operating backend (yet I have a working backend version jsut for basic db management purposes).

# UI Design #

Current UI Design was created by https://www.behance.net/karolinzielis

# Tech Used #

Frontend:
- React with Redux - I would love to develop this App further in the future, and I have not tried learning Hooks yet (it is on my list). Redux felt like a more friendly way of managing the state, so I won't have to pass references throught multiple layers of components (I tried it in the beggining, but didn't feel comfortable). Still got to use some class components for local component state management;
- Basic CSS for now, because the Project is not too complex yet. Problably I will switch to SASS in the future;

Backend:
- Node.js (Express) with Mongoose;
- Nodemon for live server updates;
- Passport with JWT to handle authorization;
- CORS for localhost development;

# Live Version #

Live version is yet to be deployed.

The test user only allows to download preset data. No operations on database are available.

# Local Project Set-up #

The Backend is currently setup for local development with proxy set for front-back connection (setting up CORS not knowing earlier that smth like this exist was a nightmare, but I managed to make it work ^^).

To start frontend - type "npm start" in frontend destination folder.
To start backend - type "nodemon server" in backend/fake_api destination folder.