import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useDataContext } from '@/context/DataContext'
import { useState } from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const Cart = () => {
    const { cart, setCart } = useDataContext()
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Cart Section :
                </p>
            </div>

            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </div>

            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                {
                    cart.map((item, key) => {
                        return (
                            <a
                                // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                                target="_blank"
                                rel="noopener noreferrer"
                                key={key}
                            >
                                <h2 className={`mb-3 text-2xl font-semibold`}>
                                    {item.title}
                                </h2>
                                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                                    Find in-depth information about this product features and pricing.
                                </p>
                            </a>
                        )
                    })
                }
                <Link
                    // href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    href="/home/"
                    as="/home/"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Go to Products  
                    </h2>
                </Link>
            </div>

        </main>
    )
}


export default Cart;