import Image from "next/image";

export default function Card(props: any) {
    return (
        <>
            {
                props.noData ? (
                    <div className="group relative cursor-wait flex-grow">
                        <div className="w-full relative overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 aspect-square">
                        </div >
                        <div className="mt-4 flex gap-6">
                            <div className="mr-auto">
                                <h3 className="text-sm text-gray-700">
                                    <a href="#" className="line-clamp-1 ">
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500"></p>
                            </div>
                            <p className="text-sm font-medium text-gray-900"></p>
                        </div>
                    </div >
                ) : (
                    <div className="group relative hover:scale-[1.05] ease-in-out duration-75 cursor-pointer">
                        <div className="w-full relative overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 aspect-square">
                            <Image src={props.image} alt={props.title} fill className="object-cover aspect-square object-top" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            {/* <img src={props.image} alt={props.title} className="h-full w-full  object-center lg:h-full lg:w-full" /> */}
                        </div >
                        <div className="mt-4 flex gap-6">
                            <div className="mr-auto">
                                <h3 className="text-sm text-gray-700">
                                    <a href="#" className="line-clamp-1">
                                        {props.title}
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{props.category}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">${props.price}</p>
                        </div>
                    </div >
                )
            }
        </>
    )
}