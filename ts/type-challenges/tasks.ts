
() => {

  interface Todo {
    title: string
    description: string
    completed: boolean
  }

  type MyPick<T, Keys extends keyof T> = {
    [key in Keys]: T[key]
  }
  
  type TodoPreview = MyPick<Todo, 'title' | 'completed'>
  
  const todo: TodoPreview = {
      title: 'Clean room',
      completed: false,
  }

}

() => {

  interface Todo {
    title: string
    description: string
  }

  type MyReadonly<T> = {
    readonly [key in keyof T]: T[key]
  }
  
  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }
  
  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property

}

() => {

  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  type TupleToObject<T extends readonly (keyof any)[]> = {
    [key in T[number]]: key
  }

  type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

}

() => {

  type arr1 = ['a', 'b', 'c']
  type arr2 = [3, 2, 1]

  type First<T extends any[]> = T extends [] ? never : T[0]

  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3

}