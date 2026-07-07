# Markdown File Explorer

A lightweight web-based file explorer built with **Node.js**, **Express.js**, **EJS**, and **Tailwind CSS**. The application reads a flat list of Markdown files, organizes them into a hierarchical folder structure, and provides an interactive interface for browsing and previewing documents.

## Features

- 📁 Automatically organizes Markdown files into a hierarchical folder structure.
- 📂 Collapsible and expandable folders.
- 📄 Markdown file preview.
- 🔍 Search files by name.
- 🎨 Responsive user interface built with Tailwind CSS.
- ⚡ Server-side rendering using Express and EJS.

## Technologies Used

- Node.js
- Express.js
- EJS
- Tailwind CSS
- Marked (Markdown parser)

## Project Structure

```text
file-explorer/
├── app.js
├── package.json
├── routes/
├── services/
├── views/
├── public/
├── data/
│   └── files/
├── README.md
└── AI_USAGE.md
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/ashik24x7/file-explorer.git
```

### 2. Navigate to the project directory

```bash
cd file-explorer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

Development mode:

```bash
npm run dev
```

or

```bash
npm start
```

### 5. Open your browser

Visit:

```
http://localhost:3000
```

## Usage

- The application automatically reads all Markdown (`.md`) files from the `data/files` directory.
- Browse the generated folder structure using the file explorer.
- Click a folder to expand or collapse it.
- Click a Markdown file to preview its contents.

## Known Limitations

Due to the project submission deadline, the following features were not completed:

- Allow users to create folders.
- Allow users to move files or folders around.

The current application successfully demonstrates the core functionality of organizing Markdown files into a hierarchical structure, browsing the file tree, searching files, and previewing Markdown content. These remaining features would be the next priority in future development.

## AI Usage

AI (ChatGPT) was used as a development assistant for project setup, architecture guidance, debugging, UI improvements, and code review.

For more information, see **AI_USAGE.md**.