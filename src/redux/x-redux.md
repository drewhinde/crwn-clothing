
npm install redux redux-logger react-redux

index.js
	import Provider from react-redux
	wrap everything with <Provider> 

xxxx.reducer.js
	create xxxReducer function containing switch statement on action.type
	case names should match those in xxxx.actions.js

xxxx.actions.js
	create functions to call from code
	always contains type and payload

root-reducer.js
	import combineReducers from redux
	import xxxx.reducer.js
	create using combineReducers

store.js
	import xxxx.reducer.js
	import any middlewares
	use createStore(rootReducer, array of middlewares (spread)

connect()() and mapStateToProps()
	in react component use connect(mapStateToProps)(Header) to pass state into the component without chaining from parent component
	essentilly we are connecting the component to state