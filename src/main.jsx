import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

// Handle Clerk authorization errors
const handleClerkError = (error) => {
  if (error?.errors?.some(e => e.code === "authorization_invalid")) {
    window.location.replace('/sign-in'); // Redirect to sign-in on authorization error
  }
};

createRoot(document.getElementById('root')).render(
  <ClerkProvider 
    publishableKey={PUBLISHABLE_KEY} 
    afterSignOutUrl="/sign-in" 
    signInUrl='/sign-in' 
    signUpUrl='/sign-up'
    onError={handleClerkError} // Handles Clerk errors automatically
  >
    <StrictMode>
      <App />
    </StrictMode>
  </ClerkProvider>
);
