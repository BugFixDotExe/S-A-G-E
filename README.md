# S A G E - Student Automated Job Engine (In Progress)

![SAGE Logo](path_to_logo_or_screenshot)

## Table of Contents
- [Introduction](#introduction)
- [Problem Statement](#problem-statement)
- [Why SAGE?](#why-sage)
- [Solution](#solution)
  - [OCR and Browser Automation](#ocr-and-browser-automation)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

SAGE (**Student Automated Job Engine**) is an innovative job search engine designed specifically for students and fresh graduates. It leverages cutting-edge technologies such as **OCR (Optical Character Recognition)**, **Browser Automation**, and **Large Language Models (LLMs)** to automate job searching, extract relevant job listings, and personalize recommendations based on CV data.

## Problem Statement

Students and recent graduates often struggle to find job opportunities that align with their skills and experiences. Traditional job search platforms offer a wide range of listings, but lack the personalization and relevance required to cater to individual needs.

Additionally, most job search platforms rely heavily on APIs that have strict rate limits, preventing large-scale or real-time job searches without running into performance or availability issues.

## Why SAGE?

SAGE aims to tackle two major problems:

1. **Overwhelming Job Listings**: Traditional job platforms display a massive list of available jobs, but it's hard for students to find those that match their skills, qualifications, and interests. There's a need for **personalized job recommendations** based on student CVs.
  
2. **API Limitations**: Many job search platforms provide APIs with rate limits, making it hard to gather real-time, large-scale data efficiently. This restricts the ability to offer accurate and up-to-date job information.

## Solution

SAGE introduces a unique approach to overcome these challenges by:

- **Using OCR (Optical Character Recognition)**: Instead of relying solely on job search APIs, SAGE uses OCR to scrape job data from job boards that don’t offer open APIs or have limited access. This allows SAGE to extract data directly from the job postings visible on the browser.
  
- **Browser Automation**: SAGE automates the process of navigating job boards, scrolling through listings, and capturing screenshots of relevant jobs. By mimicking user behavior, SAGE bypasses API limitations and captures the most up-to-date listings.

This combination of OCR and browser automation provides SAGE with the flexibility to pull jobs from multiple sources, even when APIs are unavailable or restricted.

### OCR and Browser Automation

- **OCR**: SAGE uses OCR to extract text from job listings that are presented as images or are embedded in webpages without structured APIs. This ensures that no relevant job data is left out, even if the listings are not in a machine-readable format.
  
- **Browser Automation**: SAGE uses tools like **Puppeteer**  to automate browser actions such as logging into job boards, performing searches, scrolling through listings, and taking screenshots. It then processes these screenshots using OCR to extract job information.

This combination allows SAGE to provide **real-time, large-scale** job search results without the limitations of conventional API rate limits.

## Key Features

- **Personalized Job Matching**: Matches job listings to student CVs using an LLM to understand the skills and experience mentioned in the resume and suggest relevant roles.
- **API-Limit-Free Data Extraction**: Uses browser automation and OCR to bypass API limitations, allowing real-time scraping from multiple job boards.
- **Automatic Job Categorization**: Jobs are automatically categorized based on the student's skills, industry preferences, and experience level.
- **Seamless Experience**: The user interface is designed for ease of use, enabling students to focus on finding the right job without the hassle of endless scrolling.
  
## Technology Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript (AJAX and jQuery)
- **Automation**: Puppeteer for browser automation
- **OCR**: Tesseract.js for extracting text from images
- **Large Language Model (LLM)**: Google Gemini for matching jobs to CV content

## Screenshots

### 1. Browser Automation in Action
![Browser Automation Screenshot](path_to_screenshot1)

> **Description**: SAGE automating job searches by scrolling through listings on a popular job board.

### 2. OCR Text Extraction
![OCR Extraction Screenshot](path_to_screenshot2)

> **Description**: OCR extracting key job information from a screenshot, converting it into structured data.

### 3. Personalized Job Matching
![Job Matching Screenshot](path_to_screenshot3)

> **Description**: Personalized job recommendations based on the user’s uploaded CV.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/BugFixDotExe/S-A-G-E.git
   cd sage
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Add your OCR and automation credentials in a `.env` file.

4. Start the server:
   ```bash
   npm start
   ```

## Usage

- Upload your CV (in PDF format) and let SAGE analyze it.
- Watch as SAGE automates job searches across multiple platforms.
- Get a list of job recommendations tailored specifically to your CV.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request.

## License

This project is licensed under the Creative Commons License. See the [LICENSE](LICENSE) file for details.

---