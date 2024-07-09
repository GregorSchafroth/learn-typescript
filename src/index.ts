class SeatAssignment {
  // A1, A2 ...
  // Mosh, John, ...
  // Index signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = 'Greg';
seats.A2 = 'Mosh';
seats['A3'] = 'David'; 
// The last row does the same as the two before

console.log(seats)