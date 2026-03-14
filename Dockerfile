# --- ЭТАП 1: Установка зависимостей ---
FROM oven/bun:1.1-alpine AS deps
WORKDIR /app

# Копируем файлы манифестов
COPY package.json bun.lockb* ./
# Устанавливаем зависимости
RUN bun install --frozen-lockfile

# --- ЭТАП 2: Сборка проекта ---
FROM oven/bun:1.1-alpine AS builder
WORKDIR /app

# Копируем зависимости из первого этапа
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Отключаем телеметрию Next.js во время билда
ENV NEXT_TELEMETRY_DISABLED 1

# Собираем проект
RUN bun run build

# --- ЭТАП 3: Финальный образ (Production) ---
# Здесь мы используем легкий образ Node или Bun. 
# Standalone режим работает на Node.js, но Bun тоже отлично подходит.
FROM oven/bun:1.1-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Создаем пользователя, чтобы не запускать от root (безопасность)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем только необходимые файлы из standalone билда
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# host должен быть 0.0.0.0 для работы внутри Docker
ENV HOSTNAME "0.0.0.0"

CMD ["bun", "server.js"]