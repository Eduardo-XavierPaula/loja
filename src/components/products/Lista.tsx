import Card from "./Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function List(props: any) {
    return (
        <div className="flex flex-col col-span-full bg-secondary p-4 rounded-xl">
            <h3 className="text-primary font-bold text-lg capitalize">{props.titulo}</h3>
            <div className="gap-x-6 gap-y-10 xl:gap-x-8">

                {
                    props.products ? (
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={48}
                            rewind={true}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper !p-4"
                        >
                            {props.products.map((product: any) => (
                                <SwiperSlide key={product.id}>
                                    <Card
                                        image={product.image}
                                        title={product.title}
                                        price={product.price}
                                        category={product.category}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="flex gap-4">
                            <Card noData="true"/>
                            <Card noData="true"/>
                            <Card noData="true"/>
                            <Card noData="true"/>
                        </div>
                    )

                }
            </div>
        </div>

    )
}