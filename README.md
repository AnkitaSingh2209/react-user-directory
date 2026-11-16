# User Directory – React Project

A responsive User Directory application built with React that allows users to explore, search, filter, sort, and view user information fetched from an external API.

## Features

- Fetches user data from an external API.
- Search users by name.
- Filter users by city.
- Sort users alphabetically (A–Z and Z–A).
- Display user information in reusable cards.
- View individual user details.
- Loading state while fetching data.
- Error handling with a retry option.
- Displays the number of users matching the current filters.
- Responsive layout for desktop and mobile devices.

## Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- Vite
- Fetch API
- JSONPlaceholder API

## API Used

User data is fetched from:

https://jsonplaceholder.typicode.com/users

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AnkitaSingh2209/react-user-directory.git
```

### 2. Navigate to the project folder

```bash
cd react-user-directory
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Project Structure

```text
react-user-directory/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── UserCard.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
└── README.md
```

## Author

Ankita Singh

GitHub: https://github.com/AnkitaSingh2209