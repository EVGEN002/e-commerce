"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const promotions = [
  "Семейный вечер с пиццей",
  "Время обеда с друзьями",
  "Скидки на роллы по пятницам",
  "Сладкое наслаждение: десерты со скидкой",
  "Счастливые часы: 2 по цене 1",
  "Праздничное меню для всей семьи",
  "Ночь кино с бесплатной доставкой",
  "Завтрак чемпиона: утренние скидки",
  "Гастрономическое путешествие по вкусам",
  "Экспресс-ланч для деловых встреч",
  "Особенные предложения на выходные",
  "Детское меню с подарком",
  "Винный вечер с сырным ассорти",
  "Барбекю на свежем воздухе",
  "Вечер суши с друзьями",
  "Летние коктейли по акции",
  "Осенний ужин с сезонными блюдами",
  "Праздничное меню к Новому году",
  "Специальные предложения для студентов",
  "Вегетарианские блюда по скидке",
];

const Home = () => {
  return (
    <div>
      <Swiper spaceBetween={10} slidesPerView={7}>
        {promotions.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-40 w-40 border-2 border-primary rounded-lg flex flex-col items-center justify-end p-4 overflow-hidden bg-gradient-to-t from-black via-transparent to-transparent">
              <Image
                className="absolute h-full top-0 z-0"
                src={`https://picsum.photos/200/200?random=${index}`}
                alt={`Promotion ${index}`}
                width={160}
                height={160}
              />
              <div className="text-sm font-semibold z-10 text-accent">
                {item}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
