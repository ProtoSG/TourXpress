import { Seat, SeatBackend } from "@models/seat.model";

export function seatAdapter(seat: SeatBackend): Seat {
  return {
    id: seat.seatID,
    busId: seat.busID,
    seatNumber: seat.seatNumber,
    floor: seat.floor,
    price: seat.price,
    availability: seat.available,
  }
}
