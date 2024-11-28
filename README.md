# Development

Steps to setup and run the app in development

1. Install dependencies

```
pnpm install
```

2. Rename .env.template to .env
3. Replace env variables
4. Build DB container (Docker is required)

```
docker compose up -d
```

5. Run prisma migrations

```
pnpm prisma migrate dev
```

6. Generate prisma client

```
pnpm prisma generate
```

7. Run application in you localhost

```
pnpm dev
```

8. Run SEED to [create the local DB](http://localhost:3000/api/seed)
