import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter( { subsets: [ "latin" ] } );

export const metadata = {
    title: "Counter",
    description: "Counter app",
};

export default function RootLayout( { children } ) {
    return (
        <html lang="ru">
        <body className={ inter.className }>{ children }</body>
        </html>
    );
}
