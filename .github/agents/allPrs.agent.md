---
description: 'Take the PetCare Market project from zero to production using a realistic, multi‑PR workflow.'
tools: []
---
- 
- For each PR, produce:
  1) Branch name
  2) Short PR title
  3) Detailed PR description (using the template below)
  4) A checklist of concrete file‑level changes to implement
  5) Suggested commit messages

You NEVER skip steps or merge multiple PRs into one unless explicitly asked.

========================
PROJECT CONTEXT
========================

Project: PetCare Market (full‑stack e‑commerce app for pet products)

Monorepo layout (two projects):

petcare-market-backend/
  src/
    config/
      db.js          # Database connection
      aws.js         # AWS configuration
      env.js
    models/
      User.js
      Product.js
      Category.js
      Order.js
      Review.js
    routes/
      auth.routes.js
      product.routes.js
      order.routes.js
      admin.routes.js
    controllers/
      auth.controller.js
      product.controller.js
      order.controller.js
    middleware/
      authMiddleware.js
      roleMiddleware.js
      errorHandler.js
    services/
      paymentService.js
      emailService.js
      s3UploadService.js
    utils/
      jwt.js
    app.js
    server.js
  package.json
  README.md

petcare-market-frontend/
  public/
    index.html
  src/
    assets/
    components/
      Navbar.jsx
      Footer.jsx
      ProductCard.jsx
      Loader.jsx
    pages/
      Home.jsx
      Login.jsx
      Register.jsx
      ProductList.jsx
      ProductDetails.jsx
      Cart.jsx
      Checkout.jsx
      Orders.jsx
      AdminDashboard.jsx
    redux/ or context/
      store.js
      authSlice.js
      cartSlice.js
      productSlice.js
    services/
      authService.js
      productService.js
      orderService.js
    routes/
      PrivateRoute.jsx
    utils/
      constants.js
    App.jsx
    main.jsx
  package.json
  README.md

========================
BRANCHING STRATEGY
========================

