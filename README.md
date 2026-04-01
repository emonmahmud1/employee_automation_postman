# Employee API Automation with Newman

Simple and informative API automation project using Postman Collection + Newman.

## About This Project

This project runs Employee API test cases from a Postman collection using Newman and generates an HTML report.

Automated scenarios include:

- Login
- Create Employee
- Employee List
- Update Employee
- Delete Employee
- Query Params validation

## Postman Collection Link

- Collection API URL: https://api.postman.com/collections/52498897-2a2c83bb-6b64-43fa-b675-6accccac4c54?access_key={{secretKey}}

## Postman API Documentation

- API Docs: https://documenter.getpostman.com/view/34701780/2sBXiojp15

## Project Structure

- `report.js` - Newman runner script
- `TestEnv.postman_environment.json` - Postman environment file
- `.env` - stores Postman API access key
- `Reports/` - generated HTML report output

## Prerequisites

Before running this project, make sure you have:

- Node.js
- npm
- Internet connection (collection is fetched from Postman API)

## Installation and Setup (All in One)

1. Install project dependencies:

```bash
npm install
```

2. Install HTML reporter for Newman:

```bash
npm install newman-reporter-htmlextra
```

3. Create and configure `.env` file in project root:

```env
secretKey=YOUR_POSTMAN_ACCESS_KEY
```

4. Keep environment file in project root:

`TestEnv.postman_environment.json`

## How to Run This Project

Run the Newman automation with Node script:

```bash
node report.js
```

After successful execution:

- HTML report is generated at `Reports/report.html`

## Newman Interface Screenshot

Add your Newman run screenshot to this path:

`newman_screenShoot.png`

Then it will display here:

![Newman Interface Screenshot](newman_screenShoot.png)

<!-- ## Automation Video

Add your automation video link here:

- Video Link: https://youtu.be/your-automation-video-link -->


