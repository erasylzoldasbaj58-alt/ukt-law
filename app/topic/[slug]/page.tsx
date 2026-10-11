const topics: Record<string, { title: string; text: string }> = {
  konstitutsia: {
    title: "Конституциялық құқық",
    text: "Конституциялық құқық мемлекет пен азамат құқықтарының негізін анықтайды. Бұл бөлімнің теориясы мен тестері кейін қосылады.",
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
  azamattyk: {
    title: "Азаматтық құқық",
    text: "Меншік, шарттар және мұрагерлік мәселелерін реттейді. Теория мен тестер кейін қосылады.",
  },
  kylmystyk: {
    title: "Қылмыстық құқық",
    text: "Қылмыс пен жаза түрлерін анықтайды. Теория мен тестер кейін қосылады.",
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
      </div>
    </main>
  );
}