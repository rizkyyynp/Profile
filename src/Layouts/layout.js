import Navbar from "@/components/ui/Navbar/Navbar"

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}