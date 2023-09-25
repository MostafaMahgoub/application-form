# Application Form

This is a form application designed for recruiters or HR professionals. It allows them to create customized application forms with specific fields and questions for applicants. This README file provides instructions on how to clone the project, start the API, and run the application.<br>
**The key feature of this application is its ability to package and send multiple data files, including images, to the backend**

## Table of Contents
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Endpoints](#endpoints)
- [Testing](#testing)
- [Contributing](#contributing)

## Getting Started

To get a local copy of the project up and running, follow these steps.

### Prerequisites
- [Stoplight](https://stoplight.io)
- [Tailwindcss](https://tailwindcss.com)
- [Node.js](https://nodejs.org)
- [Git](https://git-scm.com)

### Installation

1. Clone the repository: <br>
`git clone https://github.com/MostafaMahgoub/application-form.git`

2. To install the dependencies for the project run : <br>
`npm install`
3. Navigate into the project dir and look for file called "Application Form.yaml" and then open any terminal and run : <br>
`prism mock "Application Form.yaml"` <br>
*This will start the mocked server so you can test the App with the api and how it handle the request etc..*



## Endpoints

The server provides the following endpoints:

- `http://127.0.0.1:4010/api/1/programs/programId/application-form` (GET): Provides an endpoint that returns a list of informations and question about the applicatiton form.
- `http://127.0.0.1:4010/api/1/programs/programId/application-form` (PUT): Provides an endpoint that takes the application form in the request body as Json, and responds back with no content.


## Testing


To run the test suite for the client side, navigate to the `client` folder and run:

`npm test`

This will run the test suite using Jest and Enzyme.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.