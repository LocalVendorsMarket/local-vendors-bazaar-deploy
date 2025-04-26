{isSignInModalOpen && (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 2000
    }}>
      <div style={{
        backgroundColor: '#fff', padding: '2rem', borderRadius: '12px',
        width: '90%', maxWidth: '400px', textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2b9348', marginBottom: '1rem' }}>
          Sign In or Create Account
        </h2>
        <form onSubmit={handleSignInSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="email"
            placeholder="Enter email or mobile number"
            value={signInEmail}
            onChange={(e) => setSignInEmail(e.target.value)}
            style={{
              padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px', fontSize: '1rem'
            }}
            required
          />
  
          {/* New customer link using window.location */}
          <p
            onClick={() => window.location.href = '/buyersignup'}
            style={{ fontSize: '0.85rem', color: '#007185', textAlign: 'center', marginTop: '0.5rem', textDecoration: 'underline', cursor: 'pointer' }}
          >
            New customer? Start here.
          </p>
  
          <button
            type="submit"
            style={{
              backgroundColor: '#2b9348', color: '#fff', padding: '0.75rem',
              borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer'
            }}
          >
            Continue
          </button>
        </form>
  
        <p style={{ fontSize: '0.75rem', color: '#777', marginTop: '1rem' }}>
          By continuing, you agree to Local Vendors Bazaar's Terms of Use and Privacy Notice.
        </p>
  
        <button
          onClick={() => setIsSignInModalOpen(false)}
          style={{
            marginTop: '1.5rem', padding: '0.5rem 1rem', backgroundColor: '#ccc',
            color: '#000', borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer'
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  )}
  
  
  
  
