//*****************************************//
//*****************************************//
// ALIAS DE TYPE

type UserStatutType = "online" | "offline" | "busy";

let userStatus: UserStatutType = "online";

function getUserStatus(user): UserStatutType {
  return user.status;
}

type ObjectId = string;

type User = {
  username: string;
  age: number;
  id: ObjectId;
};

const newUser: User = {
  username: "Felipe",
  age: 39,
  id: "123",
};
