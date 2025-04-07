FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm insall

COPY ../../client .

RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/.env ./
COPY --from=builder /app/tsconfig.json ./

RUN mkdir -p uploads && chmod 777 uploads

EXPOSE 3000

CMD ["npm", "run","dev"]

