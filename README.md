Below is a professional `README.md` file for your assignment. It provides an overview of the project, instructions for setting it up, and details about the features and technologies used.

---

# House of MarkTech - Frontend Developer Assignment

This project is a responsive landing page built with **React.js** and **CSS** as part of the Frontend Developer assignment for House of MarkTech. The application includes a hero section, service cards, a pricing table, a contact form, and a dynamic user list with a debounced search bar.

---

## Features

1. **Hero Section**:
   - Background image with a dark overlay for better text visibility.
   - Responsive design with smooth animations.

2. **Service Cards**:
   - Displays services with titles and descriptions.
   - Hover effects for better user interaction.

3. **Pricing Table**:
   - Displays pricing plans with features.
   - Responsive layout for all screen sizes.

4. **Contact Form**:
   - A simple form with fields for name, email, and message.
   - Basic validation and submission handling.

5. **User List with Search**:
   - Fetches user data from an external API (`https://jsonplaceholder.typicode.com/users`).
   - Implements a debounced search bar to filter users dynamically.
   - Uses a Trie or HashMap-like approach for efficient filtering.

6. **Responsive Design**:
   - The application is fully responsive and works seamlessly on desktop, tablet, and mobile devices.

7. **Performance Optimization**:
   - Lazy loading for images.
   - Efficient API integration and rendering.

---

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **CSS**: For styling and responsive design.
- **CSS Variables**: For consistent theming and easy updates.
- **Fetch API**: For fetching user data from `https://jsonplaceholder.typicode.com/users`.
- **Debouncing**: To optimize the search functionality.

---

## Installation and Setup

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/house-of-marktech-assignment.git
   cd house-of-marktech-assignment
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```

4. **Open in Browser**:
   - The application will open automatically in your default browser at `http://localhost:3000`.

---

## Folder Structure

```
src/
├── assets/
│   ├── css/
│   │   ├── heroSection.css
│   │   ├── header.css
│   ├── img/
│   │   ├── hero.png
├── components/
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── ServiceCards.jsx
│   ├── PricingTable.jsx
│   ├── ContactForm.jsx
│   ├── UserList.jsx
│   ├── SearchBar.jsx
├── hooks/
│   ├── useDebounce.js
├── utils/
│   ├── filterUsers.js
├── App.js
├── App.css
├── index.js
├── index.css
```

---

## Key Files

1. **`App.js`**:
   - The main component that renders all sections of the landing page.

2. **`Header.jsx`**:
   - A responsive header with a hamburger menu for mobile devices.

3. **`HeroSection.jsx`**:
   - Displays the hero section with a background image and overlay.

4. **`ServiceCards.jsx`**:
   - Displays service cards with titles and descriptions.

5. **`PricingTable.jsx`**:
   - Displays pricing plans with features.

6. **`ContactForm.jsx`**:
   - A simple contact form with validation.

7. **`UserList.jsx`**:
   - Fetches and displays user data with a search bar.

8. **`SearchBar.jsx`**:
   - Implements a debounced search functionality.

9. **`useDebounce.js`**:
   - A custom hook for debouncing the search input.

10. **`filterUsers.js`**:
    - A utility function to filter users based on the search query.

---

## How to Use

1. **Search Bar**:
   - Type in the search bar to filter the list of users dynamically.

2. **Contact Form**:
   - Fill out the form and click "Submit" to see a confirmation message.

3. **Responsive Design**:
   - Resize the browser window to see how the application adapts to different screen sizes.

---

## Performance Optimization

- **Lazy Loading**: Images are loaded only when they come into the viewport.
- **Debouncing**: The search bar uses debouncing to reduce unnecessary API calls or filtering operations.
- **CSS Variables**: Ensures consistent theming and easy updates.

---

## Screenshots

### Desktop View
![Desktop View](./screenshots/desktop.png)

### Mobile View
![Mobile View](./screenshots/mobile.png)

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For any questions or feedback, feel free to reach out:

- **Name**: Your Name
- **Email**: your.email@example.com
- **GitHub**: [your-username](https://github.com/your-username)

---

Thank you for reviewing my assignment! 🚀

---

Let me know if you need further adjustments or additional details! 😊
