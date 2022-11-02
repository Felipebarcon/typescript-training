//*****************************************//
//*****************************************//
// ALIAS DE TYPE

type UserStatutType = "online" | "offline" | "busy";

let userStatus1: UserStatutType = "online";

function getUserStatus(user): UserStatutType {
  return user.status;
}

type ObjectId1 = string;

type User1 = {
  username: string;
  age: number;
  id: ObjectId;
};

const newUser1: User = {
  username: "Felipe",
  age: 39,
  id: "123",
};
