
() => {

  enum Status {
    Pending, 
    Approved,
    Rejected
  }
  
  const currentStatus: Status = Status.Pending;
  console.log(currentStatus)
  console.log(Status.Approved)
  console.log(Status.Rejected)

}

() => {

  enum Status {
    Pending = 200, 
    Approved = 300,
    Rejected = 400
  }
  
  const currentStatus: Status = Status.Pending;
  console.log(currentStatus)
  console.log(Status.Approved)
  console.log(Status.Rejected)

}

() => {

  () => {

    enum Status {
      Pending = 'P', 
      Approved = 'A',
      Rejected = 'R'
    }
    
    const currentStatus: Status = Status.Pending;
    console.log(currentStatus)
    console.log(Status.Approved)
    console.log(Status.Rejected)
  
  }

}

() => {

  interface IData {
    author: number;
    category: string[];
    id: string;
    name: string
  }

  type TCategoryType = string;
  type TIdType = string | null | undefined

  interface IAtherData {
    author: string;
    category: TCategoryType[];
    id: TIdType;
    rx: string;
  }

  type TItem = IData | IAtherData;
  type TAllItems = IData & IAtherData;

  const obj: TItem = {
    author: 'gsdfgs',
    category: ['sdfsdf'],
    id: 'sadfasfd',
    rx: 'sdfas',
    name: 'asdfasd'
  };
  const obj2: TAllItems = {
    author: 'dfsdf',
    name: 'sfs',
  };


}

() => {

  const user = {
    name: "John",
    age: 30
  };

  type TUser = typeof user;

  const atherUser: TUser = {
    name: 'sdfsd',
    age: 40,
  }

}

() => {

  interface IUser {
    name: string;
    age: number;
    street: string;
    shool: number;
  }

  type TAtherUser = keyof IUser;

  const key: TAtherUser = 'street';

}

() => {

  interface IUser {
    name: string;
    age?: number;
    readonly street: string;
    shool: number;
    hier: {
      grow: number;
      weight: number;
    }
  }

  // * MappedTypes

  type TUser = { [K in keyof IUser]: IUser[K]}
  type TUser2 = { -readonly [K in keyof IUser]: IUser[K]}
  type TUser3 = { readonly [K in keyof IUser]: IUser[K]}
  type TUser4 = { -readonly [K in keyof IUser]?: IUser[K]}
  type TUser5 = { -readonly [K in keyof IUser]?: [number]}
  type TUser6 = { [K in keyof IUser]?: string}

  // * LookupTypes

  type THier = IUser['hier'];

  const objHier: THier = {
    grow: 181,
    weight: 78
  }

}

() => {

  // * Utility Types / Гамоморфные типы сохраняют структуру интерфейса или типа

  interface IUser {
    name: string;
    age?: number;
    readonly street: string;
    shool: number;
    hier: {
      grow: number;
      weight: number;
    }
  }

  type ReadonlyUser = Readonly<IUser>;
  type PartialUser = Partial<IUser>;
  type RequiredUser = Required<IUser>;
  type PickUser = Pick<IUser, 'name' | 'shool'>

  // * Не гомаморфный тип Record

  type RecordUser = Record<'age' | 'name', string> & Record<'title', number>

  const myUser: RecordUser = {
    age: '27',
    name: 'Ruslan',
    title: 123456
  }

}

() => {
  interface IUser {
    name: string;
    age?: number;
    readonly street: string;
    shool: number;
    hier: {
      grow: number;
      weight: number;
    }
  }

  // * Exclude

  type WithOutName = Exclude<keyof IUser, 'name'>;
  const obj1: WithOutName = 'age';

  // * Extract

  type NonType = Extract<keyof IUser, 'name'>

  // * ReturnType

  function func(user: IUser): number {
    return user.age ? user.age : NaN;
  }

  type newTypeDescription = ReturnType<typeof func>

  // * Omit

  type newType = Omit<IUser, 'name'>;

}

