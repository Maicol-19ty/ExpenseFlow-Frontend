# Etapa 1: Construcción
FROM node:20.11.0 AS builder
WORKDIR /app
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"
COPY package*.json ./
RUN bun install
COPY . .
RUN bun run build
CMD ["bun", "run", "build"]

# Etapa 2: Producción
FROM node:20.11.0
WORKDIR /app
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./
RUN bun install --production
EXPOSE 3000
CMD ["bun", "run", "start"]
