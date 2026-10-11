

const topics = [
  { slug: "konstitutsia", title: "Конституциялық құқық", desc: "Мемлекет пен азамат құқықтарының негізі" },
  { slug: "azamattyk", title: "Азаматтық құқық", desc: "Меншік, шарттар, мұрагерлік" },
  { slug: "kylmystyk", title: "Қылмыстық құқық", desc: "Қылмыс пен жаза түрлері" },
  { slug: "enbek", title: "Еңбек құқығы", desc: "Жұмыс беруші мен қызметкер қатынасы" },
  { slug: "akimshilik", title: "Әкімшілік құқық", desc: "Әкімшілік құқық бұзушылық, айыппұл" },
  { slug: "khalykaralyk", title: "Халықаралық құқық", desc: "Мемлекеттер арасындағы қатынас" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-blue-900">Заң ақпараты</h1>
        <p className="mt-3 text-lg text-gray-600">
          Заң туралы түсінікті ақпарат және ҰБТ-ға дайындық
        </p>
                <a
          href="/test"
          className="mt-6 inline-block rounded-xl bg-blue-900 px-6 py-3 text-white"
        >
          Тестті бастау
        </a>

        <h2 className="mt-10 text-2xl font-semibold">Тақырыптар</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {topics.map((t) => (
            <a
              key={t.slug}
              href={"/topic/" + t.slug}
              className="block rounded-xl bg-white p-5 shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-blue-800">{t.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{t.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}