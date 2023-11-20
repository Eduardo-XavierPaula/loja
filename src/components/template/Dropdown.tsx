interface Dropdown {
    label: any;
    items: any;
    type?: string;
    classLabel?: string;
}

export default function Dropdown(props: Dropdown) {
    return (
        <div className={`dropdown ${props.type == 'hover' ? 'dropdown-hover': ''}  dropdown-bottom dropdown-end`}>
        <label tabIndex={0} className={`m-1 cursor-pointer flex ${props.classLabel}`}>{props.label}</label>
        <ul tabIndex={0} className="dropdown-content z-10 menu p-2 shadow bg-white rounded-box w-48">
        {props.items.map((item:any, index:any) => (
                    <li key={index} className="text-black rounded-xl transition-all hover:bg-secondary hover:text-white">{item}</li>
                ))}
        </ul>
        </div>
        // <div className="dropdown">
        //     <label className={`cursor-pointer flex ${props.classLabel}`}>
        //         {props.label}
        //     </label>
        //     <ul className="dropdown-content right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={0}>

        //     </ul>
        // </div>
    )
}