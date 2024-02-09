
() => {

  type TUser = {
    name: string, 
    age: number,
  }

  type TtransformToJsonToObject = (value: TUser) => void

  let user: TUser = {
    name: "Василий Иванович",
    age: 35
  };
  
  const transformToJsonToObject: TtransformToJsonToObject = (value) => {
    const json = JSON.stringify(value);
    const obj = JSON.parse(json)
  }

  transformToJsonToObject(user)

};



() => {

  type TRoom = {
    number: number,
    occupiedBy?: TMeetup,
  }

  type TMeetup = {
    title: string,
    occupiedBy: {name: string}[],
    place: TRoom,
    self?: TMeetup
  }

  type TUnion = string | TMeetup | {name: string}[] | TRoom | TMeetup;

  type TReplacer = (key: string, value: TUnion) => undefined | TUnion;

  const replacer: TReplacer = (key, value) => {
    if(key === '' && value === meetup) {
      return value;
    }
  
    return value === meetup ? undefined : value;
  }

  const room: TRoom = {
    number: 23
  };

 const meetup: TMeetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  // цикличные ссылки
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  const json = JSON.stringify(meetup, replacer)

  console.log(json)

}