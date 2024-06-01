# YouTube Pause and Resume Extension

![version](https://img.shields.io/badge/version-1.0-blue.svg)
![license](https://img.shields.io/badge/license-MIT-green.svg)

This Chrome extension automatically pauses YouTube videos when you switch tabs or minimize the window, and resumes playing when you return to the YouTube tab.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [File Structure](#file-structure)
- [Files](#files)
- [Usage](#usage)
- [Development](#development)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## Features

- Automatically pauses YouTube videos when the tab is inactive or the window is minimized.
- Automatically resumes YouTube videos when you return to the tab.

## Installation

1. **Clone or download this repository** to your local machine.

   ```sh
   git clone https://github.com/rkyadav3/Youtube-Pause-and-Resume.git
- Open Chrome and navigate to chrome://extensions/.

- Enable Developer mode by toggling the switch in the top right corner.

- Click on "Load unpacked" and select the directory containing your extension files.

- File Structure
- bash
- Copy code
- /your-extension-directory
  - /images
    - icon16.png
    - icon48.png
    - icon128.png
  - background.js
  - content.js
  - manifest.json
- Files
- manifest.json: The manifest file that contains the extension's configuration and permissions.
- background.js: The background script that listens for tab activation and update events.
- content.js: The content script that handles visibility changes to pause and resume the video.
- /images: Directory containing the icon images used for the extension.
- Usage
- Load the extension as described in the Installation section.

- Navigate to YouTube and play a video.

- The extension will automatically pause the video when you switch to a different tab or minimize the window, and resume playing when you return to the YouTube tab.

## Development
- If you want to contribute or modify the extension:

- Fork this repository and clone it to your local machine.

- sh
- Copy code
- git clone https://github.com/rkyadav3/Youtube-Pause-and-Resume.git
- Make your changes and test them by reloading the unpacked extension in Chrome.

- Submit a pull request with your changes.

## Troubleshooting
- If the extension is not working as expected, check the console logs for errors.
- Ensure that you have granted the necessary permissions in the manifest.json file.
## License
This project is licensed under the MIT License. See the LICENSE file for details.
