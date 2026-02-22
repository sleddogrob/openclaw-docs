# Stage 1: Build VitePress site
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY docs/ docs/
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
