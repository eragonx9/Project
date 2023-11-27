import React, { useState } from 'react';
import './Venuebook.css';
const Venuebook = () => {
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
    <div>
      <h2>LT Booking System</h2>
      <form onSubmit={handleBookingSubmit}>
        <label>
          Enter Booking venue (1-10):
          <input
            type="number"
            value={newBooking}
            onChange={handleNewBookingChange}
            min="1"
            max="10"
          />
        </label>
        <button type="submit">Book</button>
      </form>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.time}
            <button onClick={() => handleCancelBooking(booking.id)}>
              Cancel
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Venuebook;
