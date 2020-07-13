import React from 'react'
import tw from 'twin.macro'
const CustomBtn = tw.button`text-white font-bold py-2 px-4 rounded`
export default function jsxExample(): React.FunctionComponentElement<void> {
    return (
        <section>
            <CustomBtn tw="bg-red-500 ">Button 1</CustomBtn>
            <CustomBtn tw="bg-red-600 ">Button 2</CustomBtn>
            <CustomBtn tw="bg-red-700 ">Button 2</CustomBtn>
        </section>
    )
}
