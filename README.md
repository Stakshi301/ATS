# ATS Tracker

ATS Tracker is a web application designed to help users manage their job applications through various stages: Applied, Interview, Offer, and Rejected. The application supports drag-and-drop functionality, allowing users to easily move applications between stages. 

## Features

- **Add New Applications**: Users can add new applications via a form that captures candidate name, role, years of experience, and resume link.
- **Drag-and-Drop Interface**: Applications can be moved between stages using a simple drag-and-drop interface.
- **Filter/Search Applications**: Users can filter and search applications by role, status, or years of experience.
- **Dark/Light Mode Toggle**: Users can switch between dark and light themes for a personalized experience.
- **Basic Authentication**: The application includes login and logout functionality to manage user sessions.

## Project Structure

```
ats-tracker
├── src
│   ├── app
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── login
│   │   │   └── page.js
│   │   ├── dashboard
│   │   │   └── page.js
│   │   └── logout
│   │       └── page.js
│   ├── components
│   │   ├── ApplicationForm.js
│   │   ├── DragDropBoard.js
│   │   ├── FilterSearchBar.js
│   │   ├── ThemeToggle.js
│   │   └── Auth
│   │       ├── LoginForm.js
│   │       └── LogoutButton.js
│   ├── context
│   │   ├── AuthContext.js
│   │   └── ThemeContext.js
│   ├── styles
│   │   ├── globals.css
│   │   └── theme.css
│   └── utils
│       ├── auth.js
│       └── filter.js
├── package.json
├── README.md
└── next.config.js
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd ats-tracker
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Run the development server:
   ```
   npm run dev
   ```

## Usage

- Navigate to `/login` to authenticate.
- After logging in, you will be redirected to the dashboard where you can manage your applications.
- Use the application form to add new applications and utilize the drag-and-drop feature to move applications between stages.
- Use the filter/search bar to find specific applications based on your criteria.
- Toggle between dark and light modes using the theme toggle.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.