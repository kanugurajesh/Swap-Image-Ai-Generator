import { NextResponse, NextRequest } from 'next/server';
import Replicate from 'replicate';

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
});

export const GET = async () => {
    return NextResponse.json({ message: 'Hello, Next.js Version 13!' }, { status: 200 });
};

export const POST = async (request: NextRequest) => {
    // @ts-ignore
    const body = await request.json();
    const { email, gender, userPrompt, selectedFile } = body;
    return NextResponse.json({ message: 'Operation successful' }, { status: 200 });
};
