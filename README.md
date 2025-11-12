# 🚀 Anthony Njoku - Portfolio Website

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-brightgreen?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-2.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**AI & MLOps Engineer | Backend Developer**

[🌐 Live Demo](#) | [📧 Contact](mailto:njoku2468200@gmail.com) | [💼 LinkedIn](https://linkedin.com/in/anthony-emeka-6227782a1/)

</div>

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Projects Showcase](#projects-showcase)
- [Contact](#contact)
- [License](#license)

---

## 🎯 About

This is my personal portfolio website showcasing my expertise as an **AI & MLOps Engineer** and **Backend Developer**. The site highlights my projects, skills, and experience in building intelligent, scalable systems powered by Machine Learning, Artificial Intelligence, and cloud-native backend engineering.

### Key Highlights:
- 🤖 **AI & Machine Learning** - TensorFlow, PyTorch, scikit-learn
- ⚙️ **MLOps & DevOps** - Docker, Kubernetes, MLflow, CI/CD
- 💻 **Backend Development** - Python (FastAPI, Flask, Django), PHP (Laravel), Node.js
- 🗄️ **Database Management** - MySQL, PostgreSQL
- 🎨 **Frontend Technologies** - HTML5, CSS3, JavaScript, Bootstrap

---

## ✨ Features

- **🎨 Modern & Responsive Design** - Fully responsive layout that works seamlessly across all devices
- **⚡ Smooth Animations** - Engaging animations using Lottie and custom CSS animations
- **📱 Mobile-First Approach** - Optimized for mobile, tablet, and desktop viewing
- **🎯 Interactive UI** - Smooth scroll navigation, hover effects, and interactive elements
- **🌐 SEO Optimized** - Meta tags, semantic HTML, and optimized content for search engines
- **💼 Projects Showcase** - Detailed presentation of portfolio projects with live demos and source code links
- **📊 Skills Display** - Tech stack badges with visual categorization
- **📧 Contact Integration** - Direct WhatsApp and email contact options
- **⚡ Fast Loading** - Optimized assets and loading overlay for smooth user experience

---

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom styles with Flexbox & Grid
- **SCSS** - Advanced styling with preprocessor
- **JavaScript** - Interactive functionality
- **Bootstrap 4** - Responsive framework
- **jQuery** - DOM manipulation
- **Font Awesome** - Icon library
- **Lottie** - Animated illustrations

### Development Tools
- **Sass/SCSS** - CSS preprocessing
- **Git & GitHub** - Version control
- **VS Code** - Code editor

### External Libraries & APIs
- Google Fonts (Lato, Poppins)
- Lottie Player
- Waypoints.js
- Popper.js

---

## 📁 Project Structure

```
myportfolio.com-main/
│
├── index.html              # Main HTML file
├── README.md              # Project documentation
├── package.json           # Node dependencies
│
├── css/                   # Stylesheets
│   ├── main.css          # Compiled main CSS
│   ├── main.comp.css     # Compiled CSS (unminified)
│   ├── main.prefix.css   # Prefixed CSS
│   └── custom-enhancements.css  # Custom enhancements
│
├── scss/                  # Sass source files
│   ├── main.scss         # Main Sass entry point
│   ├── abstracts/        # Variables, mixins, functions
│   ├── base/             # Base styles, typography, fonts
│   ├── components/       # Reusable components (buttons, cards, etc.)
│   ├── layout/           # Layout components (header, footer, navbar)
│   ├── pages/            # Page-specific styles
│   ├── vendors/          # Third-party styles (Bootstrap)
│   └── vendors-extensions/  # Custom Bootstrap modifications
│
├── js/                    # JavaScript files
│   ├── script.js         # Custom JavaScript
│   └── vendors/          # Third-party JS libraries
│       ├── bootstrap/
│       ├── jquery/
│       ├── popper/
│       └── waypoints/
│
└── img/                   # Images and assets
    ├── bg/               # Background images
    ├── favicon/          # Favicon files
    └── SVG/              # SVG icons and graphics
```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and JavaScript
- (Optional) Node.js and npm for SCSS compilation

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Starislauz/myportfolio.com.git
   ```

2. **Navigate to project directory**
   ```bash
   cd myportfolio.com-main
   ```

3. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

4. **View the website**
   - Open your browser and navigate to `http://localhost:8000`

### Development Setup (Optional)

If you want to modify SCSS files:

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Compile SCSS**
   ```bash
   npm run compile:sass
   ```

3. **Watch for changes**
   ```bash
   npm run watch:sass
   ```

---

## 🎨 Customization

### Personal Information
Edit `index.html` to update:
- Your name and title
- About section content
- Skills and technologies
- Social media links
- Contact information

### Projects
Add or modify projects in the "Things I've made" section:
```html
<div class="project-box col-sm-12 col-md-6 col-lg-4 mb-5">
    <div class="project">
        <div class="project__img-box">
            <img src="img/your-project.jpg" alt="Project Name">
        </div>
        <div class="project__content-box">
            <h3 class="heading-tertiary"><strong>Your Project Title</strong></h3>
            <p class="project__details">Your project description...</p>
            <div class="project__cta-box text-center">
                <a href="your-demo-link" class="btn btn--ghost">Demo</a>
                <a href="your-github-link" class="btn btn--full">Source</a>
            </div>
        </div>
    </div>
</div>
```

### Styling
Modify SCSS files in the `scss/` directory:
- `abstracts/_variables.scss` - Colors, fonts, breakpoints
- `base/_typography.scss` - Text styles
- `components/` - Component-specific styles
- `layout/` - Layout sections

### Colors
Update color scheme in `scss/abstracts/_variables.scss`:
```scss
$primary-color: #667eea;
$secondary-color: #764ba2;
$accent-color: #64ffda;
```

---

## 💼 Projects Showcase

This portfolio features a diverse range of projects including:

### 🤖 AI & Machine Learning
- **Diabetes Prediction API** - ML-powered FastAPI application
- **Voice-Controlled Terminal** - LLM integration with speech recognition
- **Custom LLM Model** - Gemini API-based conversational AI

### 🌐 Web Applications
- **VTU Platform** - Mobile recharge & bill payment system
- **FalconFX Academy** - Forex trading education platform
- **Task Manager API** - RESTful API with Express.js

### 🔧 Automation & Tools
- **Telegram Bot** - Customer support automation
- **WiFi QR Generator** - Instant network access tool

---

## 📧 Contact

**Anthony Njoku**

- 📧 Email: [njoku2468200@gmail.com](mailto:njoku2468200@gmail.com)
- 💼 LinkedIn: [anthony-emeka-6227782a1](https://linkedin.com/in/anthony-emeka-6227782a1/)
- 🐱 GitHub: [@Starislauz](https://github.com/Starislauz)
- 📱 WhatsApp: [+234 810 506 6210](https://wa.me/2348105066210)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Bootstrap** - Responsive framework
- **Font Awesome** - Icon library
- **Google Fonts** - Typography (Lato & Poppins)
- **Lottie** - Animations
- **Unsplash** - Stock images

---

## 🌟 Show Your Support

If you like this project, please give it a ⭐ on [GitHub](https://github.com/Starislauz/myportfolio.com)!

---

<div align="center">

**Made with ❤️ by Anthony Njoku**

[![GitHub](https://img.shields.io/badge/GitHub-Starislauz-181717?style=flat&logo=github)](https://github.com/Starislauz)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Anthony_Njoku-0077B5?style=flat&logo=linkedin)](https://linkedin.com/in/anthony-emeka-6227782a1/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Contact_Me-25D366?style=flat&logo=whatsapp)](https://wa.me/2348105066210)

</div>
