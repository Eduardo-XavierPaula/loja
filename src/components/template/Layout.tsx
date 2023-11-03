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
            <div className="p-[17px]">
                <div className="alert alert-warning p-1 rounded-none fixed z-10 top-0 left-0">
                    <div className="flex justify-center w-full gap-2 col-span-full ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        <span>Essa Loja não é real, site apenas para fins demonstrativos</span>
                    </div>
                </div>
            </div>
            <Navbar />
            <div className="flex bg-neutral">
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