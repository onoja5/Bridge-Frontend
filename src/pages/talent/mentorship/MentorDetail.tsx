// src/pages/dashboards/mentorship/MentorDetail.tsx
import React, { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';
import { getMentorDetail } from '@/services/mentorDetail.api';
import { bookSession } from '@/services/sessions.api';
import DefaultAvatar from '@/assets/images/noAvatar.png';
import { MentorDetailResponse } from '@/types/mentors.types';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import Button from '@/components/ui/Button';
import MentorSchedule from '@/components/main/Mentorship/MentorSchedule';
import { FaStar, FaRegCopy } from 'react-icons/fa';
import VisaLogo from '@/assets/images/visa-logo.png';
import VerveLogo from '@/assets/images/verve-logo.png';
import MastercardLogo from '@/assets/images/mastercard-logo.png';

// Utility function for copying to clipboard
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

const MentorDetail: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Booking Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1); // 1: Booking Details, 2: Plan Selection, 3: Payment Method, 4: Payment Details, 5: Success
  const [bookingDetails, setBookingDetails] = useState({
    date: '',
    time: '',
    reason: '',
  });
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'transfer' | 'card' | null>(null);
  const [cardDetails, setCardDetails] = useState({
    cardholderName: '',
    cardNumber: '',
    cvv: '',
    expiryDate: '',
  });

  // Rating Modal State
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
  const [rating, setRating] = useState<number | null>(null);
  const [reviewType, setReviewType] = useState<'positive' | 'negative' | null>(null);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([
    { id: 1, rating: 4, review: 'Great session!', user: 'User1' },
    { id: 2, rating: 5, review: 'Very helpful!', user: 'User2' },
    { id: 3, rating: 3, review: 'Good, but could be better.', user: 'User3' },
    { id: 4, rating: 5, review: 'Amazing mentor!', user: 'User4' },
    { id: 5, rating: 4, review: 'Really insightful.', user: 'User5' },
    { id: 6, rating: 2, review: 'Not what I expected.', user: 'User6' },
  ]);
  const [showAllReviews, setShowAllReviews] = useState(false);

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
        setStep(1); // Reset to first step
        setBookingDetails({ date: '', time: '', reason: '' });
        setSelectedPlan(null);
        setPaymentMethod(null);
        setCardDetails({ cardholderName: '', cardNumber: '', cvv: '', expiryDate: '' });
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

  // Rating Functions
  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, curr) => acc + curr.rating, 0);
    return sum / reviews.length;
  };

  const handleRating = (rate: number) => setRating(rate);
  const handleReviewType = (type: 'positive' | 'negative') => setReviewType(type);
  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 1000) setReview(e.target.value);
  };

  const handleSubmitRating = () => {
    if (rating && reviewType && review) {
      const newReview = { id: Date.now(), rating, review, user: 'CurrentUser' };
      setReviews([...reviews, newReview]);
      setRating(null);
      setReviewType(null);
      setReview('');
      setIsRatingModalOpen(false);
      toast({ title: 'Success', description: 'Rating submitted!' });
    } else {
      toast({ variant: 'destructive', title: 'Error', description: 'Please fill in all fields.' });
    }
  };

  // Booking Modal Functions
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (step === 1) {
      setBookingDetails((prev) => ({ ...prev, [name]: value }));
    } else if (step === 4 && paymentMethod === 'card') {
      setCardDetails((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateBookingDetails = () => {
    return bookingDetails.date && bookingDetails.time && bookingDetails.reason;
  };

  const validateCardDetails = () => {
    const { cardholderName, cardNumber, cvv, expiryDate } = cardDetails;
    const cardNumberValid = /^(?:4[0-9]{12}(?:[0-9]{3})?|506[0-9]{14}|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11})$/.test(cardNumber.replace(/\s/g, ''));
    return cardholderName && cardNumberValid && cvv && expiryDate;
  };

  const getCardProvider = (cardNumber: string) => {
    const number = cardNumber.replace(/\s/g, '');
    if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(number)) return 'Visa';
    if (/^506[0-9]{14}$/.test(number)) return 'Verve'; // Placeholder pattern for Verve
    if (/^5[1-5][0-9]{14}$/.test(number)) return 'Mastercard';
    if (/^3[47][0-9]{13}$/.test(number)) return 'American Express';
    if (/^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(number)) return 'Diners Club';
    return null;
  };

  const handleNext = () => {
    if (step === 1 && !validateBookingDetails()) {
      toast({ variant: 'destructive', title: 'Error', description: 'Please fill in all fields.' });
      return;
    }
    if (step === 2 && !selectedPlan) {
      toast({ variant: 'destructive', title: 'Error', description: 'Please select a plan.' });
      return;
    }
    if (step === 3 && !paymentMethod) {
      toast({ variant: 'destructive', title: 'Error', description: 'Please select a payment method.' });
      return;
    }
    if (step === 4 && paymentMethod === 'card' && !validateCardDetails()) {
      toast({ variant: 'destructive', title: 'Error', description: 'Please fill in all card details correctly.' });
      return;
    }
    setStep(step + 1);
  };

  const handlePrevious = () => setStep(step - 1);

  const handleBookSession = () => {
    if (paymentMethod === 'transfer') {
      if (!selectedPlan) {
        toast({ variant: 'destructive', title: 'Error', description: 'Please select a plan.' });
        return;
      }
      toast({ title: 'Success', description: 'Payment validated (simulated). Session booked!' });
      bookSessionMutation.mutate({
        mentorId: userId!,
        date: bookingDetails.date,
        time: bookingDetails.time,
        reason: bookingDetails.reason,
        plan: selectedPlan,
      });
    } else if (paymentMethod === 'card' && validateCardDetails()) {
      if (!selectedPlan) {
        toast({ variant: 'destructive', title: 'Error', description: 'Please select a plan.' });
        return;
      }
      toast({ title: 'Success', description: 'Payment validated (simulated). Session booked!' });
      bookSessionMutation.mutate({
        mentorId: userId!,
        date: bookingDetails.date,
        time: bookingDetails.time,
        reason: bookingDetails.reason,
        plan: selectedPlan,
      });
    }
  };

  const handleAddToCalendar = () => {
    const event = {
      title: `Session with ${data?.data.firstName} ${data?.data.lastName}`,
      start: `${bookingDetails.date}T${bookingDetails.time}`,
      details: bookingDetails.reason,
    };
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${encodeURIComponent(event.start)}&details=${encodeURIComponent(event.details)}`;
    window.open(url, '_blank');
  };

  if (isLoading) return <div className="p-6 bg-white min-h-screen">Loading...</div>;
  if (error || !data?.success) return <div className="p-6 bg-white min-h-screen">Error loading mentor details.</div>;

  const mentor = data.data;

  // Prepare plans from backend data
  const plans = [
    `Lite Plan: $${mentor.LitePlanPrice}`,
    `Standard Plan: $${mentor.StandardPlanPrice}`,
  ];

  return (
    <div className="p-4 sm:p-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <button
            onClick={() => navigate('/talent/mentorship')}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Mentorships
          </button>
        </div>

        <div className="flex flex-col items-center mb-6">
          <img src={mentor.profileImageUrl || DefaultAvatar} alt={`${mentor.firstName} ${mentor.lastName}`} className="w-32 h-32 rounded-full object-cover mb-4 shadow-md" />
          <h1 className="text-2xl font-bold text-gray-900">{`${mentor.firstName} ${mentor.lastName}`}</h1>
          <p className="text-sm text-gray-600">{mentor.email}</p>
          <p className="text-md text-blue-600 mt-2">{mentor.specialty}</p>
          <div className="flex items-center gap-2 mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={`w-5 h-5 ${i < Math.round(calculateAverageRating()) ? 'text-yellow-500' : 'text-gray-300'}`} />
            ))}
            <span className="text-sm text-gray-600">({calculateAverageRating().toFixed(1)})</span>
          </div>
        </div>

        <div className="md:col-span-2 flex justify-center gap-4 mt-4">
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-2 rounded-md mb-10 text-[1rem] font-medium">
                Book Session
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white max-w-md">
              <DialogHeader>
                <DialogTitle>
                  {step === 1 ? 'Book a Session' : step === 2 ? 'Select Plan' : step === 3 ? 'Choose Payment Method' : step === 4 ? 'Payment Details' : 'Payment Successful'}
                </DialogTitle>
                <DialogDescription>
                  {step === 1 && `Schedule a session with ${mentor.firstName} ${mentor.lastName}.`}
                  {step === 2 && 'Choose a plan for your session.'}
                  {step === 3 && 'Select your preferred payment method.'}
                  {step === 4 && (paymentMethod === 'transfer' ? 'Transfer payment details.' : 'Enter your card details.')}
                  {step === 5 && 'Your payment has been successfully processed!'}
                </DialogDescription>
              </DialogHeader>
              {step === 1 && (
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <label htmlFor="date" className="text-sm font-medium">Date</label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={bookingDetails.date}
                      onChange={handleInputChange}
                      className="border rounded-md p-2 w-full"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="time" className="text-sm font-medium">Time</label>
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
                    <label htmlFor="reason" className="text-sm font-medium">Reason for Session</label>
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
              )}
              {step === 2 && (
                <div className="grid gap-4 py-4">
                  {plans.map((plan) => (
                    <button
                      key={plan}
                      onClick={() => setSelectedPlan(plan)}
                      className={`border ${selectedPlan === plan ? 'border-blue-600' : 'border-gray-300'} rounded-md p-4 text-sm font-medium flex justify-between items-center hover:bg-gray-50 transition-colors`}
                    >
                      <span>{plan}</span>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          checked={selectedPlan === plan}
                          onChange={() => setSelectedPlan(plan)}
                          className="hidden"
                        />
                        <span className={`text-xl ${selectedPlan === plan ? 'text-blue-600' : 'text-gray-400'}`}>
                          {selectedPlan === plan ? '●' : '○'}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
              {step === 3 && (
                <div className="grid gap-4 py-4">
                  <button
                    onClick={() => setPaymentMethod('transfer')}
                    className={`border rounded-md p-4 text-sm font-medium flex items-center justify-between hover:bg-gray-50 transition-colors ${paymentMethod === 'transfer' ? 'border-blue-600' : 'border-gray-300'}`}
                  >
                    <span>Transfer</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`border rounded-md p-4 text-sm font-medium flex items-center justify-between hover:bg-gray-50 transition-colors ${paymentMethod === 'card' ? 'border-blue-600' : 'border-gray-300'}`}
                  >
                    <span>Pay with Card</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8h16v10zm-6-1h-2v-2h2v2zm2-4h-4V9h4v4z"/>
                    </svg>
                  </button>
                </div>
              )}
              {step === 4 && (
                <div className="grid gap-4 py-4">
                  {paymentMethod === 'transfer' && (
                    <div>
                      <p className="text-sm font-medium">Transfer to:</p>
                      <div className="flex items-center gap-2 mt-2">
                        <p className="text-sm">Account Name: {mentor.firstName} {mentor.lastName}</p>
                        <button onClick={() => { copyToClipboard(`${mentor.firstName} ${mentor.lastName}`); toast({ title: 'Copied', description: 'Account name copied!' }); }} className="text-blue-600"><FaRegCopy /></button>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <p className="text-sm">Account Number: 1234567890</p>
                        <button onClick={() => { copyToClipboard('1234567890'); toast({ title: 'Copied', description: 'Account number copied!' }); }} className="text-blue-600"><FaRegCopy /></button>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <p className="text-sm">Bank Name: Zenith Bank</p>
                        <button onClick={() => { copyToClipboard('Zenith Bank'); toast({ title: 'Copied', description: 'Bank name copied!' }); }} className="text-blue-600"><FaRegCopy /></button>
                      </div>
                      <Button onClick={handleBookSession} className="mt-4 bg-blue-600 text-white hover:bg-blue-700">I Have Made Payment</Button>
                    </div>
                  )}
                  {paymentMethod === 'card' && (
                    <div>
                      <div className="grid gap-2">
                        <label htmlFor="cardholderName" className="text-sm font-medium">Cardholder Name</label>
                        <input
                          id="cardholderName"
                          name="cardholderName"
                          type="text"
                          value={cardDetails.cardholderName}
                          onChange={handleInputChange}
                          className="border rounded-md p-2 w-full"
                        />
                      </div>
                      <div className="grid gap-2 mt-2 relative">
                        <label htmlFor="cardNumber" className="text-sm font-medium">Card Number</label>
                        <div className="relative">
                          <input
                            id="cardNumber"
                            name="cardNumber"
                            type="text"
                            value={cardDetails.cardNumber}
                            onChange={handleInputChange}
                            className={`border rounded-md p-2 w-full pr-10 ${!getCardProvider(cardDetails.cardNumber) && cardDetails.cardNumber ? 'border-red-500 text-red-500' : 'border-gray-300'}`}
                          />
                          {cardDetails.cardNumber && getCardProvider(cardDetails.cardNumber) && (
                            <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                              {getCardProvider(cardDetails.cardNumber) === 'Visa' && (
                                <img src={VisaLogo} alt="Visa" className="w-6 h-4" />
                              )}
                              {getCardProvider(cardDetails.cardNumber) === 'Verve' && (
                                <img src={VerveLogo} alt="Verve" className="w-6 h-4" />
                              )}
                              {getCardProvider(cardDetails.cardNumber) === 'Mastercard' && (
                                <img src={MastercardLogo} alt="Mastercard" className="w-6 h-4" />
                              )}
                            </span>
                          )}
                        </div>
                        {cardDetails.cardNumber && !getCardProvider(cardDetails.cardNumber) && <p className="text-red-500 text-sm">Card number is invalid</p>}
                      </div>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <div className="grid gap-2">
                          <label htmlFor="cvv" className="text-sm font-medium">CVV</label>
                          <input
                            id="cvv"
                            name="cvv"
                            type="text"
                            value={cardDetails.cvv}
                            onChange={handleInputChange}
                            className="border rounded-md p-2 w-full"
                          />
                        </div>
                        <div className="grid gap-2">
                          <label htmlFor="expiryDate" className="text-sm font-medium">Expiry Date</label>
                          <input
                            id="expiryDate"
                            name="expiryDate"
                            type="month"
                            value={cardDetails.expiryDate}
                            onChange={handleInputChange}
                            className="border rounded-md p-2 w-full"
                          />
                        </div>
                      </div>
                      <Button onClick={handleBookSession} className="mt-4 bg-blue-600 text-white hover:bg-blue-700" disabled={!validateCardDetails()}>Pay Now</Button>
                    </div>
                  )}
                </div>
              )}
              {step === 5 && (
                <div className="text-center py-4">
                  <p className="text-lg font-medium text-green-600">Payment Successful!</p>
                  <p className="text-sm text-gray-600 mt-2">Your session has been booked. Check your calendar for details.</p>
                  <Button onClick={() => { setIsModalOpen(false); setStep(1); }} className="mt-4 bg-blue-600 text-white hover:bg-blue-700">Close</Button>
                </div>
              )}
              {(step > 1 && step < 5) && (
                <DialogFooter>
                  <Button onClick={handlePrevious} className="bg-gray-200 text-gray-800 hover:bg-gray-300">Previous</Button>
                  {step < 4 ? (
                    <Button onClick={handleNext} className="bg-blue-600 text-white hover:bg-blue-700">{step === 2 ? 'Next' : 'Continue'}</Button>
                  ) : (
                    <Button onClick={handleBookSession} className="bg-blue-600 text-white hover:bg-blue-700" disabled={paymentMethod === 'card' && !validateCardDetails()}>
                      {paymentMethod === 'transfer' ? 'I Have Made Payment' : 'Pay Now'}
                    </Button>
                  )}
                </DialogFooter>
              )}
              {step === 1 && (
                <DialogFooter>
                  <Button onClick={handleAddToCalendar} className="bg-gray-200 text-gray-800 hover:bg-gray-300">Add to Calendar</Button>
                  <Button onClick={handleNext} className="bg-blue-600 text-white hover:bg-blue-700">Next</Button>
                </DialogFooter>
              )}
            </DialogContent>
          </Dialog>
          <Dialog open={isRatingModalOpen} onOpenChange={setIsRatingModalOpen}>
            <DialogTrigger asChild>
              <Button className="bg-yellow-500 text-white hover:bg-yellow-600 px-6 py-2 rounded-md mb-10 text-[1rem] font-medium flex items-center gap-2">
                <FaStar /> Rate Mentor
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white max-w-md">
              <DialogHeader>
                <DialogTitle>Rate Mentor</DialogTitle>
                <DialogDescription>Rate your session with {mentor.firstName} {mentor.lastName}.</DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm font-medium">Session ID: 12345</p>
                <p className="text-sm">User: CurrentUser</p>
                <div className="mt-4">
                  <p className="text-sm font-medium">Rating</p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-6 h-6 cursor-pointer ${rating && i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                        onClick={() => handleRating(i + 1)}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium">Review Type</p>
                  <div className="flex gap-4 mt-2">
                    <button
                      onClick={() => handleReviewType('positive')}
                      className={`px-4 py-2 rounded-md ${reviewType === 'positive' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      Positive
                    </button>
                    <button
                      onClick={() => handleReviewType('negative')}
                      className={`px-4 py-2 rounded-md ${reviewType === 'negative' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      Negative
                    </button>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm font-medium">Review</p>
                  <textarea
                    value={review}
                    onChange={handleReviewChange}
                    className="border rounded-md p-2 w-full h-24 resize-none"
                    placeholder="Write your review (max 1000 characters)"
                  />
                  <p className="text-xs text-gray-500 mt-1">{review.length}/1000</p>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={() => setIsRatingModalOpen(false)} className="bg-gray-200 text-gray-800 hover:bg-gray-300">Cancel</Button>
                <Button onClick={handleSubmitRating} className="bg-blue-600 text-white hover:bg-blue-700" disabled={!rating || !reviewType || !review}>
                  Rate Mentor
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">About</h2>
            <p className="text-sm text-gray-700">Role: {mentor.role}</p>
            <p className="text-sm text-gray-700">Joined: {new Date(mentor.createdAt).toLocaleDateString()}</p>
            <p className="text-sm text-gray-700">Last Active: {new Date(mentor.last_sign_in).toLocaleDateString()}</p>
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

          <div className="md:col-span-2">
            <MentorSchedule mentorId={userId!} />
          </div>

          <div className="md:col-span-2 mt-6 bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Reviews</h2>
            <div className="flex items-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={`w-5 h-5 ${i < Math.round(calculateAverageRating()) ? 'text-yellow-500' : 'text-gray-300'}`} />
              ))}
              <span className="text-sm text-gray-600">({calculateAverageRating().toFixed(1)})</span>
              <span className="text-sm text-gray-600">({reviews.length} reviews)</span>
            </div>
            <div className="space-y-4">
              {reviews.slice(0, showAllReviews ? reviews.length : 5).map((review) => (
                <div key={review.id} className="border-b pb-2">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
                    ))}
                    <span className="text-sm text-gray-600">{review.user}</span>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">{review.review}</p>
                </div>
              ))}
            </div>
            {reviews.length > 5 && (
              <Button onClick={() => setShowAllReviews(!showAllReviews)} className="mt-2 bg-blue-600 text-white hover:bg-blue-700">
                {showAllReviews ? 'See Less' : 'See All'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDetail;