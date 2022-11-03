type customModulos = 1 | 2 | 3;

type ObjectId = string;

type User = {
  username?: string;
  age: number;
  // id: ObjectId;
  // car: ObjectId;
  address?: {
    city: {
      name: string;
    };
  };
};

const myUser: User = {
  username: "",
  age: 39,
};

const city = myUser.address?.city?.name;

console.log(city);

const username = myUser.username ?? "guest";
console.log(username);
