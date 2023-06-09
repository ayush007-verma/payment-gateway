import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useDataContext } from '@/context/DataContext'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import { get Products } from '@/pages/api/getProducts'
import handler from '@/pages/api/hello'
import { getProducts } from '@/lib/api'

const inter = Inter({ subsets: ['latin'] })

const Products = () => {

    const [currentTitle, setCurrentTitle] = useState("")
    const { cart, setCart } = useDataContext()
    console.log('cart iniitially : ', cart)
    const handleProducts = async () => {
        getProducts()
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCart(data)
            })
            .catch(error => {
                console.error(error);
            });

    }
    useEffect(() => {
        if (cart.length == 1)
            handleProducts()
    }, [])

    return (
        <>
            <main
                className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
            >

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
                                    {/* <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                                        Find in-depth information about this product features and pricing.
                                    </p> */}
                                    <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
                                        <Image
                                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                                            src={item.image}
                                            alt="Next.js Logo"
                                            width={180}
                                            height={37}
                                            priority
                                        />
                                    </div>
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
                <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                    <Link href="/cart" as="/cart">
                        <button>
                            Go to Cart
                        </button>
                    </Link>
                </div>
            </main >
        </>
    )
}

export default Products