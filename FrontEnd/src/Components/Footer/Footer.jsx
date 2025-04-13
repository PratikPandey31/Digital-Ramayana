import React from 'react'
import ListComponent from './ListComponent'
export default function Footer() {
    const Links = ["Home", "About", "Contact", "Blog", "Search", "Pricing", "Docs", "Support", "Terms & Conditions", "Privacy Policy", "Cancellation & Refund", "Shipping &   Exchange"]
    return (
        <footer className="backdrop-blur-xl w-full">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-center">
                    <ListComponent Links={Links} />
                </div>
            </div>
        </footer>
    );
}