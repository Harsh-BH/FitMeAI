
# Stage 1: Building the application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json/yarn.lock
COPY package*.json ./
# If using Yarn, uncomment the next line and comment the npm commands
# COPY yarn.lock ./

# Install dependencies
RUN npm ci
# For Yarn: RUN yarn install --frozen-lockfile

# Copy application code
COPY . .

# Build the Next.js application
RUN npm run build
# For Yarn: RUN yarn build

# Stage 2: Running the application
FROM node:18-alpine AS runner

WORKDIR /app

# Set environment to production
ENV NODE_ENV production

# Copy the necessary files from the builder stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Create uploads directory with appropriate permissions
RUN mkdir -p uploads && chmod 777 uploads

# Expose the port the app will run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
# For Yarn: CMD ["yarn", "start"]
