# Simple comment
ARG NODE_VERSION=18
FROM node:${NODE_VERSION}-alpine AS builder

# Metadata
LABEL maintainer="monokai-kai" \
      version="1.0"

WORKDIR /app

# Environment variables
ENV NODE_ENV=production \
    PORT=3000

# Copy and install dependencies
COPY package*.json ./
RUN npm ci --only=production && \
    npm cache clean --force

# Copy source
COPY --chown=node:node . .

# Execution
USER node
EXPOSE ${PORT}
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost:${PORT}/health || exit 1

ENTRYPOINT ["npm"]
CMD ["start"]
