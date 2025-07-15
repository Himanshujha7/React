# parcel
- dev build 
- local server
- HMR = hot module replacement
- file watching algorithm
- faster builds with cache

# 2 types Routing in web apps
- client side routing
- server side routing
 
 # React Hooks
 (Normal JS utility functions)
 - useState() - Superpowerful state vairable in react
 -useEffect()

 # Redux toolkit

- install @reduxjs/toolkit and react-redux
- build our store 
- connect our store
- Slice (cartSlice)
- dispatch action and use reducer
- read data via selector
 

# redux devtools
- Devtools to debug, and manage redux stores.
- gives us a actions, state, trace and test cases for reducers
- logs the monitor


# Testing types

- Unit testing /
- testing a single unit of code

- integration testing /
- integration of features is tested by developing a flow of tests

- end to end testing - e2e testing 
- end to testing of user flow

- manual testing 
- manual testing in site and features

 # setting up testing in our app
 - install react testing lib by npm i -D @testing-library/react
 - installed jest
 - installed babel dependencies
 - config babel.config.js
 - parcel uses babel behind the scene
- config parcel config in .parcelrc to disable default babel transpilation
- jest config by npm init jest@latest
- now install jsdom library
- npm install save-enviroment-jsdom
- install @babel/preset-react - to make jsx work in test cases
- include @babel/preset-react - inside my babel config

- install @testing-library/jest-dom



# Test files
- any file names like header.test.js is a test file
- any ifle normally inside folder is test file
- header.test.js
- header.spec.js
- __ is kknow as dunder
