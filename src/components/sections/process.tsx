"use client";

import * as React from "react";
import {
  Gavel,
  Shield,
  Landmark,
  ScrollText,
  Scale,
  Stethoscope,
  Map,
  ShieldCheck,
  Home,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tabsData = [
  {
    value: "criminal",
    title: "Уголовные дела",
    icon: Gavel,
  },
  {
    value: "military",
    title: "Военное право",
    icon: Shield,
  },
  {
    value: "arbitration",
    title: "Арбитражное право",
    icon: Landmark,
  },
  {
    value: "inheritance",
    title: "Наследственные дела",
    icon: ScrollText,
  },
  {
    value: "unjust-enrichment",
    title: "Неосновательное обогащение",
    icon: Scale,
  },
  {
    value: "medical",
    title: "Медицинское право",
    icon: Stethoscope,
  },
  {
    value: "land",
    title: "Земельное право",
    icon: Map,
  },
  {
    value: "consumer-rights",
    title: "Защита прав потребителей",
    icon: ShieldCheck,
  },
  {
    value: "real-estate",
    title: "Сделки с недвижимостью",
    icon: Home,
  },
];

const criminalCaseSteps = [
  {
    title: "Доследственная проверка",
    description: "Сбор и анализ материалов до возбуждения уголовного дела",
    details: "На этом этапе адвокат осуществляет сбор первоначальных сведений, опрос свидетелей и анализ документов для определения перспектив дела и выработки стратегии защиты.",
  },
  {
    title: "Возбуждение уголовного дела",
    description: "Официальное начало уголовного преследования",
    details: "После вынесения постановления о возбуждении дела адвокат знакомится с материалами, заявляет ходатайства и контролирует законность действий следственных органов.",
  },
  {
    title: "Предварительное расследование",
    description: "Сбор доказательств, допросы, экспертизы",
    details: "Адвокат активно участвует в следственных действиях, представляет доказательства невиновности, обжалует незаконные решения и действия следователя.",
  },
  {
    title: "Предъявление обвинения",
    description: "Формулирование официального обвинения",
    details: "Защитник присутствует при предъявлении обвинения, разъясняет подзащитному его права и суть обвинения, помогает сформировать позицию по делу.",
  },
  {
    title: "Избрание меры пресечения",
    description: "Определение ограничений на время следствия",
    details: "Адвокат представляет суду доводы в пользу избрания более мягкой меры пресечения, не связанной с лишением свободы, и обжалует арест.",
  },
  {
    title: "Ознакомление с материалами дела",
    description: "Изучение всех собранных доказательств",
    details: "По окончании расследования адвокат и обвиняемый изучают все материалы дела, чтобы выработать окончательную тактику защиты в суде.",
  },
  {
    title: "Предварительное слушание",
    description: "Решение процессуальных вопросов перед судом",
    details: "На этом этапе могут быть заявлены ходатайства об исключении недопустимых доказательств, возвращении дела прокурору или прекращении дела.",
  },
  {
    title: "Судебное разбирательство",
    description: "Рассмотрение дела в суде первой инстанции",
    details: "Адвокат представляет доказательства, допрашивает свидетелей, заявляет ходатайства и выступает в прениях, отстаивая позицию подзащитного.",
  },
  {
    title: "Вынесение приговора",
    description: "Решение суда о виновности и наказании",
    details: "После оглашения приговора адвокат разъясняет его суть и правовые последствия, а также порядок и сроки обжалования.",
  },
  {
    title: "Апелляционное обжалование",
    description: "Обжалование приговора в вышестоящий суд",
    details: "В случае несогласия с приговором адвокат составляет и подает апелляционную жалобу, участвует в заседании суда апелляционной инстанции.",
  },
];

const stepsByCategory: Record<string, { title: string; description: string; details: string }[]> = {
  military: [
    {
      title: "Первичная консультация и анализ ситуации",
      description: "Определение правовой позиции по военным спорам",
      details: "Изучаем основания призыва/увольнения, дисциплинарных взысканий, выплат и льгот. Формируем стратегию защиты интересов военнослужащего или призывника.",
    },
    {
      title: "Запросы и сбор доказательств",
      description: "Официальные запросы в воинские части, ВК и медучреждения",
      details: "Истребуем приказы, заключения ВВК, медицинские карты, выписки; фиксируем нарушения процедуры.",
    },
    {
      title: "Оспаривание решений и действий",
      description: "Жалобы в ВК, прокуратуру, вышестоящее командование",
      details: "Готовим и подаем жалобы на незаконные решения о призыве, взыскания, отказ в выплатах, обеспечении жильем.",
    },
    {
      title: "Медицинская комиссия (ВВК)",
      description: "Сопровождение прохождения ВВК и независимой экспертизы",
      details: "Добиваемся объективной оценки состояния здоровья и правильного определения категории годности.",
    },
    {
      title: "Судебное обжалование",
      description: "Подача административного иска и участие в суде",
      details: "Требуем признать решение незаконным, обязать устранить нарушения, начислить выплаты и предоставить льготы.",
    },
    {
      title: "Исполнение решения",
      description: "Контроль исполнения судебного акта",
      details: "Сопровождаем выдачу справок, выплат, внесение изменений в личное дело и предоставление социальных гарантий.",
    },
  ],
  arbitration: [
    {
      title: "Анализ договора и доказательств",
      description: "Оценка перспектив корпоративного/хозяйственного спора",
      details: "Проверяем условия договоров, переписку, счета, акты и иные документы, формируем доказательственную базу.",
    },
    {
      title: "Претензионный порядок",
      description: "Подготовка и направление претензии контрагенту",
      details: "Фиксируем нарушение, указываем требования, сроки и последствия, проводим переговоры о досудебном урегулировании.",
    },
    {
      title: "Исковое заявление",
      description: "Подготовка и подача иска в арбитражный суд",
      details: "Формулируем требования, расчеты, ходатайства об обеспечительных мерах, прикладываем доказательства.",
    },
    {
      title: "Судебные заседания",
      description: "Участие в заседаниях и представление позиции",
      details: "Задаем вопросы, представляем новые доказательства, возражаем против доводов оппонента, заявляем ходатайства.",
    },
    {
      title: "Экспертизы и оценка",
      description: "Назначение экспертиз и анализ заключений",
      details: "Добиваемся проведения экспертиз, опровергаем необоснованные выводы, при необходимости назначаем повторные.",
    },
    {
      title: "Решение и обжалование",
      description: "Получение решения, апелляция и исполнение",
      details: "Оцениваем целесообразность обжалования, сопровождаем исполнительное производство и взыскание.",
    },
  ],
  inheritance: [
    {
      title: "Консультация и стратегия",
      description: "Определение круга наследников и долей",
      details: "Анализируем завещание, законную очередь наследования, наличие обязательной доли и спорных активов.",
    },
    {
      title: "Сбор документов и открытие наследства",
      description: "Обращение к нотариусу, получение свидетельств",
      details: "Собираем правоустанавливающие документы, подтверждаем родство, фиксируем состав наследственного имущества.",
    },
    {
      title: "Восстановление сроков",
      description: "Восстановление срока принятия наследства",
      details: "Готовим заявление в суд при пропуске сроков по уважительным причинам, доказываем фактическое принятие наследства.",
    },
    {
      title: "Установление юридических фактов",
      description: "Факт родства, нахождения на иждивении, проживания",
      details: "Инициируем судебные процедуры для подтверждения значимых фактов при отсутствии документов.",
    },
    {
      title: "Раздел наследства",
      description: "Определение долей и порядок пользования",
      details: "Проводим оценку имущества, предложения о выделе долей, компенсациях, заключаем соглашение либо обращаемся в суд.",
    },
    {
      title: "Регистрация прав",
      description: "Оформление прав собственности в Росреестре",
      details: "Сопровождаем регистрацию и внесение сведений в ЕГРН, завершение наследственного оформления.",
    },
  ],
  "unjust-enrichment": [
    {
      title: "Правовой анализ платежей",
      description: "Проверка оснований для удержания средств",
      details: "Устанавливаем отсутствие правового основания получения денег, анализируем документы и переписку.",
    },
    {
      title: "Досудебная претензия",
      description: "Требование о возврате суммы и процентов",
      details: "Формируем претензию с расчетом процентов по ст. 395 ГК РФ и сроками возврата.",
    },
    {
      title: "Исковое заявление",
      description: "Подача иска о взыскании неосновательного обогащения",
      details: "Прикладываем доказательства перечислений и отсутствия основания, заявляем ходатайства об обеспечении иска.",
    },
    {
      title: "Судебное разбирательство",
      description: "Доказательство необоснованности удержания",
      details: "Оспариваем доводы ответчика, представляем расчеты и подтверждающие документы, при необходимости инициируем экспертизу.",
    },
    {
      title: "Взыскание и исполнение",
      description: "Получение исполнительного листа и возврат средств",
      details: "Контролируем исполнительное производство, обращение взыскания на имущество/счета должника.",
    },
  ],
  medical: [
    {
      title: "Анализ медицинских документов",
      description: "Оценка качества оказанной помощи",
      details: "Изучаем карты, выписки, назначения, фиксируем дефекты оказания медпомощи и причинно-следственную связь.",
    },
    {
      title: "Запросы и экспертиза",
      description: "Истребование документов и независимая экспертиза",
      details: "Назначаем или инициируем экспертизу для подтверждения нарушений стандартов лечения.",
    },
    {
      title: "Претензия учреждению/страховой",
      description: "Досудебное урегулирование и переговоры",
      details: "Требуем компенсацию вреда, расходов на лечение, морального вреда; оцениваем предложения о мировом соглашении.",
    },
    {
      title: "Иск в суд",
      description: "Защита прав пациента в судебном порядке",
      details: "Определяем надлежащего ответчика, заявляем ходатайства о проведении судебной экспертизы.",
    },
    {
      title: "Рассмотрение и экспертизы",
      description: "Участие в заседаниях, работа с экспертами",
      details: "Формулируем вопросы эксперту, оспариваем необоснованные выводы, уточняем размер требований.",
    },
    {
      title: "Взыскание возмещения",
      description: "Исполнение решения и выплаты",
      details: "Контролируем перечисление сумм, публикацию опровержений (при необходимости), исполнение иных обязанностей.",
    },
  ],
  land: [
    {
      title: "Проверка правоустанавливающих документов",
      description: "Анализ ЕГРН, кадастровых сведений и сделок",
      details: "Выявляем ошибки в записях, обременения, самовольные постройки и иные риски.",
    },
    {
      title: "Межевание и кадастр",
      description: "Организация работ и уточнение границ",
      details: "Инициируем межевание, корректировку кадастрового учета, собираем технические документы.",
    },
    {
      title: "Досудебное урегулирование",
      description: "Претензии соседям/органам власти",
      details: "Предлагаем законный порядок пользования, сервитута, обжалование отказов и предписаний.",
    },
    {
      title: "Судебная защита",
      description: "Иск об установлении границ/сервитута/сносе",
      details: "Готовим иск, обеспечительные меры, взаимодействуем с кадастровыми инженерами и экспертами.",
    },
    {
      title: "Регистрация изменений",
      description: "Внесение решений суда в ЕГРН",
      details: "Сопровождаем регистрацию прав и изменений характеристик участка/строений.",
    },
  ],
  "consumer-rights": [
    {
      title: "Претензия продавцу/исполнителю",
      description: "Фиксация недостатков товара/услуги",
      details: "Описываем нарушения, требуем возврата денег, замены или устранения недостатков в разумный срок.",
    },
    {
      title: "Экспертиза",
      description: "Проверка качества и причин возникновения дефектов",
      details: "Инициируем независимую экспертизу, опровергаем необоснованные заключения продавца.",
    },
    {
      title: "Иск и штрафные санкции",
      description: "Подача иска с требованиями и санкциями",
      details: "Требуем неустойку, штраф 50% за отказ удовлетворить требования добровольно, компенсацию морального вреда.",
    },
    {
      title: "Судебное рассмотрение",
      description: "Доказательство вины и защита прав потребителя",
      details: "Представляем чек-листы нарушений, переписку, экспертизы, заявляем ходатайства о штрафе и пене.",
    },
    {
      title: "Исполнение решения",
      description: "Возврат средств и замена/ремонт",
      details: "Контролируем перечисление сумм, передачу нового товара, устранение недостатков и публикацию информации (при необходимости).",
    },
  ],
  "real-estate": [
    {
      title: "Правовая экспертиза объекта",
      description: "Проверка прав, истории переходов и арестов",
      details: "Изучаем ЕГРН, архивные выписки, судебные споры, долги, согласия супругов, перепланировки.",
    },
    {
      title: "Подготовка сделки",
      description: "Проект договора и пакет документов",
      details: "Готовим ДКП/ДДУ/найм, согласовываем условия, проверяем полномочия сторон и расчеты.",
    },
    {
      title: "Безопасные расчеты",
      description: "Аккредитив/ячейка/эскроу",
      details: "Выбираем безопасный способ расчетов, проверяем поступление средств и условия вскрытия/перечисления.",
    },
    {
      title: "Сопровождение регистрации",
      description: "Подача документов в Росреестр",
      details: "Контролируем сроки и корректность записей, устраняем приостановки и отказы.",
    },
    {
      title: "Разрешение споров по сделке",
      description: "Расторжение, признание недействительной, взыскания",
      details: "Готовим претензии и иски при выявлении нарушений, сопровождаем возврат средств и восстановление прав.",
    },
  ],
};

export default function ProcessSection() {
  return (
    <motion.section className="bg-secondary py-16 md:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <motion.span className="mb-4 inline-block rounded-md bg-accent/30 px-3 py-1 text-sm font-semibold text-primary"
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            Как я работаю
          </motion.span>
          <motion.h2 className="font-display text-3xl font-bold text-primary md:text-4xl"
            initial={{ y: 14, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
          >
            Процесс ведения дел
          </motion.h2>
          <motion.p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground"
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
          >
            Ознакомьтесь с основными этапами работы по различным категориям дел
          </motion.p>
        </div>

        <Tabs defaultValue="criminal" className="w-full">
          <div className="relative flex justify-center">
              <div className="overflow-x-auto pb-4 -mb-4 no-scrollbar">
                <TabsList className="inline-flex h-auto items-stretch gap-2 rounded-lg bg-transparent p-1">
                  {tabsData.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className="flex h-auto flex-col items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 py-3 text-xs font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md sm:flex-row sm:text-sm hover:-translate-y-0.5"
                    >
                      <tab.icon className="h-5 w-5" />
                      {tab.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
          </div>
          <div className="mt-8">
            <TabsContent value="criminal">
              <motion.div className="mx-auto max-w-4xl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="font-display text-2xl font-bold text-primary md:text-3xl">
                  Уголовные дела
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Профессиональная защита на всех этапах уголовного процесса с индивидуальной стратегией и тщательным анализом доказательств
                </p>
                <div className="relative mt-12">
                  <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:block" />
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {criminalCaseSteps.map((step, index) => (
                      <motion.div key={index} className="relative md:pl-16"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.04 * (index % 10) }}
                      >
                        <div className="absolute left-0 top-4 hidden h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground md:flex">
                          <FileText className="h-6 w-6" />
                        </div>
                        <AccordionItem value={`item-${index}`} className="border-none bg-card rounded-lg shadow-sm">
                          <AccordionTrigger className="flex w-full items-center justify-between rounded-lg p-6 text-left hover:no-underline">
                            <div className="flex-1">
                              <h4 className="font-display text-lg font-bold text-primary">
                                {step.title}
                              </h4>
                              <p className="mt-1 text-sm text-muted-foreground">
                                {step.description}
                              </p>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-6 pt-0">
                            <p className=" text-foreground/80">{step.details}</p>
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
                </div>
              </motion.div>
            </TabsContent>
            {tabsData.slice(1).map(tab => (
              <TabsContent key={tab.value} value={tab.value}>
                {stepsByCategory[tab.value] ? (
                  <motion.div className="mx-auto max-w-4xl"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="font-display text-2xl font-bold text-primary md:text-3xl">
                      {tab.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">
                      Ключевые этапы работы по данной категории дел
                    </p>
                    <div className="relative mt-12">
                      <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:block" />
                      <Accordion type="single" collapsible className="w-full space-y-4">
                        {stepsByCategory[tab.value].map((step, index) => (
                          <motion.div key={index} className="relative md:pl-16"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.04 * (index % 10) }}
                          >
                            <div className="absolute left-0 top-4 hidden h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground md:flex">
                              <FileText className="h-6 w-6" />
                            </div>
                            <AccordionItem value={`item-${index}`} className="border-none bg-card rounded-lg shadow-sm">
                              <AccordionTrigger className="flex w-full items-center justify-between rounded-lg p-6 text-left hover:no-underline">
                                <div className="flex-1">
                                  <h4 className="font-display text-lg font-bold text-primary">
                                    {step.title}
                                  </h4>
                                  <p className="mt-1 text-sm text-muted-foreground">
                                    {step.description}
                                  </p>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="px-6 pb-6 pt-0">
                                <p className=" text-foreground/80">{step.details}</p>
                              </AccordionContent>
                            </AccordionItem>
                          </motion.div>
                        ))}
                      </Accordion>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div className="mx-auto max-w-4xl text-center py-12"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="font-display text-2xl font-bold text-primary md:text-3xl">
                      {tab.title}
                    </h3>
                    <p className="mt-4 text-muted-foreground">
                      Этапы работы по данной категории дел в разработке. Свяжитесь со мной для получения подробной консультации.
                    </p>
                  </motion.div>
                )}
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
}