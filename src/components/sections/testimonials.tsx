"use client";

import * as React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { type CarouselApi } from "@/components/ui/carousel";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonialsData = [
  {
    rating: 5,
    quote:
      "Обратился с запутанным земельным спором, где другие юристы отказывались браться за дело. Светлана Юрьевна не только взялась за решение проблемы, но и нашла нестандартный подход, который привел к полному удовлетворению моих требований. Профессионализм высочайшего уровня в сочетании с искренней заинтересованностью в результате.",
    author: "Клиент по земельному спору",
  },
  {
    rating: 5,
    quote:
      "Благодаря Светлане Юрьевне сложная сделка с недвижимостью прошла гладко и безопасно. Она провела тщательную проверку объекта, выявила и помогла устранить потенциальные риски, грамотно составила все документы. Ее сопровождение дало мне полную уверенность на каждом этапе сделки. Рекомендую как надежного и компетентного специалиста.",
    author: "Клиент по сделке с недвижимостью",
  },
  {
    rating: 5,
    quote:
      "Выражаю огромную благодарность за помощь в наследственном деле. Все было сделано четко, профессионально и в оговоренные сроки. Чувствовалась поддержка на каждом этапе. Очень доволен результатом сотрудничества.",
    author: "Клиент по наследственному делу",
  },
];

export default function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <motion.section id="testimonials" className="bg-secondary py-20 md:py-28"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <motion.span className="mb-4 inline-block rounded-full bg-white px-3 py-1 text-sm font-medium text-primary"
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Отзывы
          </motion.span>
          <motion.h2 className="font-display text-4xl font-bold text-primary md:text-[42px]"
            initial={{ y: 14, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
          >
            Отзывы клиентов
          </motion.h2>
          <motion.p className="mt-2 text-lg text-muted-foreground"
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
          >
            Что говорят мои клиенты о сотрудничестве
          </motion.p>
        </div>

        <Carousel setApi={setApi} opts={{ loop: true }} className="mx-auto mt-12 w-full max-w-3xl">
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <motion.figure
                    className="relative rounded-lg bg-card p-8 shadow-md md:p-12 text-center transition-transform duration-300 hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                  >
                    <div className="mb-6 flex justify-center space-x-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="mb-6 text-lg italic text-foreground">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <figcaption>
                      <cite className="not-italic font-semibold text-foreground">
                        {testimonial.author}
                      </cite>
                    </figcaption>
                  </motion.figure>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex h-10 w-10 -left-16 bg-white border border-border hover:bg-accent" />
          <CarouselNext className="hidden md:flex h-10 w-10 -right-16 bg-white border border-border hover:bg-accent" />
        </Carousel>

        <div className="mt-8 flex justify-center space-x-3">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                current === index ? "bg-primary" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Перейти к отзыву ${index + 1}`}
            />
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground md:hidden">
          Свайпните для просмотра других отзывов
        </p>
      </div>
    </motion.section>
  );
}