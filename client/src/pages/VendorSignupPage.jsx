import React, { useState } from 'react'; // 👈 add useState here

const VendorSignupPage = ({ cart }) => {
  const [submitted, setSubmitted] = useState(false); // 👈 New: track submission

  const handleSubmit = (e) => {
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation... (keep your existing nav here) */}

      {/* Main Content */}
      <main style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '3rem 1rem' }}>
        <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', maxWidth: '600px', width: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          
          {/* 👇 New: show success message if submitted */}
          {submitted ? (
            <div style={{ textAlign: 'center', color: '#2b9348' }}>
              <h1>Thank You!</h1>
              <p>Your vendor application has been received.</p>
              <p>We'll be in touch shortly!</p>
            </div>
          ) : (
            <>
              <h1 style={{ textAlign: 'center', fontSize: '2rem', color: '#2b9348', marginBottom: '1rem' }}>Become a Vendor</h1>
              <p style={{ textAlign: 'center', color: '#555', marginBottom: '2rem' }}>
                Join our marketplace and grow your local business. It’s fast, easy, and free!
              </p>

              {/* 👇 Add onSubmit={handleSubmit} */}
              <form action="https://formspree.io/f/movdqjgp" method="POST" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" name="businessName" required placeholder="Business Name" style={inputBox} />
                <input type="email" name="email" required placeholder="you@example.com" style={inputBox} />
                <input type="tel" name="phone" placeholder="123-456-7890" style={inputBox} />
                <input type="url" name="website" placeholder="https://yourbusiness.com" style={inputBox} />
                <textarea name="description" required placeholder="Tell us about your business..." rows="4" style={inputBox} />
                <button type="submit" style={submitButtonStyle}>Submit Application</button>
              </form>
            </>
          )}
        </div>
      </main>

      {/* Footer... (keep your existing footer) */}
    </div>
  );
};































