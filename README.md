# 🌈 BlogSphere

BlogSphere is a Full Stack Blog Management Platform developed using Spring Boot, MySQL, HTML, CSS, and JavaScript. It allows users to register, log in, create blogs, view posts, interact with content, and communicate through a contact system.

## Features

🔐 User Authentication (Register & Login)

📝 Create Blog Posts

📚 View All Blogs

🔍 Search Blogs

❤️ Blog Likes System

📊 Analytics Dashboard

👤 User Profile Management

📧 Newsletter Subscription

📞 Contact Us System

📩 Contact Messages Management

🌗 Dark / Light Mode

🏷️ Blog Categories

🔥 Trending Blogs Section

⏳ Recent Activity Timeline

🎨 Modern Responsive UI/UX

## Technologies Used

### Backend

- Java 21
- Spring Boot
- Spring Data JPA
- Spring Security
- Hibernate

### Frontend

- HTML5
- CSS3
- JavaScript

### Database

- MySQL

### Tools

- Eclipse IDE
- Git
- GitHub
- Postman

## Database Tables

### Users

Stores user registration and login information.

### Posts

Stores blog posts created by users.

### Comments

Stores comments on blog posts.

### Contact Messages

Stores messages submitted through the Contact Us page.

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/blogsphere.git
cd blogsphere
```

### Configure MySQL

Create Database:

```sql
CREATE DATABASE blogdb;
```

### Update application.properties

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/blogdb
spring.datasource.username=root
spring.datasource.password=yourpassword

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### Run Application

```bash
mvn spring-boot:run
```

or

Run `Application.java` from Eclipse.

## Project Structure

```text
BlogSphere/
│
├── src/main/java
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   └── Application.java
│
├── src/main/resources
│   ├── static
│   │   ├── css
│   │   ├── js
│   │   └── images
│   │
│   ├── templates
│   └── application.properties
│
└── pom.xml
```

## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Blogs

```http
GET /api/posts
POST /api/posts
```

### Contact Messages

```http
POST /api/contact
GET /api/contact
```

## Future Enhancements

✅ Image Upload for Blogs

✅ Blog View Counter

✅ Admin Dashboard

✅ JWT Authentication

✅ Email Notifications

✅ AI Blog Recommendations

✅ Real-Time Notifications

## Screenshots

### Register Page

User Registration Interface

### Login Page

Secure Login System

### Dashboard

Analytics, Trending Blogs and Activity Timeline

### Blog Management

Create and View Blogs

### Contact Us

Message Submission and Management

## Author

**THILAGAVATHI SELVAM**

🎓 Final Year Computer Science and Engineering Student

💻 Full Stack Developer | Java | Spring Boot | AI/ML Enthusiast

## License

MIT License
