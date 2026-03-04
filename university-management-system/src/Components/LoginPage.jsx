import React from 'react'
import './LoginPage.css'

export default function LoginPage() {
  return (
    <div>
      <div id="main-page">
      <div id="container">
        <div id="photo-holder">
            <div id="text">SIMT Engineering College


            </div>
        </div>
        <div id="text-holder">
          <div id="already-have-an-account-box">
            Already have an account?
            <button>Sign In</button>
          </div>
          <div id="create-account-box">
            <div id="create-text">Create Account</div>
            <div id="space"></div>
            <div id="f-e-s">
              <div id="full-name">
                <input type="text" placeholder="Full Name" />
              </div>
              <div id="email">
                <input type="text" placeholder="Email" />
              </div>
              <div id="student-id">
                <input type="text" placeholder="Student ID" />
              </div>
            </div>
          </div>
          <div id="space"></div>
          <div id="forgot-div">
            <div id="forgot">
              <a href="#">Forgot Password or Username</a>
            </div>
          </div>
          <div id="space"></div>
          <div id="btn-signup">
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
