# Resumify AI

Resumify AI is a modern AI-powered resume builder built with React and Vite. It helps users create professional, clean, and ATS-friendly resumes through a simple and responsive interface. The project focuses on delivering a smooth user experience with fast performance, beautiful UI design, and AI-generated resume formatting.

## Features

- AI-generated professional resumes
- ATS-friendly resume formatting
- Modern hero section with video background
- Simple and responsive UI
- Fast frontend powered by Vite
- Client-side routing using React Router DOM
- Beautiful styling with Tailwind CSS v4 and DaisyUI
- API integration using Axios

## Tech Stack

- React (Vite)
- Tailwind CSS v4
- DaisyUI
- React Router DOM
- Axios

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/resumify-ai.git
```

Move into the project folder:

```bash
cd resumify-ai
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Background Video

Place your background video inside the public folder:

```bash
public/video.mp4
```

## API Configuration

If your backend runs on a different port or domain, update the Axios base URL configuration.

Example:

```js
const API = axios.create({
  baseURL: "http://localhost:3000"
})
```

## Project Structure

```bash
src/
 ├── components/
 ├── pages/
 ├── routes/
 ├── api/
 └── App.jsx
```

## Future Improvements

- Resume download as PDF
- Multiple resume templates
- Authentication system
- Resume history saving
- Dark/Light mode toggle
- AI suggestions for skills and summaries

## Author

Anand Anupam

## License

This project is licensed under the MIT License.