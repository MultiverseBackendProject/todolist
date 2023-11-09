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

Below is a checklist of different project code requirements. A fully done project should have get to as many tiers listed below as possible. Each tier is split up into Functionality and User Stories.

Tier 1 - Application MVP Front End
- Essential components have been incorporated and laid out on the page.
- User is able to navigate through the page using necessary routes.
- User interface is thoughtfully designed.  You may use vanilla CSS, or better yet, use a CSS Framework or styled Components.
    - As a user, I want the app to have a nice UX, so that I can be happy and enjoy my time using the app. Think about how styling enhances the user experience
    - As a user, I want to see the data nicely organized, so that I can consume and interact with it. Make sure where data is located makes sense from a user perspective.


Tier 1 - Application MVP Back End
- As a user, I want to read entries from the database
- As a user, I want to add entries to the database
- As a user, I want to delete entries from the database
- As a user, I want to edit entries in the database
- As a user, I expect to do all of the above by accessing RESTful routes


Tier 1 - Application MVP Deployment
- Deploy the application using the service of your choice.


Tier 2 - Deployed Application via Continuous Deployment
- Set up continuous deployments so that the application is deployed upon push/merge to main (or some other trigger).
    - Main Goal: The deployed app should be the most up to date version of your working-and-tested repository code.
    - Create a GitHub Workflow file for GitHub Actions and/or other necessary files for your deployment.
        - NOTE: You are not required to use GitHub Actions. Feel free to use a different tool if you wish!


Tier 3 - Continuous Integration
- Create a Branch Protection Rule to run the tests upon Pull Requests to the main branch.
    - Upon successful test runs, Github Actions should deploy your application.
        - NOTE: Again,** **you are not required to use GitHub Actions. Feel free to use a different tool if you wish!


Tier 4 - Login, Register, and Authentication
- As a user, I can create a new account with my information saved in a database.
- As a user, I can login to the account to retrieve information specific to my account. This information is displayed on the screen to make my user experience different from other users.
- As User B, I should not have access to User A’s private data (i.e. profile information, unpublished blog posts, private images…)
- Allow only authenticated users to access the private/profile/sharing portion of the application.
- Allow unauthenticated users to access other pages (like a welcome screen, or list of public posts)


Tier 5 - Admin vs User & Further Security Implementations
- Create an admin setting that gives different controls to certain users of your application.
- Protect your app against OWASP Top 10.

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
