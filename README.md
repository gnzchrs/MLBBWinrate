# ⚔️ MLBB Winrate Pro Calculator

A high-performance, gaming-themed web utility designed for **Mobile Legends: Bang Bang** players to calculate match statistics and winrate goals. 

![MLBB Theme](https://img.shields.io/badge/Theme-MLBB%20Vibrant-blue)
![Language](https://img.shields.io/badge/Language-HTML%20%2F%20CSS%20%2F%20JS-orange)

## 🚀 Features
* **Winrate Computation:** Instantly calculate your current total wins.
* **Straight Wins Tracker:** Determine exactly how many consecutive wins you need to reach your target WR (e.g., 50% to 60%).
* **Game-Inspired UI:** Features a vibrant "Battle Interface" with glassmorphism, gold accents, and neon glows.
* **Responsive Design:** Works perfectly on both Desktop (Visual Studio) and Mobile browsers.
* **Reset Function:** Quickly clear data for new calculations.

## 📂 Project Structure
```text
MLBBWinrate/
├── index.html          # Main entry point & structure
├── favicon.png         # MLBB Tab Icon
├── css/
│   └── style.css       # Gaming UI styles & animations
└── js/
    └── script.js       # Winrate logic & event handling


🛠️ Installation & SetupClone the repository:Bashgit clone [https://github.com/gnzchrs/MLBBWinrate.git](https://github.com/gnzchrs/MLBBWinrate.git)
Open in Visual Studio:Open Visual Studio.Select File > Open > Folder and choose the project directory.Run:Right-click index.html and select View in Browser.📊 The Formula UsedThe "Straight Wins" calculation follows this logic:$$Wins\ Needed = \frac{(Target\ WR \times Total\ Matches) - (100 \times Current\ Wins)}{100 - Target\ WR}$$Developed for the MLBB Community. Victory belongs to the persistent!
---

### Pro-Tip for your GitHub Repo:
Once you paste this into your `README.md` file and push it to GitHub, the formulas and structure will automatically be formatted into a nice-looking page.

**Would you like me to help you set up the "GitHub Actions" so your website updates autom
