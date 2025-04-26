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
          {isNewCustomer ? 'Create Your Customer Account' : 'Sign In or Create Account'}
        </h2>
  
        <form onSubmit={handleSignInSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {isNewCustomer && (
            <input
              type="text"
              placeholder="Full Name"
              style={{
                padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px', fontSize: '1rem'
              }}
              required
            />
          )}
          
          <input
            type="email"
            placeholder="Enter mobile number or email"
            value={signInEmail}
            onChange={(e) => setSignInEmail(e.target.value)}
            style={{
              padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px', fontSize: '1rem'
            }}
            required
          />
  
          {isNewCustomer && (
            <input
              type="password"
              placeholder="Create password"
              style={{
                padding: '0.75rem', border: '1px solid #ccc', borderRadius: '8px', fontSize: '1rem'
              }}
              required
            />
          )}
  
          <button
            type="submit"
            style={{
              backgroundColor: '#2b9348', color: '#fff', padding: '0.75rem',
              borderRadius: '8px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer'
            }}
          >
            {isNewCustomer ? 'Create your account' : 'Continue'}
          </button>
        </form>
  
        {/* Terms and Conditions Text */}
        <p style={{ fontSize: '0.75rem', color: '#777', marginTop: '1rem' }}>
          By continuing, you agree to LocalVendorsBazaar's Conditions of Use and Privacy Notice.
        </p>
  
        {!isNewCustomer && (
  <p
    onClick={() => setIsNewCustomer(true)}
    style={{
      marginTop: '1rem',
      fontSize: '0.85rem',
      color: '#007185',
      textDecoration: 'underline',
      cursor: 'pointer'
    }}
  >
    New customer? Start here.
  </p>
)}

  
        {/* Need Help Link */}
        <p style={{
          fontSize: '0.75rem',
          color: '#007185',
          marginTop: '1rem',
          textDecoration: 'underline',
          cursor: 'pointer'
        }}>
          Need help?
        </p>
  
        {/* Cancel Button */}
        <button
          onClick={() => {
            setIsSignInModalOpen(false);
            setIsNewCustomer(false);
          }}
          style={{
            marginTop: '1.5rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#ccc',
            color: '#000',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  )}
  
  
  
  
  
