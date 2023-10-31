export default function Card(props: any) {
    return (
        <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src={props.image} alt={props.title} className="h-full w-full object-cover object-center lg:h-full lg:w-full p-4" />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700 w-2/3">
                        <a href="#" className="line-clamp-1">
                            {props.title}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{props.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${props.price}</p>
            </div>
        </div>
    )
}