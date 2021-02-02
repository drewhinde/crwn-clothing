writing code that gets the whole state object and pulls off a slice / small portion of that state.

effectively a way of caching data from the store removing the need to keep firing our mapState.... functions.
can save time and effort and removes the need for the component to be re-rendered.

memoization

better to write a new selector file and create a function that mapState... can call.

reducer always returns a new object and this will cause the state to be re-built and component to be re-rendered.  we dont want to do this

reselect npm package
