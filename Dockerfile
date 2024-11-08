FROM node:20.15.1-alpine AS base

# Use ARG to receive build-time variables
ARG NEXT_PUBLIC_SUPABASE_URL
ARG NEXT_PUBLIC_SUPABASE_ANON_KEY

# Set these variables as environment variables within the container
ENV NEXT_PUBLIC_SUPABASE_URL=$NEXT_PUBLIC_SUPABASE_URL
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=$NEXT_PUBLIC_SUPABASE_ANON_KEY

ENV NODE_ENV production
ENV APP_PATH /app


# 添加源
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

RUN npm uninstall yarn -g \
    && corepack enable \
    && corepack prepare yarn@3.6.1 --activate \
    && yarn config set --json -H unsafeHttpWhitelist '["*.npmjs.org"]'  \
    && yarn config set -H   enableStrictSsl false \
    && yarn config set -H  npmRegistryServer https://registry.npm.taobao.org 

FROM base AS builder
WORKDIR $APP_PATH 
COPY ./ ./
RUN yarn install && yarn build


FROM base AS runner
WORKDIR $APP_PATH

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# ADD  --chown=nextjs:nodejs ./.next/standalone ./
# ADD   ./public  ./public
# ADD  --chown=nextjs:nodejs ./.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs $APP_PATH/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs $APP_PATH/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/next-config-js/output
CMD HOSTNAME="0.0.0.0" node server.js
