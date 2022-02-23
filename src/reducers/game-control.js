// export default (state = {}, action) => {
//   const { day, location, hours, booth, id } = action
//   switch (action.type){
//     case 'ADD_DAY':
//       return Object.assign({}, state, {
//         [id]:{
//           day: day,
//           location: location,
//           booth: booth,
//           hours: hours,
//           id: id
//         }
//       });
//       case 'DELETE_DAY':
//         let newState = { ...state };
//         delete newState[id];
//         return newState;
//     default: 
//       return state;
//   }
// }