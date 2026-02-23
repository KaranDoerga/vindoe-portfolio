This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Managing Beats

All beat data is stored in `src/data/beats.json`. This makes it easy to add, update, or remove beats without editing component code.

### Adding a New Beat

1. Upload your beat to YouTube
2. Copy the full YouTube URL (any format works)
3. Open `src/data/beats.json`
4. Navigate to the appropriate genre array (Shatta, Kizomba, Afro, Hiphop, R&B, or Trap)
5. Add a new beat object:

```json
{
  "title": "Your Beat Name",
  "youtubeUrl": "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  "tags": ["140 BPM", "Energy", "Dance"],
  "uploadDate": "2024-02-22"
}
```

6. Save the file and rebuild the site with `npm run build`

### Supported YouTube URL Formats

The system automatically extracts video IDs from these formats:
- Full URL: `https://www.youtube.com/watch?v=VIDEO_ID`
- Short URL: `https://youtu.be/VIDEO_ID`
- Embed URL: `https://www.youtube.com/embed/VIDEO_ID`
- Direct ID: `VIDEO_ID`

### Recent Beats Section

The "Latest Beats" section automatically shows the 4 most recent beats based on the `uploadDate` field. Make sure to use the format `YYYY-MM-DD` (e.g., `2024-02-22`).

### Changing the Featured Beat

Edit the `featuredBeat` object at the top of `src/data/beats.json`:

```json
{
  "featuredBeat": {
    "title": "Your Featured Beat",
    "youtubeUrl": "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    "tags": ["Shatta", "140 BPM", "Energy"]
  }
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
