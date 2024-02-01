
() => {

  type TUser = {
    name: string,
    years: number
    isAdmin?: boolean
  }

  let user: TUser = {
    name: "John",
    years: 30
  };
  
  let { name, years: age, isAdmin = false} = user;

  alert( name ); // John
  alert( age ); // 30
  alert( isAdmin ); // false

};