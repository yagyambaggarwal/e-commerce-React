# 🛒 React E-Commerce Store

A modern **React E-Commerce web application** that simulates a real online shopping experience.
This project demonstrates how to build a **production-style frontend application** using modern React patterns such as **Context API, custom hooks, routing, and reusable components**.

The goal of this project is to practice building scalable React applications with authentication, product pages, and a fully functional shopping cart.

---

# 🌐 Live Demo

🔗 https://your-deployed-link.vercel.app

---

# 📌 Features

### 🏪 Product System

* Dynamic product listing
* Product detail pages
* Product images, price, and description
* Dynamic routing for individual products

### 🛒 Shopping Cart

* Add items to cart
* Increase or decrease product quantity
* Remove items from cart
* Automatic total price calculation

### 🔐 Authentication

* User signup
* User login
* Authentication state stored in **localStorage**
* Conditional UI based on login status

### 🌍 Routing

* Client-side routing using **React Router**
* Dynamic routes for product pages
* Programmatic navigation after login

### ⚡ Global State Management

* **Context API** for managing global state
* Separate contexts for:

  * Authentication
  * Shopping Cart

### 🎨 UI Logic

* Conditional rendering
* Loading states
* Error handling
* Reusable components

---

# 🧠 What I Learned

Through this project I practiced:

* Building scalable **React component architecture**
* Managing global state using **React Context API**
* Implementing **authentication flows**
* Creating **dynamic routes with React Router**
* Managing complex UI logic
* Building real-world React application features

---

# 🛠 Tech Stack

### Frontend

* React
* Vite
* React Router
* Context API
* JavaScript (ES6+)
* CSS

### Deployment

* Vercel

### Tools

* Git
* GitHub
* VS Code

---

# 📂 Project Structure

```
src
 ┣ components
 ┃ ┣ Navbar.jsx
 ┃ ┣ ProductCard.jsx
 ┃ ┣ CartItem.jsx
 ┃ ┗ ProtectedRoute.jsx
 ┣ pages
 ┃ ┣ Home.jsx
 ┃ ┣ Login.jsx
 ┃ ┣ Signup.jsx
 ┃ ┣ ProductDetails.jsx
 ┃ ┗ Checkout.jsx
 ┣ context
 ┃ ┣ AuthContext.jsx
 ┃ ┗ CartContext.jsx
 ┣ hooks
 ┃ ┗ useAuth.js
 ┣ data
 ┃ ┗ products.js
 ┗ App.jsx
```

---

# ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/yourusername/react-ecommerce-store.git
```

### 2️⃣ Navigate into the project

```
cd react-ecommerce-store
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Start the development server

```
npm run dev
```

The app will run on:

```
http://localhost:5173
```

---

# 🚀 Deployment

This project is deployed using **Vercel**.

Steps to deploy:

1. Push your project to GitHub
2. Import the repository into Vercel
3. Deploy the project

---

# 🔮 Future Improvements

* Backend integration (Node.js / Express)
* Database for products and users
* Payment gateway integration
* Product search and filtering
* Order history
* Admin dashboard
* Fully responsive design

---

# 👨‍💻 Author

Your Name

GitHub
https://github.com/yourusername

LinkedIn
https://linkedin.com/in/yourprofile

---

# ⭐ Support

If you found this project helpful, please consider giving it a **star ⭐ on GitHub**.
