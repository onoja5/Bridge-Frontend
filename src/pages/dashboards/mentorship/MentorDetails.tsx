import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DefaultAvatar from '@/assets/images/noAvatar.png'; // Default avatar image

// Adjust Session type to handle null values for selectedDate
interface Session {
  date: Date;
  title: string;
  note: string;
}

const MentorDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { profileImage, firstName, lastName, name, email, specialty } = location.state || {};
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sessionTitle, setSessionTitle] = useState('');
  const [sessionNote, setSessionNote] = useState('');
  const [bookedSessions, setBookedSessions] = useState<Session[]>([]);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleBookSessionClick = () => {
    setIsModalOpen(true); // Open the booking modal
  };

  // Investigate and fix date type compatibility
  const handleDateChange = (date: any) => {
    if (date instanceof Date || date === null) {
      setSelectedDate(date);
    } else if (Array.isArray(date) && date.length > 0 && date[0] instanceof Date) {
      setSelectedDate(date[0]);
    }
  };

  const handleBookSession = () => {
    if (selectedDate) {
      const newSession: Session = {
        date: selectedDate,
        title: sessionTitle,
        note: sessionNote,
      };

      // Update booked sessions state
      setBookedSessions((prev) => [...prev, newSession]);

      // Close the modal after booking
      setIsModalOpen(false);

      // Simulate email notification
      console.log('Booking confirmed:', newSession);

      // Highlight the booked slot on the calendar (example logic)
      alert('Session booked successfully!');
    }
  };

  const isSlotBooked = (date: Date): boolean => {
    return bookedSessions.some((session) => session.date.toDateString() === date.toDateString());
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="flex justify-between items-center bg-white p-6">
        <button onClick={handleBackClick} className="text-blue-600 font-medium">← Back</button>
        <h1 className="text-2xl font-bold">Mentor Details</h1>
        <button
          onClick={handleBookSessionClick}
          className="bg-blue-600 text-white font-medium px-4 py-2 rounded-md"
        >
          Book a Session
        </button>
      </div>

      {/* Mentor Details Section */}
      <div className="flex justify-between items-center p-6 mt-8 bg-white rounded-lg">
        {/* Mentor Info */}
        <div className='flex-col justify-center border-r px-4 w-full'>
          <img
            src={profileImage || DefaultAvatar}
            alt={name}
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-bold text-center">{firstName} {lastName}</h2>
          <p className="text-gray-600 text-center">{email}</p>
          <p className="text-gray-600 text-center">{specialty}</p>
        </div>

        {/* Divider */}
        <div className="border-r border-gray-300 my-6"></div>

        {/* Booking Time */}
        <div className='flex-col justify-center px-6 w-full h-full'>
          <h3 className="text-lg font-bold mb-4">Available Times</h3>
          <ul className="text-gray-600">
            <li>Monday: 9 AM - 12 PM</li>
            <li>Tuesday: 9 AM - 12 PM</li>
            <li>Wednesday: 2 PM - 5 PM</li>
            <li>Thursday: 9 AM - 12 PM</li>
            <li>Friday: 10 AM - 1 PM</li>
          </ul>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="p-6">
        <h3 className="text-lg font-bold mb-4">Schedule a Session</h3>
        <Calendar
          onChange={(date) => {
            handleDateChange(date);
            setIsModalOpen(true); // Open the booking modal
          }}
          value={selectedDate}
          tileClassName={({ date }) =>
            isSlotBooked(date) ? 'bg-blue-600 text-white' : ''
          }
        />
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 modal-overlay bg-[#374151] bg-opacity-80 flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Book a Session</h2>
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-600">Selected Date: {selectedDate?.toDateString()}</p>
              <button
                onClick={() => setShowCalendar(!showCalendar)}
                className="text-blue-600 hover:underline flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 2.25v1.5m7.5-1.5v1.5M3.75 9h16.5m-16.5 0v10.5a2.25 2.25 0 002.25 2.25h12.75a2.25 2.25 0 002.25-2.25V9m-16.5 0h16.5m-16.5 0V6.75A2.25 2.25 0 016 4.5h12a2.25 2.25 0 012.25 2.25V9"
                  />
                </svg>
              </button>
            </div>
            {showCalendar && (
              <div className="absolute bg-white border border-gray-300 rounded-md shadow-lg p-4 z-50">
                <Calendar
                  onChange={(date) => {
                    setSelectedDate(date);
                    setShowCalendar(false); // Close the calendar after selecting a date
                  }}
                  value={selectedDate}
                />
              </div>
            )}
            <input
              type="text"
              placeholder="Session Title"
              value={sessionTitle}
              onChange={(e) => setSessionTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
            <textarea
              placeholder="Leave a note for the mentor"
              value={sessionNote}
              onChange={(e) => setSessionNote(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            ></textarea>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md mb-4 w-full"
              onClick={() => alert('Syncing to Google Calendar...')}
            >
              Sync to Google Calendar
            </button>
            <div className="flex justify-between">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleBookSession}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Book Session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorDetails;