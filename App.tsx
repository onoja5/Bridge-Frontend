// App.tsx
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import VerifyEmail from './components/VerifyEmail';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';

<BrowserRouter>
  <Route path="/verify-email" element={<VerifyEmail />} />
  <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
</BrowserRouter>