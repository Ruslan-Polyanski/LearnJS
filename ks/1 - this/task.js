
() => {

  function getThis() {
    function getThisTwo() {
      return this;
    }

    return getThisTwo()
  }

  getThis()

}


() => {
  "use strict"

  function getThis() {
    function getThisTwo() {
      return this;
    }

    return getThisTwo()
  }

  getThis()

}


() => {
  
  const obj = {
    getThis: function() {
      return this;
    }
  }

  obj.getThis()

}

() => {
  
  const obj = {
    getThis: function() {
      "use strict"
      return this;
    }
  }

  obj.getThis()

}


() => {
  
  "use strict"

  const obj = {
    getThis: function() {
      return this;
    },

    getThisTwo() {
      return this;
    },

    getArrowThis: () => {
      return this;
    },
  }

  obj.getThis()
  obj.getThisTwo()
  obj.getArrowThis()

}


() => {
  
  "use strict"

  const obj = {
    getThis: function() {
      function getThisInto() {
        return this;
      }

      return getThisInto()
    },

    getThisTwo() {
      return this;
    },

    getArrowThis: () => {
      return this;
    },
  }

  obj.getThis()
  obj.getThisTwo()
  obj.getArrowThis()

}


() => {
  
  "use strict"

  const obj = {
    getThis: function() {
      function getThisInto() {
        return this;
      }

      return getThisInto()
    },

    getThisTwo() {
      return this;
    },

    getArrowThis: () => {
      const getThis = () => {
        return this;
      }
      return getThis();
    }
  }

  obj.getThis()
  obj.getThisTwo()
  obj.getArrowThis()

}


() => {

  function test(){
    const a = "Печаль";
    console.log(this.a);
  }

  test()

}


() => {

  const obj1 = {

    hello: function() {
      return this;
    },

    obj2: {
        breed: 'dog',
        speak: function() {
              return this;
          }
      }

  };
   
  console.log(obj1.hello());
  console.log(obj1.obj2.speak());

}


() => {

  var objReg = {
    hello: function() {
      return this;
    }
  };

  objReg.hello();
   


  var objArrow = {
      hello: () => this
  };
   
  objArrow.hello();

}


() => {

  var dog = {
    breed: 'Beagles',
    lovesToChase: 'rabbits'
  };
  
  function chase() {
    console.log(this.breed + ' loves chasing ' + this.lovesToChase + '.'); 
  }
  
  dog.foo = chase;
  dog.foo();
  
  chase();

}


() => {

  function Dog(breed, name, friends){
    const n111 = '111---111';
    this.breed = breed;
    this.name = name;
    this.friends = friends;	
    this.intro = function() {
        console.log(`${this.name}`);
        console.log(n111)
        return this;
    }; 
    this.introArraw = () => {
      console.log(`${this.name}`);
      console.log(n111)
    }
  }

  var chester = new Dog('beagle', 'Chester', ['Gracie', 'Josey', 'Barkley']);

  // chester.intro(); 
  chester.introArraw(); 

}

() => {

  'use strict'

  const getThis = () => {
    return this;
  }

  function getThisTwo() {
    return getThis();
  }

  getThisTwo()

}


() => {

  const getThis = () => {
    return this;
  }

  const myObj = {
    name: 'MyName',
    myFunc() {
      return getThis();
    }
  }

  myObj.myFunc()

}


() => {

  const myObj = {
    name: 'Ilona',
    myFunc() {
      return () => {console.log(this)};
    }
  };

  const myObjTwo = {
    name: 'Inna',
    myAtherFunc(callback) {
      callback()
    }
  };

  myObjTwo.myAtherFunc(myObj.myFunc())

}


() => {

  'use strict'

  function getThisTwo() {
    const getThis = () => {
      return this;
    }

    return getThis();
  }

  getThisTwo()

}

() => {

  const myObj = {
    name: 'Ilona',
    func() {
      return this.name;
    }
  }

  myObj.func()



  'use strict'

  const myObjTwo = {
    name: 'Ilona',
    func: () => {
      return this.name;
    }
  }

  myObjTwo.func()

}


() => {

  'use strict'

  const obj = {
    name: 'Inna',
    func() {
      const arrowFunc = () => {
        console.log(this.name)
      }
      return arrowFunc;
    }
  }

  const link = obj.func;
  const arrow = link()

  arrow()

}

() => {

  const obj = {
    name: 'inna',
    func() {
      console.log(this.name)
    }
  }

  // const myFunc = obj.func;
  const myFunc = obj.func.bind(obj)
  myFunc()

  // const myFunc = obj.func.call(obj);
  // myFunc()

  // setTimeout(() => obj.func(), 1000)
  // setTimeout(obj.func, 1000)

}



() => {

  function MyConstructor() {
    this.name = 'inna';
    this.func = () => {
      console.log(this.name)
    }
  }

  const obj = new MyConstructor();
  obj.func()

}


() => {


  function MyConstructor() {
    this.name = 'inna';
    this.func = function() {
      console.log(this.name)
    }
  }

  const obj = new MyConstructor();
  obj.func()

}


() => {


  function MyConstructor() {
    this.name = 'inna';
    this.func = function() {
      console.log(this.name)
    }
  }

  const obj = MyConstructor();
  obj.func()

}


() => {

  function GetObj() {
    this.name = 'mama';
    this.arrow = () => {
      console.log(this)
    }
    this.expresh = function () {
      console.log(this)
    }
  }

  const myObj = new GetObj();
  myObj.arrow()
  myObj.expresh()

}



() => {

  const f = function() {
        this.x = 5;
        (function() {
            this.x = 3;
        })();
        console.log(this.x);
    };

    var obj = {
        x: 4, 
        m: function() {
          console.log(this.x);}
      };


    f();
    new f();
    obj.m();
    new obj.m();
    f.call(f);
    obj.m.call(f);

}















