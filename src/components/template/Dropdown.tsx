interface Dropdown {
    summary: any;
    items: any;
    classSummary?: string;
}

export default function Dropdown(props: Dropdown) {
    return (
        <details className="dropdown">
            <summary className={`cursor-pointer flex ${props.classSummary}`}>
                {props.summary}
            </summary>
            <ul className="dropdown-content right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={0}>
                {props.items.map((item:any, index:any) => (
                    <li key={index} className="text-black transition-all hover:bg-secondary hover:text-white">{item}</li>
                ))}
            </ul>
        </details>
    )
}