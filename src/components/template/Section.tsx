interface SectionProps{
    children?: any,
}

export default function Section(props: SectionProps) {
    return (
        <div className={`flex flex-col bg-neutral items-center grow`}>
            <img src="https://images.unsplash.com/photo-1505022610485-0249ba5b3675?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Banner 1" className="col-span-full aspect-video w-full xl:max-h-[500px] 2xl:max-h-[700px] object-cover object-top"/>
            <div className={`grid grid-cols-12 w-full gap-0 sm:gap-6 p-6 min-h-[calc(100vh-140px)] max-w-screen-2xl mx-auto`}>
                {props.children}
            </div>
        </div>
    )
}
