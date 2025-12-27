import './globals.css'

export const metadata = {
    title: 'Trending Hashtags - Boost Your Reach',
    description: 'Discover the most popular hashtags in real-time to maximize your social media engagement.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="antialiased min-h-screen flex flex-col">{children}</body>
        </html>
    )
}
