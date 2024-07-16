// Реализуйте функцию getUserFriends(userResponseJSON, userId), 
// которая принимает на вход JSON-строку и userId пользователя. 
// JSON содержит массив пользователей users и с массив друзей friends 
// в виде пар [userId, userId]. 
// Функция возвращает список друзей пользователя по переданному userId`.
// Если пользователь с указанным id не найден, то функция должна вернуть 
// пустой массив.

type User = {
  id: number,
  name: string,
  age: number,
};

type Friends = [number, number];

type UserResponse = {
  users: User[],
  friends: Friends[]
};

const userJson = JSON.stringify({
  users: [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Mary', age: 21 },
  ],
  friends: [
    [1, 2],
  ],
});

type TGetUserFriends = (userResponseJSON: string, userId: number) => User[]

const getUserFriends: TGetUserFriends = (userResponseJSON, userId) => {
  const userResponseParce: UserResponse = JSON.parse(userResponseJSON);

  let userFriendsId: number[] = [];

  userResponseParce.friends.forEach((item) => 
        !item.includes(userId) || userFriendsId.push(...item) 
  )

  if(!userFriendsId.length) return [];

  const clearUserId = userFriendsId.filter(item => item !== userId);

  const filterUserFriend = userResponseParce.users.filter(item => clearUserId.includes(item.id));

  return filterUserFriend;
}

console.log(getUserFriends(userJson, 1));
console.log(getUserFriends(userJson, 2));
console.log(getUserFriends(userJson, 3));

getUserFriends(userJson, 1); // [{ id: 2, name: 'Mary', age: 21 }]
getUserFriends(userJson, 2); // [{ id: 1, name: 'John', age: 20 }]
getUserFriends(userJson, 3); // []
