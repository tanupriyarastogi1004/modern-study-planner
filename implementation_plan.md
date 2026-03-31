# Study Planner Web App

This document outlines the implementation plan for building a clean, modern, and mobile-responsive Study Planner web application.

## User Review Required
> [!IMPORTANT]
> Since you do not currently have an active workspace, I will create this project in `C:\Users\Lenovo\.gemini\antigravity\scratch\study-planner`. It is highly recommended to open this directory as your active workspace later.

> [!NOTE]
> I plan to use **React** with **Vite** for the frontend framework and **Vanilla CSS** for styling to achieve the precise custom, light-themed aesthetic requested. Please confirm if this tech stack works for you!

## Proposed Changes

We will build the application using React, which makes managing state (like tasks and progress) much simpler.

### Foundation & Setup
- Initialize a new Vite React project.
- Clean up default Vite boilerplate.

### Core Application State
State management will be handled within the React application:
- `tasks`: Array of task objects `{ id, subject, topic, title, completed }`
- `subjects`: Array of strings representing available subjects.

### Component Structure
The project will be structured into the following key components:

#### `src/App.jsx`
The main container managing the state and layout.

#### `src/components/Header.jsx`
Displays the app title and randomly selects a simple motivational quote from a predefined list.

#### `src/components/ProgressSection.jsx`
Calculates the percentage of completed tasks for the day and renders a smooth, animated progress bar.

#### `src/components/TaskForm.jsx`
A form to add new tasks. Includes inputs for Subject, Topic, and Task Title.

#### `src/components/TaskList.jsx`
Displays the list of tasks. Allows grouping by subject/topic and toggling completion status.

### UI / UX Design System (Vanilla CSS)
#### `src/index.css` & `src/App.css`
A custom CSS design system focusing on:
- **Colors**: Very light, positive colors (e.g., extremely light gray background, white cards, soft blue/green accents, calm text colors).
- **Typography**: Clean sans-serif fonts (e.g., Inter or system fonts).
- **Styling**: Glassmorphism hints, rounded corners, soft but distinguishable drop shadows.
- **Responsiveness**: Mobile-first media queries to stack forms and lists gracefully on smaller screens.
- **Animations**: Micro-animations on hover, checkbox toggles, and progress bar filling.

## Open Questions
- Do you want tasks to be saved to `localStorage` so they persist if you reload the page?

## Verification Plan
1. Start the Vite development server.
2. Verify all UI components render correctly on both desktop and simulated mobile views.
3. Test adding subjects, topics, and tasks.
4. Verify checkbox completion updates the progress bar accurately.
