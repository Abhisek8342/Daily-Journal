


# Daily Journal Website

Welcome to the **Daily Journal Website** - an intuitive platform for users to document their daily thoughts, ideas, and experiences. 
This project provides a simple and user-friendly interface where users can create, edit, and manage their personal journal entries with ease.

## Features

- **User Authentication**: Secure login and registration system for personalized journaling.
- **Create & Edit Entries**: Easily add, update, or delete journal entries.
- **Responsive Design**: Mobile-friendly design ensuring accessibility on all devices.
- **Rich Text Editor**: Format your entries with headings, bold text, and more using the integrated text editor.
- **Date Organization**: Automatically organize your journal entries by date for easy navigation.
- **Search Functionality**: Quickly find past entries using the search feature.

## Demo

![Daily Journal Website Screenshot](screenshot.png)

## Getting Started

### Prerequisites

To run this project locally, you'll need to have the following installed:

- **Node.js**: For running the server.
- **MongoDB**: As the database for storing journal entries and user data.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Abhisek8342/daily-journal-website.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd daily-journal-website
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   SECRET=your_secret_key
   ```

5. **Start the server:**

   ```bash
   npm start
   ```

6. **Open the application:**

   Visit `http://localhost:3000` in your web browser to view the Daily Journal Website.

### Usage

- **Create a New Journal Entry**: Log in to your account and click "New Entry" to start writing.
- **Edit an Entry**: Click on any journal entry and choose "Edit" to update the content.
- **Delete an Entry**: If you want to remove an entry, simply click the "Delete" button.

## Technologies Used

- **Front-end**: HTML, CSS, JavaScript, Bootstrap for responsive design.
- **Back-end**: Node.js, Express.js for server-side logic.
- **Database**: MongoDB for storing user data and journal entries.
- **Authentication**: Passport.js for secure login and registration.
- **Text Editor**: Quill.js for a rich text editing experience.

## Contribution

Contributions are welcome! If you'd like to improve the project:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add your feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, suggestions, or just want to say hello, feel free to reach out:

- Email: nayakabhisek435@gmail.com
- GitHub: Abhisek8342

---

### Note:
- Replace `"https://github.com/yourusername/daily-journal-website.git"` with your actual GitHub repository URL.
- Replace `"yourusername"` with your actual GitHub username.
- Customize the **Contact** section with your actual email and social media or GitHub links.
- Don’t forget to update the `screenshot.png` link if you add a screenshot of the Daily Journal Website.

This `README.md` provides a clear overview of your Daily Journal Website project, with instructions for others to get started, understand the features, and contribute.
