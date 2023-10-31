export default function List(props:any){
    return(
        <div className="flex flex-col col-span-full mb-6">
            <h3 className="text-primary font-bold text-lg">{props.titulo}</h3>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
                {props.children}
            </div>
        </div>
    )
}