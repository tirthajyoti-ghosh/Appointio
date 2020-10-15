<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![License: MIT][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/tirthajyoti-ghosh/final-capstone-frontend">
    <img src="https://user-images.githubusercontent.com/57726348/95655344-3ae8de00-0b24-11eb-9c34-1fac11fecfcc.png" alt="Logo" width="195" height="115">
  </a>

  <h3 align="center">Appointio (front-end)</h3>

  <p align="center">
    Browse apartments and schedule a tour before you rent.
    <br />
    <a href="https://github.com/tirthajyoti-ghosh/final-capstone-frontend"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://adoring-pike-d04b95.netlify.app/">View Demo</a>
    ·
    <a href="https://github.com/tirthajyoti-ghosh/final-capstone-frontend/issues">Report Bug</a>
    ·
    <a href="https://github.com/tirthajyoti-ghosh/final-capstone-frontend/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Run Tests](#run-tests)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->
## About The Project

![image](https://user-images.githubusercontent.com/57726348/95876233-7851a380-0d90-11eb-94d4-09e22587110e.png)
![image](https://user-images.githubusercontent.com/57726348/95876496-bf3f9900-0d90-11eb-97ef-443fb3b06dfb.png)
![image](https://user-images.githubusercontent.com/57726348/95876671-edbd7400-0d90-11eb-8b7c-85d23b71729a.png)

This is a Single-Page **tablet** web app built with React/Redux (front-end) and Rails (back-end). The topic of this app is to book an appointment to schedule a tour of an apartment before you rent. You will have a list of apartments based on type to browse through. You can visit the apartment details page to know more and book an appointment.

### Built With

- React
- Redux
- ESLint
- Stylelint
- SASS
- Styled components
- npm
- Rails REST API
- React-image-gallery
- Prop-types
- [Netlify](https://adoring-pike-d04b95.netlify.app/)

## Live demo

**IMPORTANT!** You have to enable third-party cookies in your browser otherwise you won't be able to login.

Deployed to Netlify - [live demo](https://adoring-pike-d04b95.netlify.app/).

<!-- GETTING STARTED -->
## Getting Started

You need the back-end server for this app to work. You can find the intructions to setup back-end server locally [here](https://github.com/tirthajyoti-ghosh/final-capstone-backend).

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm

    ```sh
    npm install npm@latest -g
    ```

### Installation

1. Clone the repo

    ```sh
    git clone https://github.com/tirthajyoti-ghosh/final-capstone-frontend.git
    ```

2. Install NPM packages

    ```sh
    npm install
    ```

3. Start local server

    ```sh
    REACT_APP_BASE_URL=http://localhost:3001 npm start
    ```

    Please note that only `npm start` won't work as this app relies on this environment variable.

4. Visit `http://localhost:3000/` in your browser.

## Run Tests

**IMPORTANT!** You need the back-end server for the tests to work. You can find the intructions to setup back-end server locally [here](https://github.com/tirthajyoti-ghosh/final-capstone-backend).

Run this command in your terminal:
```sh
REACT_APP_BASE_URL=http://localhost:3001 npm test
```

Please note that only `npm test` won't work as this app relies on this environment variable.

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/tirthajyoti-ghosh/final-capstone-frontend/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

👤 **Tirthajyoti Ghosh**

- Website: [tirthajyoti](https://tirthajyoti-ghosh.github.io/Portfolio/)
- GitHub - [@tirthajyoti-ghosh](https://github.com/tirthajyoti-ghosh)
- Twitter - [@terrific_ghosh](https://twitter.com/terrific_ghosh)
- LinkedIn - [linkedin](https://www.linkedin.com/in/tirthajyoti-ghosh/)

Project Link: [https://github.com/tirthajyoti-ghosh/final-capstone-frontend](https://github.com/tirthajyoti-ghosh/final-capstone-frontend)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* Site design - https://www.behance.net/gallery/26425031/Vespa-Responsive-Redesign
* README Icon made from Icons8
* [Img Shields](https://shields.io)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/tirthajyoti-ghosh/final-capstone-frontend.svg?style=flat-square
[contributors-url]: https://github.com/tirthajyoti-ghosh/final-capstone-frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tirthajyoti-ghosh/final-capstone-frontend.svg?style=flat-square
[forks-url]: https://github.com/tirthajyoti-ghosh/final-capstone-frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/tirthajyoti-ghosh/final-capstone-frontend.svg?style=flat-square
[stars-url]: https://github.com/tirthajyoti-ghosh/final-capstone-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/tirthajyoti-ghosh/final-capstone-frontend.svg?style=flat-square
[issues-url]: https://github.com/tirthajyoti-ghosh/final-capstone-frontend/issues
[license-shield]: https://img.shields.io/badge/License-MIT-yellow.svg
[license-url]: https://github.com/tirthajyoti-ghosh/final-capstone-frontend/blob/development/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/tirthajyoti-ghosh/
