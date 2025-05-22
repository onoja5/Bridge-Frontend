// src/components/main/Mentorship/MentorSchedule.tsx
import React from 'react';

// Mock data (replace with an API call in the future)
const mockSchedule = [
  { date: '2025-05-25', time: '10:00 AM', mentee: 'John Doe', reason: 'Career Advice' },
  { date: '2025-05-26', time: '2:00 PM', mentee: 'Jane Smith', reason: 'Machine Learning Project' },
];

interface MentorScheduleProps {
  mentorId: string;
}

const MentorSchedule: React.FC<MentorScheduleProps> = ({ mentorId }) => {
  // In the future, fetch the schedule using useQuery
  // For now, use mock data
  const schedule = mockSchedule;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">Booking Schedule</h2>
      {schedule.length > 0 ? (
        <div className="space-y-4">
          {schedule.map((session, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 rounded-lg shadow"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">
                    {session.date.split('-')[2]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium">
                    {new Date(session.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <p className="text-sm text-gray-600">{session.time}</p>
                </div>
              </div>
              <div className="mt-2 sm:mt-0">
                <p className="text-sm text-gray-700">Mentee: {session.mentee}</p>
                <p className="text-sm text-gray-700">Reason: {session.reason}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500">No scheduled sessions.</p>
      )}
    </div>
  );
};

export default MentorSchedule;