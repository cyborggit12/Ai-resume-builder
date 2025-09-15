## AI Resume Builder

A modern AI-powered resume builder designed to help users create, edit, and manage professional resumes with ease. The platform integrates with AI to auto-generate content, supports customizable templates, and provides a seamless user experience.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Key Components](#key-components)
- [Pages](#pages)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Overview

The AI Resume Builder enables users to create professional resumes quickly using AI suggestions and modern UI components. Users can add their personal details, education, work experience, and skills, while the system ensures their resumes are structured, stylish, and export-ready.

## Features

- **Dashboard: Central hub to view and manage all created resumes
- **Resume Editor: Add and edit personal details, education, experience, and skills with dynamic forms
- **AI Suggestions: Get AI-powered recommendations for job descriptions and summery
- **authenitication: authenticated user will allow
- **Education Management: Add multiple education entries with university, degree, major, and duration
- **Experience Management: Track work experience with company, role, dates, and detailed descriptions
- **Skills Section: Manage technical and soft skills with AI-suggested keywords
- **Preview & Export: Instantly preview resumes and export them as PDF
- **Responsive Design: Fully optimized for desktop, tablet, and mobile devices

## Getting Started
### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
git clone [repository-url]
    git clone https://github.com/your-username/ai-resume-builder.git
cd ai-resume-builder

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env.local` and fill in:
   - API keys for services like GROQ, Mapbox, etc.

4. Start the development server:
   ```
   npm run dev
   ```
5. Open [http://localhost:5173]((http://localhost:5173)) to view the application

## Key Components

 ## Resume Editor

- The central component for adding and editing resume details.
- Editable forms for personal info, education, experience, and skills

 ## Summery
 
- Add the objective for your resume
- ai summery provided

 ## Education Section

- Add multiple education entries
- Fields for university, degree, major, dates, and description

 ## Experience Section

- Manage work experiences
- Fields for company, role, dates, and achievements

## Skills Section

- Add technical and soft skills
- Add rating to show progress

## Pages

Home(/)
the place for get started

Dashboard (/dashboard)
Overview of all created resumes.

Resume Editor(/dashboard/resume/:resumeId/edit)
Form-based editor to update resume content.

Sign In (/auth/sign-in)
Only authenticated user allow

View Resume(/my-resume/:resumeId/view)
view the resume in a selected template.

Technologies Used

Framework: React + Vite
Styling: Tailwind CSS
authentication:clerk
UI Components: shadcn/ui, Lucide React (icons)
State Management: React Context API
Backend: Strapi (for storing resume data)
Notifications: Sonner
API Handling: Axios / custom GlobalApi service
Ai integration:goggle gemini api


Project Structure
/
├── public/                      # Static assets
├── service/                     # API and backend service functions
├── src/                         # Main source code
│   ├── assets/                  # Images, fonts, and other static assets
│   ├── auth/                    # Authentication related pages
│   │   └── sign-in/             # Sign-in page
│   │       └── index.jsx
│   ├── components/              # Reusable React components
│   │   ├── custom/              # Custom UI components
│   │   └── ui/                  # Shared UI elements
│   ├── context/                 # React Context API files
│   │   └── ResumeInfoContext.jsx
│   ├── dashboard/               # Dashboard related components
│   │   └── components/
│   │       ├── AddResume.jsx
│   │       └── ResumeCardItem.jsx
│   ├── resume/                  # Resume creation/editing
│   │   ├── [resumeId]/edit/     # Resume editing page
│   │   │   ├── index.jsx
│   │   │   └── components/forms # Resume form sections
│   │   │       ├── Education.jsx
│   │   │       ├── Experience.jsx
│   │   │       ├── PersonalDetail.jsx
│   │   │       ├── Skills.jsx
│   │   │       └── Summery.jsx
│   │   └── preview/             # Resume preview components
│   │       ├── FormSection.jsx
│   │       ├── ResumePreview.jsx
│   │       ├── RichTextEditor.jsx
│   │       └── ThemeColor.jsx
│   │   └── index.jsx
│   ├── data/                    # Static or mock data
│   ├── home/                    # Home/Landing page
│   │   └── index.jsx
│   ├── lib/                     # Utility functions and helpers
│   ├── my-resume/               # Resume viewing
│   │   └── [resumeId]/view/     # Resume public view
│   │       └── index.jsx
│   ├── App.jsx                  # Root React component
│   ├── App.css                  # Global app styles
│   ├── index.css                # Entry CSS
│   ├── main.jsx                 # Entry point

## Contributing

1. Create a branch for your feature
2. Make your changes
3. Submit a pull request with a clear description of the changes

🚀 Built with ❤️ to make resume building faster, smarter, and easier for everyone.






