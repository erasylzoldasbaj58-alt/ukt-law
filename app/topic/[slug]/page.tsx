const topics: Record<
  string,
  { title: string; text: string; link?: string; linkText?: string; checked?: string }
> = {
  konstitutsia: {
    title: "Конституциялық құқық",
    text: "Қазақстан Республикасының Конституциясы 2026 жылы 15 наурызда республикалық референдумда қабылданып, 2026 жылы 1 шілдеден бастап күшіне енді. 1995 жылғы Конституция күшін жойды. Конституция мемлекеттің негізгі заңы, оның жоғары заңдық күші бар және ол Қазақстанның бүкіл аумағында тікелей қолданылады.",
    link: "https://www.gov.kz/memleket/entities/ksrk/press/news/details/1159830?lang=kk",
    linkText: "Конституцияның ресми мәтіні (gov.kz)",
    checked: "2026 жылғы 11 қазан",
  },
  azamattyk: {
    title: "Азаматтық құқық",
    text: "Меншік, шарттар және мұрагерлік мәселелерін реттейді. Теория мен тестер кейін қосылады.",
  },
  kylmystyk: {
    title: "Қылмыстық құқық",
    text: "Қылмыс пен жаза түрлерін анықтайды. Теория мен тестер кейін қосылады.",
  },
  enbek: {
    title: "Еңбек құқығы",
    text: "Жұмыс беруші мен қызметкер арасындағы қатынасты реттейді. Теория мен тестер кейін қосылады.",
  },
  akimshilik: {
    title: "Әкімшілік құқық",
    text: "Әкімшілік құқық бұзушылық пен айыппұлдарды реттейді. Теория мен тестер кейін қосылады.",
  },
  khalykaralyk: {
    title: "Халықаралық құқық",
    text: "Мемлекеттер арасындағы қатынасты реттейді. Теория мен тестер кейін қосылады.",
  },
};

export function generateStaticParams() {
  return Object.keys(topics).map((slug) => ({ slug }));
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = topics[slug];

  if (!topic) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold">Тақырып табылмады</h1>
        <a href="/" className="mt-4 inline-block text-blue-700">← Басты бет</a>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-3xl">
        <a href="/" className="text-blue-700">← Басты бет</a>
        <h1 className="mt-4 text-3xl font-bold text-blue-900">{topic.title}</h1>
        <p className="mt-4 text-gray-700">{topic.text}</p>

        {topic.link && (
          <a
            href={topic.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-xl bg-blue-900 px-5 py-3 text-white"
          >
            {topic.linkText}
          </a>
        )}

        {topic.checked && (
          <p className="mt-4 text-sm text-gray-500">
            Соңғы тексерілген күні: {topic.checked}
          </p>
        )}
      </div>
    </main>
  );
}