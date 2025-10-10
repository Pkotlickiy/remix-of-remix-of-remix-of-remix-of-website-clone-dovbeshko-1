import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Вернуться на главную
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Политика конфиденциальности
          </h1>
          
          <p className="text-muted-foreground mb-8">
            Последнее обновление: 09 октября 2025 г.
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">1. Общие положения</h2>
              <p className="text-text-dark mb-4">
                Настоящая Политика конфиденциальности регулирует порядок обработки и защиты 
                персональных данных пользователей сайта адвоката Довбешко Светланы Юрьевны.
              </p>
              <p className="text-text-dark mb-4">
                Используя данный сайт, вы соглашаетесь с условиями настоящей Политики 
                конфиденциальности. Если вы не согласны с этими условиями, пожалуйста, 
                не используйте наш сайт.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">2. Сбор персональных данных</h2>
              <p className="text-text-dark mb-4">
                Мы можем собирать следующие персональные данные:
              </p>
              <ul className="list-disc pl-6 text-text-dark space-y-2 mb-4">
                <li>Имя и фамилия</li>
                <li>Контактный телефон</li>
                <li>Адрес электронной почты</li>
                <li>Информация, предоставленная в сообщениях через контактную форму</li>
                <li>IP-адрес и данные о браузере (автоматически)</li>
              </ul>
              <p className="text-text-dark mb-4">
                Персональные данные собираются только при добровольном предоставлении 
                их пользователем через формы обратной связи или запроса на консультацию.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">3. Цели обработки данных</h2>
              <p className="text-text-dark mb-4">
                Собранные персональные данные используются для следующих целей:
              </p>
              <ul className="list-disc pl-6 text-text-dark space-y-2 mb-4">
                <li>Обработка запросов на консультацию</li>
                <li>Связь с клиентами для предоставления юридических услуг</li>
                <li>Информирование о наших услугах и новостях (при согласии пользователя)</li>
                <li>Улучшение качества обслуживания и работы сайта</li>
                <li>Соблюдение законодательных требований</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">4. Хранение и защита данных</h2>
              <p className="text-text-dark mb-4">
                Мы принимаем необходимые организационные и технические меры для защиты 
                персональных данных от несанкционированного доступа, изменения, раскрытия 
                или уничтожения.
              </p>
              <p className="text-text-dark mb-4">
                Персональные данные хранятся в течение периода, необходимого для достижения 
                целей их обработки, или в течение срока, установленного законодательством 
                Российской Федерации.
              </p>
              <p className="text-text-dark mb-4">
                Доступ к персональным данным имеют только уполномоченные сотрудники, 
                которые обязаны соблюдать конфиденциальность.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">5. Передача данных третьим лицам</h2>
              <p className="text-text-dark mb-4">
                Мы не передаем ваши персональные данные третьим лицам, за исключением 
                следующих случаев:
              </p>
              <ul className="list-disc pl-6 text-text-dark space-y-2 mb-4">
                <li>При наличии вашего явного согласия на передачу</li>
                <li>Когда это необходимо для предоставления запрошенных вами услуг</li>
                <li>По требованию законодательства или компетентных государственных органов</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">6. Файлы cookie</h2>
              <p className="text-text-dark mb-4">
                Наш сайт использует файлы cookie для улучшения пользовательского опыта. 
                Файлы cookie — это небольшие текстовые файлы, размещаемые на вашем устройстве 
                при посещении сайта.
              </p>
              <p className="text-text-dark mb-4">
                Вы можете настроить свой браузер для отклонения всех или некоторых файлов 
                cookie. Однако это может повлиять на функциональность сайта.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">7. Права субъектов персональных данных</h2>
              <p className="text-text-dark mb-4">
                В соответствии с Федеральным законом № 152-ФЗ «О персональных данных» 
                вы имеете право:
              </p>
              <ul className="list-disc pl-6 text-text-dark space-y-2 mb-4">
                <li>Получать информацию о наличии и обработке ваших персональных данных</li>
                <li>Требовать уточнения, блокирования или уничтожения ваших данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
                <li>Обжаловать действия или бездействие в уполномоченный орган по защите прав субъектов персональных данных</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">8. Изменения в политике конфиденциальности</h2>
              <p className="text-text-dark mb-4">
                Мы оставляем за собой право вносить изменения в настоящую Политику 
                конфиденциальности. Все изменения вступают в силу с момента их публикации 
                на данной странице.
              </p>
              <p className="text-text-dark mb-4">
                Рекомендуем периодически просматривать эту страницу для ознакомления с 
                актуальной версией Политики конфиденциальности.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">9. Контактная информация</h2>
              <p className="text-text-dark mb-4">
                Если у вас есть вопросы относительно настоящей Политики конфиденциальности 
                или обработки ваших персональных данных, пожалуйста, свяжитесь с нами:
              </p>
              <div className="bg-secondary p-6 rounded-lg">
                <p className="text-text-dark mb-2">
                  <strong>Адвокат Довбешко Светлана Юрьевна</strong>
                </p>
                <p className="text-text-dark mb-2">
                  <strong>Адрес:</strong> 196105, Санкт-Петербург, Московский пр-кт. 143
                </p>
                <p className="text-text-dark mb-2">
                  <strong>Телефон:</strong>{' '}
                  <a href="tel:+79310070752" className="text-primary hover:underline">
                    +7 (931) 007-07-52
                  </a>
                </p>
                <p className="text-text-dark">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:S0070752@mail.ru" className="text-primary hover:underline">
                    S0070752@mail.ru
                  </a>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">10. Согласие на обработку данных</h2>
              <p className="text-text-dark mb-4">
                Используя данный сайт и предоставляя свои персональные данные, вы даете 
                согласие на их обработку в соответствии с настоящей Политикой конфиденциальности 
                и законодательством Российской Федерации.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}