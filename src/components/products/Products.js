import React, { useState } from 'react'
import Link from 'next/link'
import { useDataContext } from '@/context/DataContext'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const Products = () => {

    const [currentTitle, setCurrentTitle] = useState("")
    const { cart, setCart } = useDataContext()
    console.log('cart iniitially : ', cart)

    return (
        <>
            <main
                className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
            >
                <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">

                    <input type="text" style={{ color: "black" }}
                        onChange={(e) => setCurrentTitle(e.target.value)} />

                    <button className={`mb-3 text-2xl font-semibold`}
                        onClick={() => {
                            setCart([...cart, { title: currentTitle }])
                        }}>
                        Add to Cart
                    </button>

                </div >
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