# Admin Panel Application

This project is an admin panel application developed using AngularJS for the frontend and Node.js for the backend. The application allows administrators to manage videos, categories, and users. The backend is fully developed by our team.

## Authors

- Hamza Dhmiddouch - [hamza.dhmiddouch@edu.upct.es](mailto:hamza.dhmiddouch@edu.upct.es)
- Javier Verdu - [javier.verdu2@edu.upct.es](mailto:javier.verdu2@edu.upct.es)
- Tomás Sánchez - [tomas.sanchez2@edu.upct.es](mailto:tomas.sanchez2@edu.upct.es)

## Features

- **Video Management**: Add, update, delete, and list videos.
- **Category Management**: Add, update, delete, and list categories.
- **User Management**: Add, update, delete, and list users.
- **Authentication**: Session-based authentication for secure access.
- **Alerts**: Real-time alerts for successful operations and errors.

## Installation

### Prerequisites

- Node.js
- AngularJS

### Backend Setup

1. Clone the repository:
    ```bash
    git clone  https://github.com/your-repo/admin-panel.git
    ```
2. Navigate to the backend directory and install dependencies:
    ```bash
    cd backend
    npm install
    ```
3. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Open `index.html` in your browser.

## Usage

### Authentication

1. Log in using your credentials to access the admin panel. (current  admin cretedentials are  User:ADMINISTRADOR pasword:admin123)
2. After logging in, your session ID is stored in the session storage.

### Managing Videos

- **List Videos**: Navigate to the Videos section to see a list of all videos.
- **Add Video**: Fill in the video details and submit to add a new video.
- **Update Video**: Select a video, modify the details, and submit to update.
- **Delete Video**: Select a video and delete it.

### Managing Categories

- **List Categories**: Navigate to the Categories section to see all categories.
- **Add Category**: Fill in the category name and submit to add a new category.
- **Update Category**: Select a category, modify the name, and submit to update.
- **Delete Category**: Select a category and delete it.

### Managing Users

- **List Users**: Navigate to the Users section to see all users.
- **Add User**: Fill in the user details and submit to add a new user.
- **Update User**: Select a user, modify the details, and submit to update.
- **Delete User**: Select a user and delete them.



### Frontend

- **Controllers**: Handles the business logic for various views.
- **Services**: Manages HTTP requests to the backend.

### Backend

- **Routes**: Defines the endpoints for API calls.
- **Controllers**: Handles the business logic for API requests.
- **Models**: Defines the data models for the application.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.



**Admin Panel Application** - made with ❤️ by Hamza, Javier, and Tomás.
