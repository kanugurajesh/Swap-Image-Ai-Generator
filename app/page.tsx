import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <main className="p-10 flex justify-around items-center">
            <div className="flex flex-col gap-5">
                <h1 className="font-black text-5xl">What is Swap ai</h1>
                <p className="text-lg">Swap ai is a generative ai tool to swap your images with your fantasy avatar</p>
                <Link href="/Home" className="font-bold text-xl">
                    Get started
                </Link>     
            </div>
            <div>
                <Image src="/image-generator.png" alt="Swap ai" width={400} height={400} />
            </div>
        </main>
    );
}