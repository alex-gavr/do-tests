## Data Offers with Server Components on the Edge
👉 Global EDGE Runtime powered by Vercel
👉 React Server Components
👉 Latest Next.js 13.4 app router with middleware
👉 PlanetScale DB
Read data from 3 locations - Frankfurt, Mumbai, Singapore. 
DB is chosen based on user location.
👉 Drizzle ORM to write mysql queries
👉 Mixpanel for analytics and custom events
mixpanel-browser cannot run on the Edge. It was collapsing the site, so I had to move it to an api route.
👉 Tailwind for css
It is just the best way to write optimized css

Global EDGE runtime with ability to read data from multiple (closest to user) locations from DB makes compute always near the user, which results in ridiculously fast site experience ⚡️

