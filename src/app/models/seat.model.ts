export interface SeatData {
  id: number;
  passengerId: number;
  seatsNumber: number;
  floor: number;
  price: number;
  status: "available" | "occupied";
}

export interface SeatBackend {
  seatID: number;
  busID: number;
  seatNumber: number;
  floor: number;
  price: number;
  available: number;
}

export interface Seat {
  id: number;
  busId: number;
  seatNumber: number;
  floor: number;
  price: number;
  availability: number;
}
