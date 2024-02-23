// clean code
class User {
  save() {}
}

const isLoggedIn = true;


// dirty code
const us = new MainEntity();

us.process();

if (login()) {
  // ...
}

// clean code
const user = new User();
user.save();

if (isLoggedIn) {
  // ...
}
