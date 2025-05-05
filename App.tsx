// App.tsx
import React from 'react';
import { Route } from 'react-router-dom';
import VerifyEmail from './components/VerifyEmail';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';

<>
  <Route path="/verify-email" element={<VerifyEmail />} />
  <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
</>