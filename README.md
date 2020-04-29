# Cats & Dogs

A Cats & Dogs app built using the following:

**Programming Language**: JavaScript

**Front-end Web Framework**: Vue

**Back-end Web Framework**: Express

**API Client**: Insomnia

**Middleware**: Body Parser

**Markup/Styling**: HTML5/CSS3

The Cats & Dogs app accesses a HTTP RESTful API, which is available on a server created using Express. The app can add a new cat/dog using RESTful routes. The RESTful routes used are: index, create, show, update and destroy, using the HTTP verbs GET, POST, PUT, DELETE.

This exercise was tasked to me by CodeClan, Glasgow where I studied towards a PDA Level 8 in Professional Software Development. The exercise brief can be found below.

---

# Brief

You have been asked to build an API to hold information about dogs.

This should be a RESTful API and should include the following routes:

- /api/dogs - Index (GET)
- /api/dogs/:id - Show (GET)
- /api/dogs - Create (POST)
- /api/dogs/:id - Destroy (DELETE)
- /api/dogs/:id - Update (PUT)

**MVP**

- Set up the express server
- Create a router file
- Code the routes to show all dogs and add a dog via the provided front end

**Extensions**

- Code the routes to show, delete and update a dog. Test these using insomnia

**Advanced Extensions**

- Create a new catRouter in the server file for http://localhost:3000/api/cats

---

# Setup

- Download/Clone files

- In each of the client and server directories, in Terminal:

```
npm install
```

- In client directory, in Terminal:

```
npm run serve
```

- In server directory, in Terminal:

```
npm run server:dev
```

- Click the link below to open project in browser

[LocalHost](http://localhost:8080/)
