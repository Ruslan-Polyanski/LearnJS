
() => {

  const fetchingUrl = (url) => {
    console.log(`fetching ${url}`)
  }

  function debounce() {
    // Ваш код
  }

  const fetching = debounce(fetching, 100)

}



() => {

  const fetchingUrl = (url) => {
    console.log(`fetching ${url}`)
  }

  function debounce(func, delay) {

    let timerId = null;

    return function(args) {

      clearTimeout(timerId)

      timerId = setTimeout(() => {
        func.call(this, args)
      }, delay)

    }

  }

  const fetching = debounce(fetchingUrl, 100)

  fetching('my-url')
  fetching('two-url')

}