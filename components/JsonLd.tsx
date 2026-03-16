export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Neirologic Team",
    alternateName: "Нейрологик",
    url: "https://xn--c1adkchdlkbr.xn--p1ai",
    logo: "https://xn--c1adkchdlkbr.xn--p1ai/favicon.svg",
    description:
      "Разработка сайтов, веб-приложений, Telegram-ботов, автоматизация бизнеса и внедрение ИИ. От заявки до запуска — от 2 недель.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: "https://t.me/neirologic_bot",
      availableLanguage: ["Russian", "English"],
    },
    sameAs: ["https://t.me/neirologic_bot"],
    areaServed: {
      "@type": "Country",
      name: "Russia",
    },
    knowsLanguage: ["ru", "en"],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Neirologic Team",
    alternateName: "Нейрологик",
    url: "https://xn--c1adkchdlkbr.xn--p1ai",
    inLanguage: "ru",
    description:
      "Разработка сайтов, веб-приложений, Telegram-ботов, автоматизация бизнеса и внедрение ИИ.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServicesJsonLd() {
  const services = [
    {
      name: "Создание сайтов и лендингов",
      description:
        "Продающие сайты с адаптивным дизайном, быстрой загрузкой и SEO-оптимизацией. От 30 000 ₽.",
    },
    {
      name: "Разработка веб-приложений",
      description:
        "Сложные веб-сервисы и SaaS-платформы: личные кабинеты, CRM, дашборды. От 80 000 ₽.",
    },
    {
      name: "Telegram-боты и Mini Apps",
      description:
        "Боты для автоматизации продаж, поддержки и приёма заявок. Mini Apps с интерфейсом внутри Telegram. От 15 000 ₽.",
    },
    {
      name: "Автоматизация бизнеса",
      description:
        "Связываем сервисы, автоматизируем рутину: CRM, рассылки, документооборот. От 25 000 ₽.",
    },
    {
      name: "Разработка инструментов под запрос",
      description:
        "Парсеры, калькуляторы, генераторы, конвертеры — под любой бизнес-процесс. От 20 000 ₽.",
    },
    {
      name: "Внедрение ИИ в бизнес",
      description:
        "Умные чат-боты, генерация контента, анализ данных, классификация и прогнозирование. От 50 000 ₽.",
    },
  ];

  const data = services.map((s) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.name,
    description: s.description,
    provider: {
      "@type": "Organization",
      name: "Neirologic Team",
      url: "https://xn--c1adkchdlkbr.xn--p1ai",
    },
    areaServed: {
      "@type": "Country",
      name: "Russia",
    },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FAQJsonLd() {
  const faqs = [
    {
      question: "Сколько стоит разработка?",
      answer:
        "Зависит от сложности. Лендинг — от 30 000 руб., Telegram-бот — от 15 000 руб., веб-приложение — от 80 000 руб. Точную стоимость назовём после обсуждения задачи. Консультация бесплатная.",
    },
    {
      question: "Какие сроки разработки?",
      answer:
        "Telegram-бот — от 1 недели. Лендинг — от 2 недель. Веб-приложение — от 4 недель. Сложный SaaS — от 2 месяцев.",
    },
    {
      question: "Работаете по договору?",
      answer:
        "Да. Оформляем договор с ТЗ, сроками и фиксированной стоимостью. Оплата поэтапная: 50% предоплата и 50% после сдачи.",
    },
    {
      question: "Что если мне не понравится результат?",
      answer:
        "Мы показываем промежуточные результаты на каждом этапе. После запуска — 30 дней бесплатных правок. Если результат не устроит, возвращаем предоплату.",
    },
    {
      question: "Помогаете с дизайном или нужен свой макет?",
      answer:
        "Делаем всё под ключ: от проектирования интерфейса до финального дизайна. Свой макет не обязателен.",
    },
    {
      question: "Поддерживаете проект после запуска?",
      answer:
        "Да. Предлагаем ежемесячную поддержку: хостинг, обновления, мелкие доработки, мониторинг.",
    },
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: "https://xn--c1adkchdlkbr.xn--p1ai",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
