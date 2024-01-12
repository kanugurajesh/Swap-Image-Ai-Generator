import Image from "next/image";

export default function About() {
    return (
        <main className="flex flex-col items-center justify-center gap-10 mt-10 pb-20">
            <h1 className="font-black text-3xl w-2/3">🌟 Swap-Ai: Your Ultimate Image Swapping Experience! 🌟</h1>
            <Image src="/ai-application.png" alt="Swap-Ai Logo" width={200} height={200} />
            <div className="w-2/3 flex flex-col gap-5">
                <p>Welcome to Swap-Ai, the cutting-edge platform that brings your wildest image-swapping dreams to life!
                    🚀 Imagine seamlessly swapping your images with your favorite characters, all thanks to the power of AI.
                    But that's not all – Swap-Ai goes the extra mile by delivering the magic directly to your email inbox!
                    📧✨</p>

                <p><strong>🎨 AI-Powered Image Generation:</strong> Our platform harnesses the incredible capabilities of stable
                    diffusion algorithms to craft stunning images of your beloved characters. Immerse yourself in a world where
                    AI turns your visions into captivating visual masterpieces. 🖼️✨</p>

                <p><strong>👤 Face Swap Magic:</strong> With our state-of-the-art face swap model borrowed from Replicate,
                    Swap-Ai takes image swapping to a whole new level! Watch in awe as your image seamlessly merges with that
                    of your favorite character, creating a one-of-a-kind digital masterpiece. 👥🔄</p>

                <p><strong>📬 Instant Email Delivery:</strong> Say goodbye to the hassle of manual downloads! Swap-Ai takes
                    care of it all by effortlessly sending the swapped image directly to your email. It's quick, convenient, and
                    ensures you never miss a moment of the magic. 📬🌈</p>

                <p><strong>🌐 Seamless SaaS Experience:</strong> As a Software as a Service (SaaS) platform, Swap-Ai
                    prioritizes user-friendly interactions. Enjoy a seamless, intuitive interface that makes image swapping a
                    breeze. Whether you're a tech enthusiast or a casual user, Swap-Ai caters to everyone! 💻🤝</p>

                <p>Ready to embark on an image-swapping adventure like never before? Join Swap-Ai today and witness the fusion of
                    AI, creativity, and your favorite characters! 🚀🌈</p>
            </div>
        </main>
    );
}