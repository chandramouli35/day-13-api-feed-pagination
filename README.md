# Day 13 – Public API Explorer with Paginated Results & Dynamic Rendering

This project is part of my 150-day developer preparation journey, focused on integrating real-time data sources and building scalable UI patterns. On Day 13, I developed a responsive feed UI that pulls live data from a public API, renders it in cards, and handles pagination with graceful loading and error states.

## ✅ What I Practiced:
- Axios integration with external REST APIs
- useEffect for controlled data fetching on mount and pagination
- useState to manage fetched items, pagination logic, and loading
- Card-based rendering of JSON response data
- Basic error handler for network failures or empty states
- Search/filter input field to refine displayed results
- Tailwind CSS layout for grid and responsive design

## 🧠 Key Concepts Covered:
- API workflows in React (fetch → map → render)
- Pagination using offset and slice logic
- Conditional rendering for loading, empty states, and errors
- Input-driven filtering on fetched data
- Modular component structure (Card, List, Loader, SearchBar)

## 🛠 Features:
- Fetch data from public API (e.g., REST Countries API)
- Display data as responsive cards (flag, name, population, etc.)
- “Load More” button for pagination via index tracking
- Search input to dynamically filter results by keyword
- Loading spinner while fetching
- Error message for failed API calls
- Responsive layout with Tailwind grid/flex utilities

## ⚙️ Tech Stack:
- React.js (Functional Components + useState/useEffect)
- Axios for HTTP requests
- Tailwind CSS for layout and design
- JavaScript array filtering, slicing, string matching

## 🔥 Why This Matters:
Real-world applications frequently rely on external APIs — from job listings and weather dashboards to GitHub explorers and content portals. Today’s build mirrors those use cases: it’s real-time, responsive, and scalable. Handling API data with clarity and structure is a skill recruiters look for across frontend roles.

> Day 13 complete. This build layered in public data, pagination logic, and frontend finesse — prepping me for product-grade React challenges ahead.
