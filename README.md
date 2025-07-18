# Climate Action Pledge Microsite

A responsive single-page website built for a Web Developer Internship Task. The goal of this project is to provide a platform where users can take a voluntary pledge for climate-positive habits, receive a personalized certificate, and see their commitment featured on a public wall, inspiring collective action[cite: 9, 10, 11, 14].

---

## 🔴 Live Demo

**View the live project here:** [https://deluxe-flan-a4e960.netlify.app](https://deluxe-flan-a4e960.netlify.app)
---

## ✨ Features

This project includes all the required features as per the task brief:

* **Hero Section:** An engaging visual banner with a clear call-to-action button that smoothly scrolls to the pledge form[cite: 22, 23, 25].
* **Live KPIs:** Dynamically updated key metrics showing total pledges achieved against a static target, with a breakdown by user profile[cite: 26, 27, 28, 29, 57].
* **Pledge Form:** A user-friendly form to collect user details and their climate commitments[cite: 32]. Fields include Name, Email, Mobile, State, and Profile Type[cite: 33, 34, 35, 37, 38].
* **Commitment Themes:** A selection of 9 commitments organized into 3 distinct themes for users to choose from[cite: 39].
* **Personalized Certificate Generator:** Instantly generates a certificate upon form submission, featuring the user's name and a "Hearts rating" based on the number of commitments selected[cite: 40, 41, 45].
* **Public Pledge Wall:** A table that auto-populates with new entries, displaying non-sensitive information like Pledge ID, Name, Date, and a "Love for Planet" rating to inspire others[cite: 46, 47].
* **Clear Privacy Note:** A prominently displayed privacy note assuring users that their sensitive data (Email, Mobile) is kept private and used only for validation[cite: 49, 52].
***Fully Responsive Design:** The layout is optimized for a seamless experience on both mobile and desktop devices[cite: 54].

---

## 🚀 Bonus Features & Creative Touches

To create a more positive and shareable experience, several bonus features were implemented[cite: 59, 72]:

* **Engaging Animations:** Subtle fade-in animations on scroll and an animated number counter for KPIs make the site feel more dynamic and professional.
* **Downloadable Certificate:** Users can download their personalized certificate as a high-quality PNG image.
* **Shareable Certificate:** A share button utilizes the Web Share API, allowing users to easily share their commitment with friends on social media or messaging apps.
* **Modern UI/UX:** A clean, modern design with a positive color palette, stylish fonts (Google Fonts), and card-based layouts with shadows to enhance the user journey[cite: 55, 70].

---

## 🛠️ Technologies Used

* **HTML5:** For the structure and content of the website.
* **CSS3:** For all styling, including Flexbox for layout, custom properties, and responsive media queries.
* **JavaScript (ES6+):** For all dynamic functionality, including form handling, DOM manipulation, KPI updates, and animations.
* **html2canvas Library:** Used for the "Download Certificate" functionality, converting an HTML element into a PNG image.

---

## 💻 Local Setup

To run this project on your local machine:

1.  Clone the repository:
    ```bash
    git clone [https://github.com/dileepk2003/climate-pledge-microsite.git](https://github.com/dileepk2003/climate-pledge-microsite.git)
    ```
2.  Navigate into the project directory:
    ```bash
    cd climate-pledge-microsite
    ```
3.  Open the `index.html` file in your web browser. No special servers are needed.