// src/pages/dashboards/mentorship/MentorDetail.tsx
import React, { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { getMentorDetail } from '@/services/mentorDetail.api';
import { bookSession } from '@/services/sessions.api'; // Import the new API function
import DefaultAvatar from '@/assets/images/noAvatar.png';
import { MentorDetailResponse } from '@/types/mentors.types';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import Button from '@/components/ui/Button'; // Assuming you have a Button component
import MentorSchedule from '@/components/main/Mentorship/MentorSchedule';

const MentorDetail: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const navigate = useNavigate();
    const { toast } = useToast();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bookingDetails, setBookingDetails] = useState({
        date: '',
        time: '',
        reason: '',
    });

    const { data, isLoading, error } = useQuery<MentorDetailResponse, Error>({
        queryKey: ['mentorDetail', userId],
        queryFn: () => getMentorDetail(userId!),
        enabled: !!userId,
    });

    const bookSessionMutation = useMutation({
        mutationFn: bookSession,
        onSuccess: (response) => {
            if (response.success) {
                toast({
                    title: 'Success',
                    description: 'Session booked successfully!',
                });
                setIsModalOpen(false);
            }
        },
        onError: () => {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Failed to book session. Please try again.',
            });
        },
    });

    const handleBackClick = () => {
        navigate('/mentorships');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setBookingDetails((prev) => ({ ...prev, [name]: value }));
    };

    const handleBookSession = () => {
        if (!bookingDetails.date || !bookingDetails.time || !bookingDetails.reason) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Please fill in all fields.',
            });
            return;
        }

        bookSessionMutation.mutate({
            mentorId: userId!,
            date: bookingDetails.date,
            time: bookingDetails.time,
            reason: bookingDetails.reason,
        });
    };

    const handleAddToCalendar = () => {
        const event = {
            title: `Session with ${mentor.firstName} ${mentor.lastName}`,
            start: `${bookingDetails.date}T${bookingDetails.time}`,
            details: bookingDetails.reason,
        };
        const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${encodeURIComponent(event.start)}&details=${encodeURIComponent(event.details)}`;
        window.open(url, '_blank');
    };

    if (isLoading) {
        return (
            <div className="p-6 bg-white min-h-screen">
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-300 rounded-full animate-pulse mb-4" />
                    <div className="w-3/4 h-6 bg-gray-300 animate-pulse mb-2" />
                    <div className="w-1/2 h-4 bg-gray-300 animate-pulse mb-4" />
                    <div className="w-full h-4 bg-gray-300 animate-pulse mb-2" />
                </div>
            </div>
        );
    }

    if (error || !data?.success) {
        return (
            <div className="p-6 bg-white min-h-screen text-center">
                <p className="text-red-500">Error loading mentor details. Please try again.</p>
            </div>
        );
    }

    const mentor = data.data;

    return (
        <div className="p-4 sm:p-6 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                    <button
                        onClick={handleBackClick}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Back to Mentorships
                    </button>
                </div>

                <div className="flex flex-col items-center mb-6">
                    <img
                        src={mentor.profileImageUrl || DefaultAvatar}
                        alt={`${mentor.firstName} ${mentor.lastName}`}
                        className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
                    />
                    <h1 className="text-2xl font-bold text-gray-900">{`${mentor.firstName} ${mentor.lastName}`}</h1>
                    <p className="text-sm text-gray-600">{mentor.email}</p>
                    <p className="text-md text-blue-600 mt-2">{mentor.specialty}</p>
                </div>

                {/* Book Session Button */}
                <div className="md:col-span-2 flex justify-center mt-4">
                    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                        <DialogTrigger asChild>
                            <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-md mb-10 text-[1rem] font-medium">
                                Book Session
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-white">
                            <DialogHeader>
                                <DialogTitle>Book a Session</DialogTitle>
                                <DialogDescription>
                                    Schedule a session with {mentor.firstName} {mentor.lastName}.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid gap-2">
                                    <label htmlFor="date" className="text-sm font-medium">
                                        Date
                                    </label>
                                    <input
                                        id="date"
                                        name="date"
                                        type="date"
                                        value={bookingDetails.date}
                                        onChange={handleInputChange}
                                        className="border rounded-md p-2 w-full"
                                        min={new Date().toISOString().split('T')[0]} // Prevent past dates
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <label htmlFor="time" className="text-sm font-medium">
                                        Time
                                    </label>
                                    <input
                                        id="time"
                                        name="time"
                                        type="time"
                                        value={bookingDetails.time}
                                        onChange={handleInputChange}
                                        className="border rounded-md p-2 w-full"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <label htmlFor="reason" className="text-sm font-medium">
                                        Reason for Session
                                    </label>
                                    <textarea
                                        id="reason"
                                        name="reason"
                                        value={bookingDetails.reason}
                                        onChange={handleInputChange}
                                        className="border rounded-md p-2 w-full h-24 resize-none"
                                        placeholder="e.g., Discuss career goals in Machine Learning"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button
                                    onClick={handleAddToCalendar}
                                    className="bg-gray-200 text-gray-800 hover:bg-gray-300"
                                >
                                    Add to Calendar
                                </Button>
                                <Button
                                    onClick={handleBookSession}
                                    className="bg-blue-600 text-white hover:bg-blue-700"
                                    disabled={bookSessionMutation.isPending}
                                >
                                    {bookSessionMutation.isPending ? 'Booking...' : 'Book Session'}
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold mb-2">About</h2>
                        <p className="text-sm text-gray-700">Role: {mentor.role}</p>
                        <p className="text-sm text-gray-700">
                            Joined: {new Date(mentor.createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-gray-700">
                            Last Active: {new Date(mentor.last_sign_in).toLocaleDateString()}
                        </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg shadow">
                        <h2 className="text-lg font-semibold mb-2">Plans</h2>
                        <p className="text-sm text-gray-700">Lite Plan: ${mentor.LitePlanPrice}</p>
                        <p className="text-sm text-gray-700">Standard Plan: ${mentor.StandardPlanPrice}</p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg shadow md:col-span-2">
                        <h2 className="text-lg font-semibold mb-2">Expertise</h2>
                        <ul className="list-disc list-inside text-sm text-gray-700">
                            {mentor.industryExpertise.length > 0 ? (
                                mentor.industryExpertise.map((expertise: string, index: number) => (
                                    <li key={index}>{expertise}</li>
                                ))
                            ) : (
                                <li>No expertise listed</li>
                            )}
                        </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg shadow md:col-span-2">
                        <h2 className="text-lg font-semibold mb-2">Specialization Areas</h2>
                        <ul className="list-disc list-inside text-sm text-gray-700">
                            {mentor.specializationAreas.length > 0 ? (
                                mentor.specializationAreas.map((area: string, index: number) => (
                                    <li key={index}>{area}</li>
                                ))
                            ) : (
                                <li>No specialization areas listed</li>
                            )}
                        </ul>
                    </div>

                    {/* Mentor Schedule */}
                    <div className="md:col-span-2">
                        <MentorSchedule mentorId={userId!} />
                    </div>


                </div>
            </div>
        </div>
    );
};

export default MentorDetail;