# Rutgers University Recruitment Website

A modern, responsive website designed to showcase Rutgers University's academic programs, campus life, and recruitment information. Built with HTML5, CSS3, and JavaScript for a professional university presentation.

![Rutgers University Website](https://img.shields.io/badge/Status-Live-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)

## 🎯 Project Overview

This is a comprehensive university recruitment website that presents Rutgers University in an engaging and professional manner. The website features modern design principles, responsive layout, and interactive elements to attract prospective students and showcase the university's offerings.

## ✨ Features

### 🏠 **Hero Section**
- Stunning campus background image
- Compelling call-to-action buttons
- Animated text and smooth transitions
- Mobile-responsive design

### 📊 **About Section**
- University statistics and achievements
- Interactive hover effects
- Professional layout with engaging visuals

### 🎓 **Academic Programs**
- Six featured programs with icons
- Computer Science, Biology, Business, Engineering, Psychology, Chemistry
- Card-based layout with hover animations
- Detailed program descriptions

### 🏛️ **Campus Life**
- Housing and residence information
- Student organizations showcase
- Athletics and recreation details
- Interactive feature cards

### 📞 **Contact & Admissions**
- Comprehensive contact information
- Tuition and financial aid details
- Interactive contact form with validation
- Multiple contact methods

### 🎨 **Design Features**
- Modern, clean design aesthetic
- Rutgers University color scheme (Red #cc0000)
- Smooth animations and transitions
- Fully responsive across all devices
- Professional typography (Playfair Display + Inter)

## 🚀 Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Advanced styling, animations, and responsive design
- **JavaScript** - Interactive functionality and form handling
- **Bootstrap 5** - Responsive framework and components
- **Font Awesome** - Professional icons
- **Google Fonts** - Typography (Playfair Display, Inter, Roboto)

## 📁 Project Structure

```
Rutgers-college-recruitment/
├── index.html          # Main HTML file
├── style.css           # CSS styles and animations
├── script.js           # JavaScript functionality
├── imgs/               # Image assets
│   └── rutgers1.jpg    # Campus background image
└── README.md           # Project documentation
```

## 🎨 Design Highlights

### Color Palette
- **Primary Red**: #cc0000 (Rutgers Red)
- **Secondary Blue**: #2c3e50 (Dark Blue)
- **Accent Orange**: #f39c12 (Gold)
- **Text Dark**: #2c3e50
- **Text Light**: #7f8c8d
- **Background**: #ffffff / #f8f9fa

### Typography
- **Headings**: Playfair Display (Serif)
- **Body Text**: Inter (Sans-serif)
- **Navigation**: Roboto (Sans-serif)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/526agadre/Rutgers-college-recruitment.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Rutgers-college-recruitment
   ```

3. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     
     # Using PHP
     php -S localhost:8000
     ```

4. **Access the website**
   - Open your browser and go to `http://localhost:8000`

## 🎯 Key Sections

### 1. Navigation
- Fixed navigation bar with smooth scrolling
- Active section highlighting
- Mobile-responsive hamburger menu

### 2. Hero Section
- Full-screen campus background
- Compelling university messaging
- Call-to-action buttons

### 3. About Rutgers
- University statistics (50,000+ students, 4,000+ faculty)
- Historical information (founded 1766)
- Professional presentation

### 4. Academic Programs
- Six featured programs with icons
- Interactive hover effects
- Detailed descriptions

### 5. Campus Life
- Housing information
- Student organizations
- Athletics and recreation

### 6. Contact & Admissions
- Contact form with validation
- Tuition information
- Financial aid details

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #cc0000;    /* Rutgers Red */
    --secondary-color: #2c3e50;  /* Dark Blue */
    --accent-color: #f39c12;     /* Gold */
}
```

### Adding New Programs
Add new program cards in the Programs section:
```html
<div class="col-lg-4 col-md-6 mb-4">
    <div class="program-card">
        <div class="program-icon">
            <i class="fas fa-your-icon"></i>
        </div>
        <h4>Program Name</h4>
        <p>Program description...</p>
    </div>
</div>
```

### Updating Content
- Edit text content directly in `index.html`
- Modify styling in `style.css`
- Update functionality in `script.js`

## 📊 Performance Features

- **Optimized Images**: Compressed and properly sized
- **Minified CSS**: Efficient styling
- **Smooth Animations**: Hardware-accelerated transitions
- **Fast Loading**: Optimized code structure
- **Mobile-First**: Responsive design approach

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## 📝 Form Functionality

The contact form includes:
- **Client-side validation**
- **Email format checking**
- **Required field validation**
- **Success/error messaging**
- **Form reset after submission**

## 🎨 Animation Features

- **Fade-in effects** on scroll
- **Hover animations** on cards and buttons
- **Smooth scrolling** navigation
- **Loading animations**
- **Interactive button effects**

## 📱 Mobile Optimization

- **Touch-friendly** buttons and links
- **Responsive images** that scale properly
- **Mobile navigation** with hamburger menu
- **Optimized typography** for small screens
- **Fast loading** on mobile networks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Aditya Gadre**
- GitHub: [@526agadre](https://github.com/526agadre)
- Project: [Rutgers College Recruitment](https://github.com/526agadre/Rutgers-college-recruitment)

## 🙏 Acknowledgments

- Rutgers University for inspiration and branding
- Bootstrap team for the responsive framework
- Font Awesome for the beautiful icons
- Google Fonts for the typography
- All contributors and supporters

## 📞 Support

If you have any questions or need help with this project, please:
- Open an issue on GitHub
- Contact the author
- Check the documentation

---

**Made with ❤️ for Rutgers University**

*This website showcases the power of modern web development and responsive design in creating engaging university recruitment experiences.*
