# QuickAI - Your All-in-One AI Toolbox 

This is the frontend of **AiTools**, a powerful web platform that offers a collection of AI-powered utilities to assist users with tasks like generating blog titles, removing backgrounds, reviewing resumes, and more.

Built using **React + Vite**, integrated with **Clerk authentication**, and styled with **TailwindCSS**, this frontend connects seamlessly to the backend hosted at:

<br>


##  Features

###  AI Utilities (Tools)
- **Blog Titles Generator** – Suggest creative blog headlines from input topics.
- **Write Article** – Auto-generate full-length articles using AI.
- **Generate Images** – Create stunning images based on text prompts.
- **Remove Background** – Automatically remove backgrounds from uploaded images.
- **Remove Objects** – Select and remove unwanted objects from an image.
- **Review Resume** – Upload and get AI feedback on your resume.

###  Community Page
- View AI-generated images by other users.
- Like your favorite creations.

###  Dashboard
- See all your **recent activities**, including:
  - Previously generated images or blog titles.
  - History of resume reviews and image edits.


###  Other Pages
- **Home** – Landing page showcasing all tools.
- **Layout** – Centralized layout used across the app for consistent UI/UX.

---

##  Tech Stack

| Technology      | Description                          |
|------------------|-------------------------------------|
| React + Vite     | Frontend framework + dev server     |
| TailwindCSS      | Styling framework                   |
| Clerk            | Authentication (Sign in / Sign up)  |
| Axios            | API communication with backend      |
| Gemini API       | Blog Title and article              |
| Cloudinary API   | For background and object removal   |
| Clipdrop API     | For image generation                |
| Lucide Icons     | UI Icons                            |

---

## Folder Structure
```text
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── AiTools.jsx
│ │ ├── CreatedItem.jsx
│ │ ├── Footer.jsx
│ │ ├── Hero.jsx
│ │ ├── Navbar.jsx
│ │ ├── Plan.jsx
│ │ ├── Sidebar.jsx
│ │ └── Testimonial.jsx
│ ├── pages/
│ │ ├── BlogTitles.jsx
│ │ ├── Community.jsx # Like and view shared images
│ │ ├── Dashboard.jsx # View recent AI activity
│ │ ├── GenerateImages.jsx
│ │ ├── Home.jsx
│ │ ├── Layout.jsx
│ │ ├── RemoveBackground.jsx
│ │ ├── RemoveObjects.jsx
│ │ ├── ReviewResume.jsx
│ │ └── WriteArticle.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── .env
├── .gitignore
├── package.json
└── vite.config.js
```



<br>
<br>




#  QuickAI Tools Backend (Express.js)

This is the backend server for the **AI Tools App**, built with **Express.js**. It provides API endpoints for AI operations, user management, and integrates services like **Clerk authentication**, **Cloudinary uploads**, and **OpenAI**.

---

##  Backend Tech Stack

| Technology               | Purpose/Usage                                  |
|--------------------------|------------------------------------------------|
| **Node.js**              | Runtime environment for executing JavaScript   |
| **Express.js**           | Web framework for building API endpoints       |
| **Clerk**                | User authentication and management             |
| **Cloudinary**           | Image and video hosting and delivery           |
| **Multer**               | Middleware for handling `multipart/form-data`  |
| **OpenAI API**           | Integrates AI capabilities                     |
| **Neon / PostgreSQL**    | Cloud-based serverless relational database     |
| **CORS**                 | Enables cross-origin requests                  |

---

## Folder Structure
```text
server/
├── api/
│   └── index.js
├── configs/
│   ├── cloudinary.js
│   ├── db.js
│   └── multer.js
├── controllers/
│   ├── aiController.js
│   └── userController.js
├── middlewares/
│   └── auth.js
├── routes/
│   ├── aiRoutes.js
│   └── userRoutes.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js

