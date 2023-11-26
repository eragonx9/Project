import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VenueBooking = () => {
  // State to manage bookings
  const [bookings, setBookings] = useState([]);

  // State to manage new booking input
  const [newBooking, setNewBooking] = useState('');

  // Function to handle new booking input change
  const handleNewBookingChange = (e) => {
    setNewBooking(e.target.value);
  };

  // Function to handle booking submission
  const handleBookingSubmit = (e) => {
    e.preventDefault();

    // Check if the time is within the allowed range (1-10)
    const bookingTime = parseInt(newBooking, 10);
    if (isNaN(bookingTime) || bookingTime < 1 || bookingTime > 10) {
      alert('Please enter a valid Lecture hall between 1 and 10.');
      return;
    }

    // Check if the time is already booked
    if (bookings.some((booking) => booking.time === bookingTime)) {
      alert('Hall is already booked. Please choose another lecture hall.');
      return;
    }

    // Add the new booking to the list
    setBookings([...bookings, { id: Date.now(), time: bookingTime }]);
    setNewBooking('');
  };

  // Function to handle booking cancellation
  const handleCancelBooking = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  return (
    <div className="bg-secondary text-secondary px-4 py-3 text-center">
    <div className="py-0">
      <h1 className="display-5 fw-bold text-white">Book A Venue</h1>
      <div className="col-lg-6 py-2 px-2 rounded-4 bg-dark mx-auto border-light">
        
      <form  className="fs-5 mt-3 mb-2" onSubmit={handleBookingSubmit}>
        <label className='pb-2'>
          Enter Booking venue (1-10):
          <input
            type="number"
            value={newBooking}
            onChange={handleNewBookingChange}
            min="1"
            max="10"
          />
        </label>
        <button type="button submit" className="btn btn-primary btn-md mx-4 px-4 me-sm-3 fw-bold">Book</button>
      </form>

            <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.time}
            <button type="button" className="btn btn-secondary btn-sm mx-4 px-4" onClick={() => handleCancelBooking(booking.id)}>
              Cancel
            </button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  </div>
  )
}

export default VenueBooking