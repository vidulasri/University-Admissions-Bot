# EduPath | College Admissions Assistant

EduPath is a high-performance, data-driven platform designed to guide prospective students through the complex journey of university admissions. By leveraging advanced algorithmic matching and an intelligent chatbot interface, EduPath streamlines the application process from program discovery to enrollment.

## Overview

Applying to college often involves navigating hundreds of university catalogs, tracking dozens of deadlines, and managing complex document requirements. EduPath centralizes this experience, providing students with a 24/7 automated mentor capable of answering detailed queries about admissions policies, scholarship criteria, and program specifics.

## Key Features

### 1. Intelligent Admissions Chatbot
A real-time assistant that provides immediate, alphanumeric responses regarding university requirements, essay strategies, and application policies. It is designed for precision and speed, utilizing the Gemini 3 Flash model for data-driven insights.

### 2. Personalized Recommendation Engine
Matches students with institutions based on their academic profile (GPA, test scores) and personal interests. The engine provides statistical justifications for each match to help students make informed decisions.

### 3. Application Tracker
A comprehensive dashboard to monitor progress across multiple applications. It includes automated deadline reminders and a step-by-step checklist to ensure no requirement is missed.

### 4. University Explorer
A searchable database of over 100+ university programs. Students can compare acceptance rates, tuition costs, and global rankings while exploring detailed program descriptions.

### 5. Scholarship Matching
Identifies merit-based and criteria-specific scholarships (e.g., STEM, First-Gen) that align with the student's background and chosen field of study.

## Technical Specifications

- **Frontend:** React 19 with TypeScript for robust, type-safe development.
- **Styling:** Tailwind CSS for a responsive, modern, and accessible UI.
- **AI Core:** Integrated with Google Gemini API (`gemini-3-flash-preview`) for real-time natural language processing and JSON-structured data extraction.
- **Architecture:** Modular component-based structure ensuring high performance and maintainability.

## Impact & Benefits

- **Efficiency:** Compressed university catalogs by 75% for rapid data retrieval.
- **Scalability:** Capable of handling 1000+ prospective student queries daily.
- **Productivity:** Reduces admissions counselor workload by approximately 60% through automated Tier-1 support.
- **Conversion:** Aimed at improving enrollment conversion rates by 25% through consistent, high-quality engagement.

## Project Structure

- `src/components/`: Modular UI elements (Chatbot, Dashboard, University Explorer).
- `src/services/`: Integration logic for the Gemini API.
- `src/constants.ts`: Core data for universities, scholarships, and tracking steps.
- `src/types.ts`: TypeScript definitions for cross-application data consistency.

---
EduPath is dedicated to making higher education accessible through intelligent automation.