import { Trip, TripBackend } from "@models/trip.model";

export function tripAdapter(trip: TripBackend): Trip {
  return {
    id: trip.tripID,
    boarding: {
      id: trip.boarding.terminalID,
      time: trip.boarding.time,
      location: trip.boarding.location,
    },
    disembarkation: {
      id: trip.disembarkation.terminalID,
      time: trip.disembarkation.time,
      location: trip.disembarkation.location,
    },
    service: {
      id: trip.service.serviceID,
      name: trip.service.description,
    },
    bus: {
      id: trip.bus.busID,
      floorNumbers: trip.bus.floorNumbers,
    },
    seatsAvailable: trip.seatsAvailable,
    price: trip.price
  }
}
