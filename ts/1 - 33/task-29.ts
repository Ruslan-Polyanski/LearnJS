
// Реализуйте тип Admin, который является пересечением типов AdminPermission 
// и User. Реализуйте функцию addAdmin(), которая принимает значение 
// с типом User и возвращает значение с типом Admin. 
// В качестве значения для свойства permission должно быть значение 
// Permission.READ.

enum Permission {
  READ,
  WRITE,
  DELETE,
}

type User = {
  login: string,
};

type AdminPermission = {
  permission: Permission,
};

type Admin = AdminPermission & User;

function addAdmin (user: User): Admin {
  const newName = user.login;

  const newObj = {
    ...user,
    permission: Permission.READ,
  }

  return newObj;
}

const user: User = { login: 'login1' };
const admin = addAdmin(user); // { login: 'login1', permission: Permission.READ }

