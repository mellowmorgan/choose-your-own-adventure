export function seedDatabase(firebase) {
  // function getUUID() {
  //   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
  //       const piece = (Math.random() * 16) | 0;
  //       const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
  //       return elem.toString(16);
  //   });
  // }

  /* Series
    ============================================ */
  // Documentaries


  firebase.firestore().collection('rooms').add({
    name: "Dining Room",
    scenario: "You see a half-eaten baloney sandwich on the table and to your right a trail of muddy footsteps leading to the basement. Do you <em>eat it</em> or <em>leave the room</em> <em>follow the footsteps</em>?"
  });
  firestore.collection("rooms").doc("Dining Room").collection("options").add({
    content: "eat it",
    consequence: "Die from e. coli.",
    status: "lost",    
    nextRoom: null
  });
  firestore.collection("rooms").doc("Dining Room").collection("options").add({
    content: "follow the footsteps",
    consequence: null,
    status: "playing",   
    nextRoom: "Basement"
  });
  firestore.collection("rooms").doc("Dining Room").collection("options").add({
    content: "follow the footsteps",
    consequence: null,
    status: "playing",    
    nextRoom: "Basement"
  });
  firebase.firestore().collection('rooms').add({
    name: "Basement",
    scenario: "In the basement you see a cot and some cut rope under the stairwell and a crooked washing machine. Do you <em>leave the room</em> or <em>investigate the washing machine</em>?"
  });
  firestore.collection("rooms").doc("Basement").collection("options").add({
    content: "leave the room",
    consequence: null,
    status: "playing",    
    nextRoom: null
  });
  firestore.collection("rooms").doc("Basement").collection("options").add({
    content: "investigate the washing machine",
    consequence: "found key",
    status: "playing",    
    nextRoom: null
  });
}
