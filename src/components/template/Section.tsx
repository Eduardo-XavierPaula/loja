import Image from "next/image";

interface SectionProps {
    children?: any,
}

export default function Section(props: SectionProps) {
    return (
        <div className={`flex flex-col bg-neutral`}>
            <div className="relative rounded-md h-[700px] m-4">
                <Image
                    src={"https://images.unsplash.com/photo-1505022610485-0249ba5b3675?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                    fill
                    alt="Banner 1"
                    sizes="100vw"
                    priority
                    className="rounded-xl object-cover object-top aspect-video"
                />
            </div>
            {/* <div className="col-span-full w-full h-[500px] 2xl:h-[700px] p-4 relative overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1505022610485-0249ba5b3675?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Banner 1" className="rounded-lg w-full aspect-video object-cover object-top" fill priority sizes="100vw" />
            </div> */}
            <div className={`grid grid-cols-12 w-full gap-0 sm:gap-8 px-4 pb-4 min-h-[calc(100vh-140px)] max-w-screen-2xl mx-auto`}>
                {props.children}
            </div>
        </div>
    )
}
