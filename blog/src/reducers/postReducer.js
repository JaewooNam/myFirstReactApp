/* Bad
< Array >
1. Removing an element from an array 
  state.pop()
2. Adding an element to an array
  state.push('hi')
3. Replacing an element in an array
  state[0] = 'hi'
< Object >
4. Updating a property in an object
  state.name = 'Sam'
5. Adding a property to an object
  state.age = 30
6. Removing a property from an obejct
  delete state.name
*/

/*  Good ~!!
1. state.filter(e => e !== 'hi')
2. [...state, 'hi']
3. state.map(el => el === 'hi' ? 'bye' : el)
4. {...state, name: 'Sam'}
5. {...state, age: 30}
6. {...state, age: undefined }
    _.omit(state, 'age')  // lodash library
*/
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload
    default:
      return state
  }
}
