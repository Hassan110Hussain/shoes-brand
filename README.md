# Shoe E-Commerce Platform

A complete, fully-functional e-commerce application built with React and Vite. This platform provides a seamless shopping experience with modern features and responsive design.

## Features Implemented

### 1. Routing & Navigation
- React Router v6 for client-side routing
- Sticky navigation bar with active links
- Category dropdown menu
- Cart counter badge
- User authentication status display

### 2. Product Management
- **Shop Page**: Browse all products with filtering and sorting
- **Product Details**: Detailed product view with quantity selector
- **Category Pages**: Filter products by category (Running, Casual)
- **Search Functionality**: Real-time product search
- **Filtering**: By category and price range
- **Sorting**: By name, price (low-high, high-low), and rating

### 3. Shopping Cart
- Add/remove products from cart
- Update product quantities
- Persistent cart storage (localStorage)
- Cart summary with totals
- Real-time cart item count

### 4. Authentication System
- **Login Page**: User login with validation
- **Register Page**: New user registration with password confirmation
- **Account Page**: User profile management
- **Edit Profile**: Update user information
- **Logout**: Secure logout functionality
- Persistent user session (localStorage)

### 5. Checkout Process
- Multi-step checkout (3 steps)
- Step 1: Shipping Information
- Step 2: Delivery Address
- Step 3: Payment Information
- Order summary with itemized breakdown
- Order confirmation page

### 6. Additional Pages
- **Home Page**: Hero section with call-to-action
- **About Page**: Company information and values
- **Contact Page**: Contact form with validation
- **Cart Page**: Full shopping cart management

### 7. Responsive Design
- Mobile-first approach
- Breakpoints: 1024px, 768px, 480px
- Optimized layouts for all screen sizes
- Touch-friendly buttons and inputs

### 8. Form Validation
- Email validation
- Password strength requirements
- Required field validation
- Real-time error messages
- Success notifications

### 9. State Management
- Context API for cart management
- Context API for authentication
- localStorage for persistence
- Global state across components

### 10. UI/UX Features
- Smooth transitions and animations
- Hover effects on interactive elements
- Loading states
- Error handling
- Success messages
- Consistent color scheme (Red: #d01c28, Gray: #2e2e2e)

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx              # Hero section with category dropdown
│   └── Navigation.jsx        # Main navigation bar
├── context/
│   ├── CartContext.jsx       # Cart state management
│   └── AuthContext.jsx       # Authentication state management
├── pages/
│   ├── Home.jsx              # Home page
│   ├── Shop.jsx              # Product listing with filters
│   ├── ProductDetails.jsx    # Individual product page
│   ├── Category.jsx          # Category-specific products
│   ├── Cart.jsx              # Shopping cart
│   ├── Login.jsx             # Login page
│   ├── Register.jsx          # Registration page
│   ├── Account.jsx           # User account page
│   ├── Checkout.jsx          # Multi-step checkout
│   ├── About.jsx             # About page
│   └── Contact.jsx           # Contact page
├── styles/
│   ├── Navigation.css        # Navigation styles
│   ├── Hero.css              # Hero section styles
│   ├── Shop.css              # Shop page styles
│   ├── ProductDetails.css    # Product details styles
│   ├── Category.css          # Category page styles
│   ├── Cart.css              # Cart page styles
│   ├── Auth.css              # Login/Register styles
│   ├── Account.css           # Account page styles
│   ├── Checkout.css          # Checkout styles
│   ├── About.css             # About page styles
│   └── Contact.css           # Contact page styles
├── App.jsx                   # Main app with routing
├── App.css                   # Global styles
└── main.jsx                  # Entry point
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. Clone the repository
```bash
git clone <repository-url>
cd shoes-brand
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

5. Preview production build
```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- **React 18.2.0** - UI library
- **React Router DOM 6.20.0** - Client-side routing
- **Vite 5.2.0** - Build tool
- **CSS3** - Styling with responsive design
- **Context API** - State management
- **localStorage** - Data persistence

## Key Features Breakdown

### Cart Management
- Add products with quantity
- Update quantities in cart
- Remove items
- Calculate totals with tax
- Persistent storage

### Authentication
- User registration with validation
- Login with email/password
- Profile management
- Session persistence
- Logout functionality

### Product Filtering
- Search by product name
- Filter by category
- Filter by price range
- Sort by name, price, rating

### Responsive Breakpoints
- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: Below 768px
- Small Mobile: Below 480px

## Sample Products

The application includes 8 sample products:
1. Nike Air Max - $120 (Running)
2. Adidas Ultraboost - $180 (Running)
3. Puma RS-X - $100 (Casual)
4. New Balance 990 - $175 (Casual)
5. Converse Chuck Taylor - $65 (Casual)
6. Asics Gel-Lyte - $130 (Running)
7. Vans Old Skool - $75 (Casual)
8. Saucony Ride - $140 (Running)

## Future Enhancements

- Backend API integration
- Real payment gateway integration
- Order history and tracking
- Product reviews and ratings
- Wishlist functionality
- Admin dashboard
- Email notifications
- Advanced analytics
- Social media integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size
- Code splitting with React Router
- Lazy loading ready
- CSS optimization
- Fast build times with Vite

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Form validation feedback

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please contact support@shoeshop.com or visit our contact page.
