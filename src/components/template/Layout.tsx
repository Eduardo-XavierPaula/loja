import Footer from "./Footer"
import Navbar from "./Navbar"
import Section from "./Section"

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}
export default function Layout(props: LayoutProps) {
    return (
        <div className={`flex flex-col w-full min-h-screen relative`}>
                <Navbar />
            <div className="flex bg-primary">
                <div className="flex flex-col w-full">
                    <Section>
                        {props.children}
                    </Section>
                    <Footer />
                </div>
            </div>
        </div>
    )
}