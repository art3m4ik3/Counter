"use client";

import React from 'react';

export default function Home() {
    const [ count, setCount ] = React.useState( 0 );

    function handleClick() {
        setCount( count + 1 );
    }

    return (
        <main className="flex min-h-screen flex-col justify-cente items-center justify-around py-24">
            <div
                className="relative w-96 h-96 flex justify-center items-center p-5 shadow-xl rounded-full text-center bg-white button"
                style={ { userSelect: 'none' } }
                onClick={ handleClick }>
                <span className="text-8xl text-black">
                    { count }
                </span>
            </div>
        </main>
    );
}
