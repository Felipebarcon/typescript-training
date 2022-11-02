//*****************************************//
//*****************************************//
// INTERSECTIONS

interface User {
  username: string;
}

interface Moderator {
  deleteMessage: () => void;
  editMessage: () => void;
}

interface AddContent {
  addMessage: () => void;
}

// interface BasicUser extends User, AddContent {}
// interface Admin extends User, AddContent, Moderator {}

const newUser: User & AddContent = {
  username: "Jean",
  addMessage: () => {},
};

let admin: User & AddContent & Moderator = {
  username: "Pierre",
  addMessage: () => {},
  deleteMessage: () => {},
  editMessage: () => {},
};
