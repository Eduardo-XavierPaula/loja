interface SectionProps{
    children?: any,
}

export default function Section(props: SectionProps) {
    return (
        <div className={`flex flex-col items-center grow bg-primary`}>
            <div className={`grid grid-cols-12 w-full gap-6 p-6 bg-neutral  min-h-[calc(100vh-140px)]`}>
                {props.children}
            </div>
        </div>
    )
}
