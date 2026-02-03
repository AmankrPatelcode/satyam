import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Er. Satyam Singh';
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

// Image generation
export default async function Icon() {
    // Try to fetch Alex Brush font for more precise branding
    const alexBrush = fetch(
        new URL('https://fonts.gstatic.com/s/alexbrush/v22/SZ6IQyS867df3SshD9Xp7_ZInA.ttf')
    ).then((res) => res.arrayBuffer());

    const fontData = await alexBrush;

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 24,
                    background: '#FF6B00',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    borderRadius: '4px',
                    fontFamily: 'Alex Brush',
                }}
            >
                S
            </div>
        ),
        // ImageResponse options
        {
            ...size,
            fonts: [
                {
                    name: 'Alex Brush',
                    data: fontData,
                    style: 'normal',
                },
            ],
        }
    );
}
