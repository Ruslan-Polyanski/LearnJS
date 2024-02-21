
() => {

  console.log(this)

}


() => {

  "use strict"

  console.log(this)

}


() => {

  const obj = {
    myThis: this,
  }

  console.log(obj.myThis)

}


() => {

  "use strict"

  const obj = {
    myThis: this,
  }

  console.log(obj.myThis)

}


() => {

  function getThis() {
    return this;
  }

  getThis()
  
}


() => {

  "use strict"

  function getThis() {
    return this;
  }

  getThis()
  
}


() => {
  
  function getThis() {
    "use strict"

    return this;
  }

  getThis()
  
}


() => {
  
  const getThis = function () {
    
    return this;
  }

  getThis()
  
}


() => {

  "use strict"

  const getThis = function () {
    
    return this;
  }

  getThis()
  
}


() => {
  
  const getThis = function () {

    "use strict"
    
    return this;
  }

  getThis()
  
}


() => {
  
  const getThis = () => {
    
    return this;
  }

  getThis()
  
}


() => {

  "use strict"
  
  const getThis = () => {
    
    return this;
  }

  getThis()
  
}


() => {

  const getThis = () => {
    "use strict"
    
    return this;
  }

  getThis()
  
}


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








