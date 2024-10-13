# Development

Steps to setup and run the app in development

1. Build DB

```
docker compose up -d
```

2. Rename .env.template to .env
3. Replace env variables
4. Run application in you localhost

```
npm run dev
```

5. Run SEED to [create the local DB](http://localhost:3000/api/seed)

# Prisma commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```
