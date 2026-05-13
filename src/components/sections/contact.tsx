"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Не удалось отправить сообщение");
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Произошла ошибка. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section id="contact" className="w-full py-16 md:py-24 bg-secondary"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <h2 className="font-display text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              Связаться со мной
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Готова ответить на ваши вопросы и предоставить профессиональную юридическую помощь
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div className="rounded-lg border bg-background p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-4 font-display text-2xl font-bold text-primary">
                Контактная информация
              </h3>
              <p className="mb-6 text-muted-foreground !font-(family-name:--font-cormorant-garamond)">
                Свяжитесь со мной удобным для вас способом
              </p>
              <div className="space-y-4 text-text-dark">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">
                      196105, Санкт-Петербург, Московский пр-кт. 143
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <a
                      href="tel:+79310070752"
                      className="font-medium hover:text-primary hover:underline"
                    >
                      +7 (931) 007-07-52
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <a
                      href="mailto:S0070752@mail.ru"
                      className="font-medium hover:text-primary hover:underline"
                    >
                      S0070752@mail.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="font-medium">Пн-Пт: 9:00 - 20:00</p>
                    <p className="text-sm text-muted-foreground">
                      Сб-Вс: по предварительной записи
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div className="rounded-lg border bg-background p-6 shadow-sm lg:p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 }}
            >
              <h3 className="mb-4 font-display text-2xl font-bold text-primary">
                Отправить сообщение
              </h3>
              <p className="mb-6 text-muted-foreground">
                Опишите вашу ситуацию, и я свяжусь с вами в ближайшее время
              </p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя *</Label>
                    <Input id="name" name="name" placeholder="Ваше имя" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+7 ( ___ ) ___ - __ - __"
                      required
                      type="tel"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Тема обращения</Label>
                  <Input id="subject" name="subject" placeholder="Краткое описание вопроса" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Сообщение *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Опишите вашу ситуацию подробнее..."
                    required
                    className="min-h-[120px]"
                  />
                </div>
                <div className="mb-4 text-sm">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="consent" 
                      required 
                      className="mt-1 flex-shrink-0"
                    />
                    <span>
                      Я даю согласие на обработку моих персональных данных в соответствии с{' '}
                      <a href="/privacy-policy.html" target="_blank" className="text-blue-600 hover:underline">
                        Политикой конфиденциальности
                      </a>{' '}
                      и принимаю условия{' '}
                      <a href="/user-agreement.html" target="_blank" className="text-blue-600 hover:underline">
                        Пользовательского соглашения
                      </a>.
                    </span>
                  </label>
                </div>
                <Button type="submit" disabled={loading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  {loading ? "Отправка..." : "Отправить сообщение"}
                </Button>
                {status === "success" && (
                  <p className="text-sm text-green-600 text-center">Заявка отправлена! Я свяжусь с вами в ближайшее время.</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600 text-center">{errorMsg}</p>
                )}
              </form>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div className="mt-16"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h3 className="mb-6 text-center font-display text-2xl font-bold text-primary">
              Как меня найти
            </h3>
            <div className="overflow-hidden rounded-lg border">
                <iframe
                src="https://yandex.ru/map-widget/v1/?ll=30.318985%2C59.878265&mode=whatshere&whatshere%5Bpoint%5D=30.318985%2C59.878265&whatshere%5Bzoom%5D=17&z=17.14"
                width="100%"
                height="450"
                frameBorder="0"
                allowFullScreen={true}
                style={{ position: 'relative' }}
                title="Yandex Map Location">
              </iframe>
            </div>
            <p className="mt-4 text-center text-muted-foreground">
                196105, Санкт-Петербург, Московский проспект 143
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>

  );

};

export default ContactSection;