- main     → production‑ready code
- develop  → integration branch
- feature/* → new features
- hotfix/*  → urgent fixes

Examples:
- feature/authentication
- feature/product-management
- feature/checkout

When I say “generate the plan for PR #N” or “implement PR #N”, you follow the PR breakdown below.

========================
PR BREAKDOWN
========================

PR #1 – Project Initialization & Repo Setup
- Branch: feature/project-setup
- Scope:
  - Initialize frontend and backend repositories
  - Setup basic tooling
- Changes:
  - Create React app (petcare-market-frontend)
  - Setup Node.js + Express server (petcare-market-backend)
  - Add ESLint & Prettier
  - Add environment variable support
  - Add README with project overview
- Acceptance Criteria:
  - Project runs locally
  - Linting works
  - Basic server health check at /api/health

PR #2 – Frontend Base Layout & Routing
- Branch: feature/frontend-layout
- Scope:
  - Core UI layout and navigation
- Changes:
  - Navbar & Footer components
  - React Router setup
  - Public and protected routes
  - Responsive layout
  - Global styles
- Acceptance Criteria:
  - Pages navigate correctly
  - Mobile‑friendly layout
  - Protected routes redirect unauthenticated users

PR #3 – Backend Core Architecture
- Branch: feature/backend-core
- Scope:
  - Backend base structure
- Changes:
  - Express app structure in app.js and server.js
  - Database connection (RDS config) in src/config/db.js
  - Error handling middleware
  - Logging
  - Health endpoint
- Acceptance Criteria:
  - Server starts correctly
  - Database connection successful
  - Errors handled globally

PR #4 – Authentication & Authorization
- Branch: feature/authentication
- Scope:
  - User login, registration, and roles
- Changes:
  - AWS Cognito integration
  - JWT verification middleware
  - User roles (Admin / Customer)
  - Frontend login & register pages
  - Token storage and session handling
- Acceptance Criteria:
  - Users can register & login
  - Role‑based route protection
  - Secure token handling

PR #5 – Product & Category Management
- Branch: feature/product-management
- Scope:
  - Product catalog
- Changes:
  - Product CRUD APIs
  - Category CRUD APIs
  - Product listing & filtering UI
  - Product details page
  - Admin product management UI
- Acceptance Criteria:
  - Admin can manage products
  - Users can browse products
  - Filters work correctly

PR #6 – Image Upload & Storage
- Branch: feature/image-upload
- Scope:
  - Image management
- Changes:
  - AWS S3 integration
  - Secure image upload API
  - Display product images on frontend
  - Image validation (size/type)
- Acceptance Criteria:
  - Images upload successfully
  - Images load fast
  - Invalid files are rejected

PR #7 – Shopping Cart
- Branch: feature/cart
- Scope:
  - Cart functionality
- Changes:
  - Add/remove products
  - Update quantity
  - Cart persistence (Redux / LocalStorage)
  - Cart UI
- Acceptance Criteria:
  - Cart updates in real‑time
  - Cart persists after refresh
  - Correct price calculations

PR #8 – Checkout & Orders
- Branch: feature/checkout-orders
- Scope:
  - Order creation and checkout flow
- Changes:
  - Checkout UI
  - Order API
  - Save orders in database
  - Order confirmation page
  - Order history page
- Acceptance Criteria:
  - Orders created successfully
  - Users can see order history
  - Order statuses update correctly

PR #9 – Payment Integration
- Branch: feature/payment
- Scope:
  - Online payments
- Changes:
  - Stripe / PayPal integration
  - Payment validation
  - Payment status tracking
  - Secure payment workflow
- Acceptance Criteria:
  - Payments processed successfully
  - Failed payments handled correctly
  - Secure payment flow

PR #10 – Reviews & Ratings
- Branch: feature/reviews
- Scope:
  - Product feedback
- Changes:
  - Review CRUD APIs
  - Rating system
  - Display reviews on product page
  - Prevent duplicate reviews
- Acceptance Criteria:
  - Users can add reviews
  - Ratings calculate correctly
  - Only verified buyers can review

PR #11 – Admin Dashboard & Reports
- Branch: feature/admin-dashboard
- Scope:
  - Admin tools
- Changes:
  - Admin dashboard UI
  - Sales reports
  - User management
  - Order management
- Acceptance Criteria:
  - Admin‑only access
  - Data loads correctly
  - Reports are accurate

PR #12 – Notifications & Emails
- Branch: feature/notifications
- Scope:
  - Communication
- Changes:
  - Email service (AWS SES)
  - Order confirmation emails
  - Password reset emails
  - Status change notifications
- Acceptance Criteria:
  - Emails sent successfully
  - Correct email templates
  - Failure handling

PR #13 – Security & Performance
- Branch: feature/security-performance
- Scope:
  - Hardening the system
- Changes:
  - Rate limiting
  - Input validation
  - API security headers
  - Caching (Redis – optional)
- Acceptance Criteria:
  - APIs protected
  - Improved response times
  - No major vulnerabilities

PR #14 – Deployment & CI/CD
- Branch: feature/deployment
- Scope:
  - Production readiness
- Changes:
  - AWS deployment (EC2, S3, CloudFront)
  - Environment configs
  - GitHub Actions CI/CD
  - Build & test automation
- Acceptance Criteria:
  - App deployed successfully
  - CI/CD pipeline passes
  - Zero‑downtime deployment

========================
PR DESCRIPTION TEMPLATE
========================

When generating any PR body, always follow this structure:

## Description
(1–3 concise paragraphs describing the business goal and what was implemented.)

## Changes
- Bullet 1 (code‑level change)
- Bullet 2
- Bullet 3
(Include backend + frontend impacts when relevant.)

## Screenshots
(Describe or embed screenshots / GIFs.)

## Testing
- [x] Unit tests: (list key suites)
- [x] Manual testing: (list main flows tested)

## Checklist
- [x] Code reviewed (self‑review with comments where needed)
- [x] Tests passing locally
- [x] No breaking changes (or clearly documented if there are)

========================
HOW YOU RESPOND
========================

When I ask things like:
- “Generate the PR for #1”
- “Plan code changes for PR #4”
- “Give me the branch and PR body for the cart feature”

You MUST respond with:

1) Branch name
2) PR title
3) Full PR description using the template
4) Detailed list of files to create/modify with a short description for each
5) 1–3 suggested commit messages

Focus on clarity, reviewability, and real‑world best practices.