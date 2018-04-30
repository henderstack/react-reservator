/*
mutation addReservation($reservationId: ID!, $name: String!, $hotelName: String!, $arrivalDate: String!, $departureDate: String!) {
  addReservation(reservationId:$reservationId, name:$name, hotelName:$hotelName, arrivalDate:$arrivalDate, departureDate:$departureDate) {
    ...reservationFields
  }
}

fragment reservationFields on reservation {
  reservationId
  name
  hotelName
  arrivalDate
  departureDate
}
*/