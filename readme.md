# JWT Authentication System

A secure authentication system implementing JWT tokens with email verification and password reset functionality.

## Features

### User Registration

- Email and password-based registration
- Password hashing using bcrypt
- Email verification required before login
- Automatic verification email sending

### Email Verification

- Verification link sent to user's email to finish registration
- User cannot login until email is verified
- Secure token-based verification process
- Token expiration for security

### Authentication

- JWT-based authentication
- Access and refresh token system
- Secure password storage
- Protection against unauthorized access

### Password Reset

- Secure password reset via email
- One-time-use reset tokens
- Token expiration after use or after 24 hours
- Email verification for password reset requests

## API Endpoints

### Authentication

```
POST /auth/register - Register new user
POST /auth/login - User login
POST /auth/refresh - Refresh access token
POST /auth/logout - User logout
POST /reset-password - Reset Password
GET /reset-password - Send reset form to user
```

### Email Verification

```
POST /auth/verify-email - Verify email address
POST /auth/resend-verification - Resend verification email
```

### Password Reset

```
POST /auth/forgot-password - Request password reset
POST /auth/reset-password - Reset password with token
POST /auth/validate-reset - Validate reset token
```

## Security Features

- Email verification required for registration
- One-time-use password reset tokens
- Token expiration system
- Password hashing
- JWT-based session management
- CORS protection
- SQL injection protection
