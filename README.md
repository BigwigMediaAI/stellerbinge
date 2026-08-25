# Stellar Binge

A modern restaurant and lounge website for **Stellar Binge**, designed to showcase the dining experience, menu, gallery, banquet services, and generate customer enquiries. The project also includes an administrative panel for managing leads, blogs, and website content.

## 📌 Project Description

Stellar Binge is a restaurant and lounge bar website based in Sector 62, Noida. The platform acts as the restaurant's primary digital presence while focusing on customer engagement and enquiry generation.

The website allows visitors to explore the restaurant, discover its cuisine and menu, view food and venue galleries, learn about banquet and event facilities, read food-related blogs, and connect with the restaurant.

A dedicated admin panel supports internal operations by allowing the team to manage incoming leads and publish or manage blog content.

### Project Objectives

- Create a premium digital presence for the restaurant.
- Showcase the restaurant's menu, food, ambience, and services.
- Generate and capture customer enquiries and leads.
- Promote banquet and event-related enquiries.
- Provide a content platform for publishing restaurant and food-related blogs.
- Give the internal team an admin interface for managing leads and website content.

---

## 🚀 Key Features

### 🍽️ Restaurant Website

- Modern, responsive restaurant and lounge website.
- Premium visual presentation of the dining experience.
- Restaurant story and culinary philosophy sections.
- Showcase of signature dishes and food offerings.
- Responsive experience across desktop, tablet, and mobile devices.

### 📋 Menu & Food Showcase

- Dedicated menu section with categorized food and beverage offerings.
- Visual food presentation through the gallery.
- Sections covering different menu categories.
- Food and culinary content designed to improve customer engagement.

The live website currently presents categories such as **Soups & Greens, Signature Sips, Entrée, The Stellar Spread, and Stellar Indulgence**.

### 🖼️ Gallery

- Dedicated food and restaurant gallery.
- Visual presentation of dishes and culinary creations.
- Category-based exploration of food images.

### 🎉 Banquet & Events

- Dedicated banquet and events section.
- Information for corporate meetings, birthdays, kitty parties, family gatherings, and celebrations.
- Presentation of venue facilities, ambience, catering, and event support.
- Lead-generation opportunities for event and banquet enquiries.

The banquet space is presented as suitable for events of up to 150 guests.

### 📩 Lead Generation

Lead generation is one of the core objectives of the project.

- Customer enquiry forms.
- Lead collection through website interactions.
- Centralized lead management through the admin panel.
- Support for restaurant and banquet-related enquiries.
- Internal access to submitted customer information.

### 📝 Blog Management

- Public blog section for food, restaurant, dining, and event-related content.
- Admin-side blog management.
- Ability for the team to publish and manage blog content.
- Content-driven pages designed to support the restaurant's online presence.

### 🔐 Admin Panel

The project includes an internal admin panel for managing important website operations.

Key administrative functionality includes:

- Lead management
- Blog management
- Website content management
- Internal data management

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| **Next.js** | React-based framework for the website |
| **React** | Component-based user interface |
| **TypeScript** | Type-safe application development |
| **Tailwind CSS** | Responsive styling and UI development |
| **HTML5** | Semantic page structure |
| **CSS3** | Custom styling and visual presentation |
| **JavaScript** | Client-side interactions and application logic |

### Backend & Database

| Technology | Purpose |
|---|---|
| **Node.js** | Backend runtime and server-side functionality |
| **Express.js** | API and backend application layer |
| **MongoDB** | Database for leads and application data |
| **REST APIs** | Communication between frontend and backend |

### Content & Media

| Technology / Service | Purpose |
|---|---|
| **Cloudinary** | Image and media management |
| **Rich Text / Content Management** | Blog and website content publishing |

### Development & Deployment

| Tool | Purpose |
|---|---|
| **Git** | Version control |
| **GitHub** | Source code management |
| **Postman** | API testing |
| **Vercel / Hosting Platform** | Application deployment |

---

## 👨‍💻 My Contribution

As a Full Stack Web Developer, I contributed to the development of the restaurant website and its supporting administrative workflows.

### Frontend Development

- Developed responsive website interfaces using modern React/Next.js practices.
- Built reusable UI components and responsive layouts.
- Implemented restaurant, menu, gallery, blog, banquet, and contact sections.
- Worked on interactive forms and customer-facing enquiry flows.
- Optimized the user experience across desktop and mobile devices.

### Backend & Application Development

- Developed backend APIs for website functionality and lead workflows.
- Implemented lead collection and management functionality.
- Worked with MongoDB for storing application and enquiry data.
- Integrated media/content functionality for website and blog management.

### Admin Panel

- Developed administrative interfaces for managing incoming leads.
- Implemented blog management functionality.
- Worked on content-management workflows used by the internal team.
- Connected admin functionality with the public-facing website.

---

## 📊 Lead Management Workflow

The core enquiry workflow is designed around a simple customer-to-admin process:

```text
Visitor
   ↓
Website / Enquiry Form
   ↓
Lead Submission
   ↓
Backend API
   ↓
Database
   ↓
Admin Panel
   ↓
Sales / Restaurant Team
```

---

## 📝 Blog Workflow

The platform also provides a content workflow for publishing restaurant-related content:

```text
Admin
   ↓
Create / Edit Blog
   ↓
Publish
   ↓
Public Blog Section
   ↓
Website Visitors
```

---

## 🌐 Live Demo

**Live Website:**  
https://www.stellarbinge.com/

The production website includes the restaurant homepage, menu, gallery, blog section, banquet information, and contact/enquiry experience.

---

## ⚙️ Setup & Installation

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git
- MongoDB or access to the configured MongoDB database

### 1. Clone the Repository

```bash
git clone <repository-url>
cd stellar-binge
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root.

Example:

```env
MONGODB_URI=
NEXT_PUBLIC_API_BASE=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Add only the variables actually required by the current project configuration.

> Never commit API keys, database credentials, or other sensitive environment variables to GitHub.

### 4. Start the Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### 5. Create a Production Build

```bash
npm run build
```

### 6. Start the Production Server

```bash
npm start
```

---

## 📱 Responsive Design

The website is designed to provide a consistent experience across:

- Desktop
- Laptop
- Tablet
- Mobile devices

Responsive layouts are applied to navigation, menu, gallery, content sections, forms, and other major components.

---

## 🔒 Security & Application Practices

The project follows common full-stack development practices, including:

- Environment-based configuration
- Server-side API handling
- Input validation
- Protected administrative functionality
- Secure handling of credentials
- Separation of frontend and backend responsibilities
- Database-backed lead management

---

## 🎯 Project Highlights

The project demonstrates experience in building a complete business website rather than a static marketing page.

Key areas of the implementation include:

- Full-stack web development
- Lead generation
- CRM-style lead management
- Admin panel development
- Blog/content management
- REST API integration
- Database integration
- Responsive UI development
- Media and content management
- Restaurant and event enquiry workflows

---

## 📄 License

This project was developed for **Stellar Binge**.

Unless a license is explicitly added to the repository, the source code, design, content, images, and associated assets should not be reused or redistributed without appropriate permission.
