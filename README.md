# Idea #

Project was created to help me and my friends to keeps track of job offers we apply to, as we try to emigrate to anywhere in Western Europe (thus country and city fields to track offers). I wanted something more appealing than a regular Excel document, that would be accessible from any device.

At first it was supposed to be running based on local storage. But I decided that as a Frondend Dev I will have to learn how does Backend work, so I have watched a Node.js Crash Course to get a brief understanding of Backend. Not much, just enough to write my own backend for this app.

# UI Design #

Current UI Design is temporary.

The right UI Design is on its way, being created by https://www.behance.net/karolinzielis

# Tech Used #

Frontend:
- React with Redux - I would love to develop this App further in the future, and I have not tried learning Hooks yet (it is on my list). Redux felt like a more friendly way of managing the state, so I won't have to pass references throught multiple layers of components (I tried it in the beggining, but didn't feel comfortable);
- Basic CSS for now, because the Project is not too complex yet. Problably I will switch to SASS in the future;

Backend:
- Node.js with Mongoose;
- EJS as view engin;
- Passport to handle authorization;

# Live Version #

Live version is yet to be deployed. There will be a test user with timer set to reset its data every full hour (or half an hour) to try it without the need of creating a new account.

# Local Project Set-up #

The Backend is currently setup for local development with proxy set for front-back connection (setting up CORS was a nightmare, but I managed to make it work ^^). Just create a Mongo database and connect it in backend to run the demo on your local machine.
