import reduxCrud from 'redux-crud'
 
const Types = reduxCrud.actionTypesFor('devices')
const Creators = reduxCrud.actionCreatorsFor('devices')

export { Types, Creators }