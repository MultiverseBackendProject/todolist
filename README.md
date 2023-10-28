<!--

Multiverse Fullstack Project using:

Back-End:
    - Express
    - Node
    - SQLite3
    - Sequelize

Front-End:
    - React.js
    - HTML
    - CSS
    
Title: To-Do List - Fullstack Project

 -->

Author(s): Tani Cha & Kim Le

Date: 5 weeks

## Introduction

We created a simple to-do list that requires user authentication for the user to be able to add items in their list and be able to delete, update, or create tasks while authorized. If the user is not authorized, then they will need to login in to see their list. 

## Requirements

Below is a checklist of different project code requirements. A fully done project should get to as many tiers listed below as possible. Each tier is written as User Stories.

Tier 1 - MVP Application and REST
- As a User, I want to read entries from the database
- As a User, I want to add entries to the database
- As a User, I want to delete entries from the database
- As a User, I want to edit entries in the database
- As a User, I expect to do all of the above by accessing RESTful routes
- As a User, I want to log in to a deployed app. Reference the Deployment section for instructions.


Tier 2 - Login and Hashing
- As a User, I want to be able to log in to my API
- As a User, I want any passwords saved to be hashed and salted before saved to the database (note: If you use OAuth, you might not even store passwords at all!)


Tier 3 - Register
- As a potential User, I want to be able to sign up for the API
- As a signed-up User, I want to be granted authorization to access the API


Tier 4 - Authorization
- As a User, I want my API protected from unauthorized Users
- As an unauthorized User, I want a helpful message telling me I do not have access to the API
- (optional, but recommended): As a user, I want to receive a helpful error message anytime there is a problem with the request (i.e. error handling middleware)
- As a User, I expect not to be able to create new entities without first logging in / authenticating in some way (token/session)
- As a User, I want my data to only be accessible by myself
- As a User, I want my data to only be editable/deletable by myself


Tier 5 - Associated Data
In addition to the Tier 1 MVP criteria…
- As a User, I want to be able to read a single entry
- As a User requesting a single entry, I want to see the associated user info and other associated data. For example, if your API is a concert, instead of just the concert, I want to see who created the concert entry, as well as the associated location data, artist info, and attendees coming to the event.


Tier 6 - Admin vs. User
- As an Admin, I want to have a special super-user account type that allows access to content Users don’t have access to
- As a basic User, when requesting a list of all entries, I expect to only see my own entries (not entries of other users)
- As an Admin, when requesting a list of all entries, I expect to be able to see all entries, regardless of user/owner
- As an Admin, I want to be able to edit other users’ information via the API
- As an Admin, I want to be able to delete or edit any entity, regardless of user/owner

## Design

Wireframe/ Future Stretch Goals

<img width="1591" alt="image" src="https://github.com/MultiverseBackendProject/todolist/assets/91621873/ad221113-8edc-4e73-b827-4f6b6335c6b8">

## Implementation

- The application uses Node.js with Express.js as the web framework.
- Middleware like cors, morgan, and express.json are used to handle cross-origin requests, logging, and JSON parsing.
- The express-openid-connect middleware is integrated for Auth0 authentication.
  
Routes:
- / - The home route that displays a greeting message or user-specific message if logged in.
- /auth - Contains authentication-related routes:
- /login - Initiates the login process using Auth0.
- /logout - Initiates the logout process using Auth0.
- /todos - Contains routes related to managing to-do items.
  
Auth0 Integration:
- Auth0 is used for user authentication and identity management.
- We configured Auth0 settings such as client ID, client secret, and domain in our environment variables.
- The express-openid-connect middleware handles authentication routes and user sessions.
- The /auth routes trigger Auth0 login and logout processes.

## Testing

We incorporated unit testing as well as implemented Postman.

Security Considerations:
- We integrated Auth0 for secure authentication and token-based access control.
- Our application uses environment variables to store sensitive information like Auth0 credentials.

## Deployment

- We deployed our application using render.com
