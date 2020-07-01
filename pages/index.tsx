import Link from 'next/link'
import React from 'react'
import tw, { css } from 'twin.macro'

export default function Index(): React.ReactElement {
    return (
        <div tw="p-4 bg-white rounded shadow">
            <h1 tw="text-2xl font-bold">Next.js</h1>
            <p tw="text-gray-700">
                with Tailwind CSS & postcss-preset-env. Now uses tailwind purge method for
                production builds. Check{' '}
                <Link href="/jsx">
                    <a tw="text-blue-500 underline" href="/jsx.js">
                        /jsx.js
                    </a>
                </Link>{' '}
                for a styled-jsx example.
            </p>
        </div>
    )
}
