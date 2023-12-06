import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const VenueBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState('');

  useEffect(() => {
    // Fetch all venue bookings when the component mounts
    fetchAllVenueBookings();
  }, []);

  const fetchAllVenueBookings = async () => {
    try {
      const response = await fetch('http://localhost:5000/all-venue-bookings');
      const data = await response.json();
      console.log('Fetched Venue Bookings:', data);
      setBookings(data);
    } catch (error) {
      console.error('Error fetching venue bookings:', error);
    }
  };
  
  const handleNewBookingChange = (e) => {
    setNewBooking(e.target.value);
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
  
    const bookingNumber = parseInt(newBooking, 10);
    if (isNaN(bookingNumber) || bookingNumber < 1 || bookingNumber > 12) {
      alert('Please enter a valid venue number between 1 and 12.');
      return;
    }
  
    // Check if the venue is already booked
    if (bookings.some((booking) => booking.venueNumber === bookingNumber)) {
      alert('This venue is already booked. Please choose another one.');
      return;
    }
  
    try {
      // Make a POST request to add the venue booking
      const response = await fetch('http://localhost:5000/submit-venue-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ venueNumber: bookingNumber }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }
  
      // Update the venue bookings state with the new booking
      const result = await response.json();
      setBookings([...bookings, result]);
      setNewBooking('');
    } catch (error) {
      console.error('Error adding venue booking:', error.message);
      alert('Error adding venue booking. Please try again.');
    }
  };
  

  const handleCancelBooking = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/cancel-venue-booking/${id}`, {
        method: 'DELETE',
      });

      // Check if the response status is 200 OK, indicating successful cancellation
      if (response.ok) {
        fetchAllVenueBookings(); // Refresh venue bookings after canceling one
      } else {
        const errorData = await response.json();
        console.error('Failed to cancel venue booking:', errorData);
      }
    } catch (error) {
      console.error('Error canceling venue booking:', error);
    }
  };

  return (
    <div className="bg-secondary text-secondary px-4 py-3">
      <div className="py-0">
        <div className='Heading text-center'> <h1 className="display-5 fw-bold text-white">Book A Venue</h1> </div>
        <div className="col-lg-6 py-2 px-2 rounded-4 bg-dark mx-auto border-light">
          <form className="fs-5 mt-3 mb-2 text-center" onSubmit={handleBookingSubmit}>
            <label className="pb-2">
              Enter Booking venue (1-12):
              <input
                type="number"
                value={newBooking}
                onChange={handleNewBookingChange}
                min="1"
                max="12"
              />
            </label>
            <button type="submit" className="btn btn-primary btn-md mx-4 px-4 fw-bold">
              Book
            </button>
          </form>
          <ul>
            {bookings.map((booking) => (
              <li key={booking._id}>
                {booking.venueNumber}
                <button
                  type="button"
                  className="btn btn-secondary btn-sm mx-4 my-2 px-4"
                  onClick={() => handleCancelBooking(booking._id)}
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
