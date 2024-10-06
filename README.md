# Realtime Currency Converter

This is a simple and responsive **Realtime Currency Converter** that allows users to convert between different currencies based on mock exchange rates. The conversion rates are hardcoded for demonstration purposes, but this project can be extended by integrating an API to fetch real-time exchange rates.

## Features

- Convert between major currencies (USD, EUR, GBP, INR, JPY, CAD, AUD, CNY).
- User-friendly interface with dropdown menus for selecting the base and target currencies.
- Switch button to quickly swap the selected currencies.
- Input validation to ensure valid conversion amounts.
- Displays the converted amount with two decimal precision.
- Responsive design with smooth hover effects.

## Technologies Used

- **HTML** for structuring the web page.
- **CSS** for styling and adding responsiveness.
- **JavaScript** for handling the logic of currency conversion and interactions.

## How to Use

1. Clone this repository to your local machine:
    ```bash
    git clone https://github.com/yourusername/realtime-currency-converter.git
    ```

2. Open the `index.html` file in your browser to view and interact with the converter.

3. Enter an amount in the input field, choose the currencies you want to convert from and to, and then press the **Convert** button to see the result.

4. Use the **Switch** button (🔁) to swap between the selected currencies easily.

5. The conversion result will appear below the input field.

## Project Structure

```bash
├── index.html         # The main HTML file
├── style.css          # The stylesheet for the project
├── javafile.js        # JavaScript file with conversion logic
├── bg.jpg             # Background image for the webpage
├── coinExchangeSticker.png # Coin exchange sticker image
└── README.md          # This file

### Steps for Uploading to GitHub:
1. **Create a new repository** on GitHub.
2. **Push the project files** to the repository using Git commands:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/yourusername/realtime-currency-converter.git
    git push -u origin main
    ```

3. **Verify** that your files, including the `README.md`, are uploaded properly and accessible.
