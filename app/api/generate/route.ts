import { NextResponse, NextRequest } from 'next/server';
import Replicate from 'replicate';

// stop nextjs default parsing
// export const config = {
//     api: {
//         bodyParser: false,
//     },
// };

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});

export const GET = async () => {
    return NextResponse.json({ message: 'Hello, Next.js Version 13!' }, { status: 200 });
};

export const POST = async (request: NextRequest) => {
    // @ts-ignore
    const { email, image, gender, userPrompt } = await request.body;
    console.log(email)
    return NextResponse.json({ message: 'Operation successful' }, { status: 200 });
};
