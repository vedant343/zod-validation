# Zod Validation for MongoDB Project

This project utilizes Zod for data validation and interacts with a MongoDB database. Below are key components and instructions for getting started.

## Setup

- Ensure Node.js and MongoDB are installed.
- Clone the repository and install dependencies with `npm install`.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the project.
- `npm start`: Start the production server.
- `npm run lint`: Run ESLint for code linting.

## Schemas

- `src/schemas/signUpSchema.ts`: Defines validation schema for user sign up.
- `src/schemas/verifySchema.ts`: Defines validation schema for verification code.
- `src/schemas/messageSchema.ts`: Defines validation schema for messages.
- `src/schemas/signInSchema.ts`: Defines validation schema for user sign in.
- `src/schemas/acceptMessageSchema.ts`: Defines validation schema for accepting messages.

## Models

- `src/model/User.ts`: Defines the User model schema for MongoDB.

## Pages

- `src/app/page.tsx`: Entry point for the application.

## Configuration Files

- `.eslintrc.json`: ESLint configuration.
- `tsconfig.json`: TypeScript configuration.
- `postcss.config.mjs`: PostCSS configuration.
- `tailwind.config.ts`: Tailwind CSS configuration.

## Additional Information

- The project is based on Next.js.
- Deployment can be done on Vercel.
- Refer to the provided scripts and documentation for more details.

For detailed deployment instructions, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).
