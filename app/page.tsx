import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/Root.module.css'

export default function Home() {
    return (
        <main className="p-10 flex justify-around items-center">
            <div className="flex flex-col gap-6">
                <h1 className="font-black text-5xl">What is Swap Ai</h1>
                <p className="text-lg">Swap ai is a generative ai tool to swap your images with your fantasy avatar</p>
                <Link href="/Home" className={`font-bold text-xl max-w-max py-3 px-10 rounded-sm transition-all ease-in-out duration-400 ${styles.button} relative`}>
                    <p className={styles.p}>Get Started</p>
                </Link>     
            </div>
            <div>
                <Image src="/image-generator.png" alt="Swap ai" width={400} height={400} />
            </div>
        </main>
    );
}