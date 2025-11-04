
# 🛒 GreenCart – Online Grocery Shopping Platform

GreenCart is a **full-stack e-commerce web application** for buying fresh groceries online.  
It provides a smooth shopping experience with **user authentication**, **cart management**, **address handling**, **order tracking**, and **online/COD payment options** via Stripe.

---

## 🚀 Live Demo

🔗 **Frontend (Vercel)**: [https://greencart-pearl-theta.vercel.app](https://greencart-pearl-theta.vercel.app)  
🔗 **Backend API (Vercel)**: [https://greencart-server.vercel.app](https://greencart-backend-gold.vercel.app)

---

## ⚙️ Tech Stack

### 🖥️ Frontend
- [Vite + React.js](https://vitejs.dev/)
- React Router DOM
- Context API for global state management
- Axios for API calls
- React Hot Toast for notifications
- Tailwind CSS for modern UI

### 🧠 Backend
- Node.js + Express.js
- MongoDB + Mongoose (Database)
- Stripe Payment Gateway
- CORS, dotenv, and body-parser for middleware
- Deployed on **Vercel**

---

## 📦 Features

✅ **User Authentication** (Login/Register)  
✅ **Product Browsing** – View grocery items with price & offer price  
✅ **Cart Management** – Add, remove, and update items in cart  
✅ **Address Management** – Add & select delivery addresses  
✅ **Checkout System**
   - Cash on Delivery (COD)
   - Online Payment via Stripe  
✅ **Order Tracking** – View all past orders and payment type  
✅ **Responsive UI** – Mobile-friendly design  

---

## 🗂️ Folder Structure

```
greencart/
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/     # Reusable components (Navbar, Footer, etc.)
│   │   ├── pages/          # Page components (Cart, Orders, Checkout)
│   │   ├── context/        # App context for state management
│   │   ├── assets/         # Images, dummy data
│   │   └── App.jsx
│   └── package.json
│
└── server/                 # Backend (Express + MongoDB)
    ├── models/             # Mongoose models (User, Product, Order, Address)
    ├── routes/             # Express routes (userRoute, productRoute, orderRoute)
    ├── controllers/        # Logic handlers (orderController, userController)
    ├── server.js           # Main entry point
    └── package.json
```

---

## 🧑‍💻 Setup Instructions

### 🔹 Prerequisites
- Node.js ≥ 16.x
- MongoDB (local or Atlas)
- Stripe account (for online payments)
- Vercel account (for deployment)

---

### 🔹 Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside `server/` with the following variables:

```env
MONGO_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
PORT=5000
```

Then run:
```bash
npm start
```

Backend will start on:
```
http://localhost:5000
```

---

### 🔹 Frontend Setup

```bash
cd client
npm install
```

Inside `client/`, create a `.env` file:
```env
VITE_API_BASE_URL=http://localhost:5000
```

Run frontend locally:
```bash
npm run dev
```

Now open:
```
http://localhost:5173
```

---

## 💳 Stripe Payment Flow

1. User selects address and payment type  
2. If “Online Payment” → Stripe Checkout page opens  
3. On success → redirected to `/loader?next=my-orders`  
4. Stripe webhook confirms payment and updates:
   - `Order.isPaid = true`
   - User’s `cartItems` cleared  

---

## 🧩 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| `POST` | `/api/user/register` | Register a new user |
| `POST` | `/api/user/login` | User login |
| `POST` | `/api/address/add` | Add address |
| `GET`  | `/api/address/get?userId=...` | Get addresses for user |
| `POST` | `/api/order/cod` | Place COD order |
| `POST` | `/api/order/stripe` | Create Stripe checkout session |
| `POST` | `/api/order/stripe/webhook` | Handle Stripe webhooks |
| `GET`  | `/api/order/user?userId=...` | Fetch user orders |

---

## 🧠 Key Learnings

- Integrated **Stripe Checkout + Webhooks**
- Managed global state with **Context API**
- Built reusable **backend controllers**
- Solved CORS, Axios, and environment-based deployment issues
- Deployed full-stack app on **Vercel**

---

## 🪄 Future Enhancements

- 🧾 Admin dashboard for managing products & orders  
- 🌍 Multi-currency & multi-language support  
- 🛍️ Product search & filtering  
- 📱 PWA version for mobile devices  

---

## 🧑‍🎓 Author

**Saptorsi Ghose Dastidar**  
📍 India  
🔗 [GitHub Profile](https://github.com/Saptorsi2005)

---

