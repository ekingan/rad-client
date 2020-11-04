# Getting Started with Rad Client

Rad Client is built using React and Apollo. This is a small demo app that processes a list of serial numbers based on a list of codes. You can also add new codes within a type. The available types are (bike) model, year, and factory.

This is the client side portion of that app. The server side can be found at [Rad-Server](https://github.com/ekingan/rad-server)

Node Version 14.14.0

Pull down this branch and run `npm install`

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This client is set up to talk to the Rad Server on port 4000. Follow the instructions in the README here:
[Rad-Server](https://github.com/ekingan/ to get your server running. You will need both client and server running in order to use this application.

### `npm test a`

Launches the test runner and runs all tests in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Test Plan

#### Test Authentication

* Before you create an account or log in, try visiting the following routes:
  - localhost:3000/
  - localhost:3000/create

Verify that you get an error message that you are not authorized to visit these pages

* Now visit localhost:3000/login and create a new account. Verify that you can create a new account successfull.

* Logout of your account. Verify that you get redirected to the login page and that you cannot visit the create route or the root route.

* Log in with your user. Verify you can log in.

#### Test serial number decoding

* Click on the link in the header that says `Decode Serial Numbers`

* Enter this list of serial numbers that are separated by commas:
`RB719F1000001,SB919F1000001,HB719F1000001,WBO19J101713,SB419J100413,RA118F100923,MCO19J111815,YD520V101061`

Verify that the serial numbers can be decoded properly.

* Enter a list of serial numbers, each on a new line:
```
RB719F1000001
HB719F1000001
SB919F1000001
MCO19J111815
YD520V101061
```

Verify you can decode the serial numbers.

#### Test adding a new serial code
* Now click on the header link that says `Add New Serial Code` . Here you will see a list of existing codes. Verify that you can successfully add a new code and that it will appear at the top of the list. Note: I added a database constraint where the code must be unique within a type.

* Test for errors:
  - Test that you receive an error message when you try to add a duplicate code. You can generate the error message by  trying to add a new Bike model, with code `R`.

(Note: Error handling with Prisma is not great. I was able to return the server error but not a user-friendly, readable error.)


### Assumptions

Given the examples of serial numbers and the decoded results I made the following assumptions:
1. The letter at index 0 represents the bike mode
1. The letter at index 1 represents the model year
1. The number at index 2 represents the model month
1. The two numbers at index 3 and 4 represents the year the bike was manufactured
1. The letter at index 5 represents the factory
1. The last 6 digits represent the unique numberical code for the bike
1. Any characters between the factory and the unique code are considered the version

### Known Issues

When navigating between routes, the decooded serial number data does not persist.

The JWT token is stored in localStorage - this is not ideal and this strategy should not be used on production code.

I added basic component tests, yet robust business logic tests (in utils.test.js). In production these should be more robust

### One more thing
In my last several positions I have worked almost exclusively in Ruby on Rails. To complete this challenge using Ruby on Rails seemed too easy, and frankly, I wanted to try my hand at creating this application using some tools I don't know very well. I am unsure on some of the best practices, however, I hope to get some points for trying something new and being able to learn quickly. I could have spent a lot longer on this challenge but wanted to get it back to you without too much delay.

Thanks for considering me for this opportunity!