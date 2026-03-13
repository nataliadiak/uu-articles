# UU Articles - MERN Migration

This repository previously depended on the proprietary `uuApp` framework.

## Iteration 1 (completed)
- Removed corporate framework dependency definitions from frontend and backend package manifests.
- Replaced backend runtime with a standard **Express + Mongoose** API skeleton.
- Replaced frontend runtime with a standard **React + Vite** app.
- Added first end-to-end API contract for article listing/creation.

## Run locally

### Backend
```bash
cd uu_articles_maing01-server
npm install
MONGO_URI=mongodb://127.0.0.1:27017/uu_articles npm run dev
```

### Frontend
```bash
cd uu_articles_maing01-hi
npm install
VITE_API_URL=http://localhost:3001/api npm run dev
```

## Next iterations
1. Add update/delete article endpoints + validation middleware.
2. Add author/topic collections and relational references.
3. Add integration tests with a test MongoDB instance.
4. Add authentication and role-based access.
