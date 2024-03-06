let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup ссылается на room
};

room.occupiedBy = meetup; 
console.log(room)