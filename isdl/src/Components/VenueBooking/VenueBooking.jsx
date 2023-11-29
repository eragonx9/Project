import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VenueBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState('');

  useEffect(() => {
    // Fetch existing bookings when the component mounts
    fetchBookings();
  }, []);

  const handleNewBookingChange = (e) => {
    setNewBooking(e.target.value);
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    const bookingTime = parseInt(newBooking, 10);
    if (isNaN(bookingTime) || bookingTime < 1 || bookingTime > 10) {
      alert('Please enter a valid Lecture hall between 1 and 10.');
      return;
    }

    try {
      // Make a POST request to add the booking
      const response = await fetch('http://localhost:5000/add-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ time: bookingTime }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      // Update the bookings state with the new booking
      setBookings([...bookings, { id: Date.now(), time: bookingTime }]);
      setNewBooking('');
    } catch (error) {
      console.error('Error adding booking:', error.message);
      alert('Error adding booking. Please try again.');
    }
  };

  const fetchBookings = async () => {
    try {
      // Make a GET request to fetch all bookings
      const response = await fetch('http://localhost:5000/all-bookings');
      if (!response.ok) {
        throw new Error('Failed to fetch bookings');
      }

      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error('Error fetching bookings:', error.message);
    }
  };

  const handleCancelBooking = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/cancel-booking/${id}`, {
        method: 'DELETE',
      });
  
      // Check if the response status is 204 (No Content), indicating successful deletion
      if (response.status === 204) {
        // Update the bookings state after successful cancellation
        setBookings(bookings.filter((booking) => booking.id !== id));
      } else {
        const errorData = await response.json();
        console.error('Failed to cancel booking:', errorData);
        throw new Error('Failed to cancel booking');
      }
    } catch (error) {
      console.error('Error canceling booking:', error.message);
      alert('Error canceling booking. Please try again.');
    }
  };
  
  

  return (
    <div className="bg-secondary text-secondary px-4 py-3 text-center">
      <div className="py-0">
        <h1 className="display-5 fw-bold text-white">Book A Venue</h1>
        <div className="col-lg-6 py-2 px-2 rounded-4 bg-dark mx-auto border-light">
          <form className="fs-5 mt-3 mb-2" onSubmit={handleBookingSubmit}>
            <label className="pb-2">
              Enter Booking venue (1-10):
              <input
                type="number"
                value={newBooking}
                onChange={handleNewBookingChange}
                min="1"
                max="10"
              />
            </label>
            <button type="submit" className="btn btn-primary btn-md mx-4 px-4 me-sm-3 fw-bold">
              Book
            </button>
          </form>
          <ul>
            {bookings.map((booking) => (
              <li key={booking.id}>
                {booking.time}
                <button
                  type="button"
                  className="btn btn-secondary btn-sm mx-4 px-4"
                  onClick={() => handleCancelBooking(booking.id)}
                >
                  Cancel
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VenueBooking;
