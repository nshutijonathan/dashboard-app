# Dashboard App

## Overview
This project is a Next.js-based dashboard application that displays website statistics and customer data. It uses randomly generated data to simulate real-world scenarios.

## Setup

1. Clone the repository:
   ```
   git clone https://github.com/nshutijonathan/dashboard-app.git
   cd dashboard-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

5. Open [https://dashboard-app-rho-indol.vercel.app/](https://dashboard-app-rho-indol.vercel.app/) in your browser to view the hosted version of application.

## Login Credentials

**Important: Use these credentials to access the dashboard**

```
Username: admin
Password: password
```

These credentials are for demonstration purposes only. In a production environment, secure authentication would be implemented.

## Features

- Dashboard overview with key metrics
- Website statistics page
- Customer management page with search functionality
- Simple login system (for demonstration purposes)

## Data Generation

Initially, the project was intended to use Mockaroo (https://mockaroo.com/) for data generation. However, due to persistent errors when attempting to access the Mockaroo API:

```
// https://my.api.mockaroo.com/users.json?key=0eb3d310
{
  "error": "undefined method `file_format' for nil:NilClass"
}
```

We switched to using the Faker library to generate random data locally. This approach ensures consistent data generation without relying on external APIs.

## Authentication

The current login system is a basic implementation for demonstration purposes. User credentials are stored in localStorage upon successful login. In a production environment, a more robust authentication system would be implemented, potentially including:
- Secure password hashing
- JWT token-based authentication
- Server-side session management

## Future Improvements

1. Implement a full-fledged REST API for data management
2. Enhance authentication with proper security measures
3. Add more detailed analytics and data visualization
4. Implement real-time data updates

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Faker.js for data generation

## Contributing

Contributions to improve the dashboard or add new features are welcome. Please follow the standard fork-and-pull request workflow.
