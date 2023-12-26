import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './lnmiit2_gs.jpeg'; // Replace with the actual path to your image

const VenueBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [newBooking, setNewBooking] = useState('');
  const [showList, setShowList] = useState(false);
  const [authKeyBookLT, setAuthKeyBookLT] = useState('book');
  const [authKeyBookingActions, setAuthKeyBookingActions] = useState('view');

  // Additional state variables for counts
  const [acceptedCount, setAcceptedCount] = useState(0);
  const [rejectedCount, setRejectedCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    fetchAllVenueBookings();
  }, []);

  useEffect(() => {
    // Update counts whenever bookings change
    updateBookingCounts();
  }, [bookings]);

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

  const handleNewBookingChange = async (e) => {
    setNewBooking(e.target.value);
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    // Prompt for authentication key when booking LT
    const enteredKey = prompt('Enter the authentication key for booking LT:');
    if (enteredKey !== null && enteredKey === authKeyBookLT) {
      const bookingNumber = parseInt(newBooking, 10);
      if (isNaN(bookingNumber) || bookingNumber < 1 || bookingNumber > 12) {
        alert('Please enter a valid venue number between 1 and 12.');
        return;
      }

      if (bookings.some((booking) => booking.venueNumber === bookingNumber)) {
        alert('This venue is already booked. Please choose another one.');
        return;
      }

      try {
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

        const result = await response.json();
        setBookings([...bookings, result]);
        setNewBooking('');
      } catch (error) {
        console.error('Error adding venue booking:', error.message);
        alert('Error adding venue booking. Please try again.');
      }
    } else {
      alert('Authentication failed. Please try again.');
    }
  };

  const handleAcceptBooking = async (id) => {
    // Prompt for authentication key when accepting booking
    const enteredKey = prompt('Enter the authentication key for accepting booking:');
    if (enteredKey !== null && enteredKey === authKeyBookingActions) {
      try {
        const response = await fetch(`http://localhost:5000/accept-venue-booking/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error);
        }

        const updatedBookings = bookings.map((booking) =>
          booking._id === id ? { ...booking, status: 'accepted' } : booking
        );

        setBookings(updatedBookings);
      } catch (error) {
        console.error('Error accepting venue booking:', error.message);
      }
    } else {
      alert('Authentication failed. Please try again.');
    }
  };

  const handleRejectBooking = async (id) => {
    // Prompt for authentication key when rejecting booking
    const enteredKey = prompt('Enter the authentication key for rejecting booking:');
    if (enteredKey !== null && enteredKey === authKeyBookingActions) {
      try {
        const response = await fetch(`http://localhost:5000/cancel-venue-booking/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          const updatedBookings = bookings.filter((booking) => booking._id !== id);
          setBookings(updatedBookings);
        } else {
          const errorData = await response.json();
          console.error('Failed to reject venue booking:', errorData);
        }
      } catch (error) {
        console.error('Error rejecting venue booking:', error);
      }
    } else {
      alert('Authentication failed. Please try again.');
    }
  };

  const updateBookingCounts = () => {
    const accepted = bookings.filter((booking) => booking.status === 'accepted').length;
    const rejected = bookings.filter((booking) => booking.status === 'rejected').length;
    const pending = bookings.filter((booking) => !booking.status).length;

    setAcceptedCount(accepted);
    setRejectedCount(rejected);
    setPendingCount(pending);
  };

  const handleShowList = () => {
    // Prompt for authentication key
    const enteredKey = prompt('Enter the authentication key:');
    if (enteredKey !== null && enteredKey.trim().toLowerCase() === authKeyBookingActions.toLowerCase()) {
      setShowList(!showList);
    } else {
      alert('Authentication failed. Please try again.');
    }
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div bg-dark >
    <div style={backgroundStyle} className="text-white px-4 py-3">
      <div className="py-0">
        <div className="Heading text-center">
          <h1 className="display-5 text-black fw-bold">Book A Venue</h1>
        </div>
        <div className="col-lg-6 py-2 px-2 rounded-4 bg-dark mx-auto border-light">
          <form className="fs-5 mt-3 mb-2 text-center" onSubmit={handleBookingSubmit}>
            <div className="mb-3">
              <label className="form-label">Enter Booking venue (1-12):</label>
              <input
                type="number"
                className="form-control"
                value={newBooking}
                onChange={handleNewBookingChange}
                min="1"
                max="12"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-md px-4 fw-bold">
              Book
            </button>
          </form>
        </div>
        <div className="col-lg-6 py-2 px-2 rounded-4 bg-dark mx-auto border-light">
          <h2 className="mb-3">Booking Actions</h2>
          <button
            className="btn btn-secondary btn-md mb-3 px-4 fw-bold"
            onClick={handleShowList}
          >
            {showList ? 'Hide Booking Actions' : 'Show Booking Actions'}
          </button>
          {showList && (
            <ul className="list-group">
              {bookings.map((booking) => (
                <li key={booking._id} className="list-group-item">
                  <span className="fw-bold">lt-{booking.venueNumber}</span>
                  {booking.status === 'accepted' ? (
                    <span className="text-success float-end">Accepted</span>
                  ) : booking.status === 'rejected' ? (
                    <span className="text-danger float-end">Rejected</span>
                  ) : (
                    <div className="btn-group float-end" role="group">
                      <button
                        type="button"
                        className="btn btn-success btn-sm"
                        onClick={() => handleAcceptBooking(booking._id)}
                      >
                        Accept
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRejectBooking(booking._id)}
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-lg-6 py-2 px-2 rounded-4 bg-dark mx-auto border-light">
          <h2 className="mb-3">Booked LTs</h2>
          {/* Display details of each booked LT */}
          <ul className="list-group" style={{ maxHeight: "5rem", overflowY: "scroll" }}>
            {bookings.map((booking) => (
              <li key={booking._id} className="list-group-item">
                <span className="fw-bold">lt-{booking.venueNumber}</span>
                {booking.status === 'accepted' ? (
                  <span className="text-success float-end">Accepted</span>
                ) : booking.status === 'rejected' ? (
                  <span className="text-danger float-end">Rejected</span>
                ) : (
                  <span className="text-info float-end">Pending</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    </div>
  );
};

export default VenueBooking;
