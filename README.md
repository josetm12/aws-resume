Here's a README file for your app:

---

# About Jose TM - Personal Website

Welcome to the repository for **About Jose TM**, a personal website built to showcase my portfolio and blog. This application is built with a React front end and a Python back end, and it leverages several AWS services to ensure a seamless and scalable experience.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Deployment](#deployment)
- [Custom Domain](#custom-domain)
- [Visitor Counter](#visitor-counter)
- [Setup and Installation](#setup-and-installation)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack

- **Front End:** React
- **Back End:** Python
- **Hosting:** AWS S3
- **Traffic Routing:** AWS CloudFront
- **Domain Management:** AWS Route 53
- **Visitor Counter:** AWS Lambda

## Features

- **Responsive Design:** Built with React to ensure a responsive and interactive user experience.
- **Visitor Counter:** A serverless function implemented using AWS Lambda tracks the number of visitors to the site.
- **Custom Domain:** The site is accessible via the custom domain [aboutjosetm.com](https://aboutjosetm.com).
- **Automated Deployment:** The app is automatically deployed to AWS S3 whenever changes are pushed to the main branch of this GitHub repository.

## Deployment

This project uses continuous deployment to ensure that the latest changes are always live. The deployment process is triggered whenever a push is detected on the `main` branch. The site is hosted on AWS S3, with CloudFront used for content delivery to ensure low-latency access worldwide.

## Custom Domain

The custom domain [aboutjosetm.com](https://aboutjosetm.com) is managed using AWS Route 53. AWS CloudFront is used to route traffic, ensuring fast and secure access to the website.

## Visitor Counter

The website includes a visitor counter, implemented using an AWS Lambda function. This function is triggered on each page load to increment and return the current visitor count, demonstrating the power of serverless architecture.

## Setup and Installation

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   - For the React front end:
     ```bash
     cd frontend
     npm install
     ```
   - The backend is maintained in another repo - https://github.com/josetm12/aws-resume-backend

3. **Run the front end:**
   ```bash
   npm start
   ```


## Contributing

Contributions are welcome! Please fork the repository and create a new branch for your feature or bugfix. Submit a pull request once your changes are ready for review.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README file as needed!
