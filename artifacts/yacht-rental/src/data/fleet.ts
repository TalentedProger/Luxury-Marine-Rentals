export interface Vessel {
  id: string;
  slug: string;
  name: string;
  category: "speedboat" | "yacht" | "sailboat" | "catamaran";
  categoryLabel: string;
  tagline: string;
  description: string;
  longDescription: string;
  specs: {
    length: string;
    capacity: string;
    speed: string;
    engine: string;
    year: string;
    fuel: string;
  };
  features: string[];
  included: string[];
  pricePerHour: number;
  pricePerDay: number;
  minHours: number;
  heroImage: string;
  images: string[];
  popular?: boolean;
  rating: number;
  reviews: number;
  location: string;
}

export const fleet: Vessel[] = [
  {
    id: "1",
    slug: "nordstar-28",
    name: "Nordstar 28",
    category: "speedboat",
    categoryLabel: "Скоростной катер",
    tagline: "Стремительный и элегантный",
    description: "Финский скоростной катер премиум-класса для активного отдыха на воде Финского залива.",
    longDescription: "Nordstar 28 — это воплощение скандинавского дизайна и инженерного совершенства. Мощный и манёвренный катер создан для тех, кто ценит скорость и надёжность. Просторная кокпит-зона с мягкими диванами, профессиональная навигационная система и мощный двигатель делают каждую прогулку незабываемой. Идеален для дневных круизов по акватории Санкт-Петербурга, прогулок к фортам Кронштадта и острова Котлин.",
    specs: {
      length: "8.5 м",
      capacity: "8 чел.",
      speed: "42 узла",
      engine: "Volvo Penta 300 л.с.",
      year: "2022",
      fuel: "Бензин",
    },
    features: [
      "Профессиональная навигация GPS",
      "Бортовая рация VHF",
      "Якорная система",
      "Спасательные жилеты",
      "Bluetooth аудиосистема",
      "Электрический тент от солнца",
      "Встроенный кулер",
      "Носовая солярий-зона",
    ],
    included: [
      "Капитан в штате",
      "Топливо",
      "Спасательное оборудование",
      "Страховка КАСКО",
    ],
    pricePerHour: 8500,
    pricePerDay: 55000,
    minHours: 2,
    heroImage: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1600&q=90",
    images: [
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&q=80",
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=1200&q=80",
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1200&q=80",
    ],
    popular: true,
    rating: 4.9,
    reviews: 127,
    location: "Яхтенный порт Геркулес",
  },
  {
    id: "2",
    slug: "princess-v40",
    name: "Princess V40",
    category: "yacht",
    categoryLabel: "Моторная яхта",
    tagline: "Роскошь без компромиссов",
    description: "Британская моторная яхта с роскошным интерьером и каютой для комфортного пребывания на борту.",
    longDescription: "Princess V40 — британская моторная яхта, устанавливающая новые стандарты роскоши на воде. Элегантный экстерьер сочетается с безупречно отделанным интерьером с использованием натурального дерева и кожи. Оснащена полноценной каютой с двуспальной кроватью, душевой комнатой и кухонным блоком. Просторная кормовая площадка идеально подходит для купания и загара. Совершенна для деловых встреч на воде, романтических вечеров и праздничных мероприятий.",
    specs: {
      length: "12.2 м",
      capacity: "10 чел.",
      speed: "34 узла",
      engine: "2x Volvo IPS 650 л.с.",
      year: "2021",
      fuel: "Дизель",
    },
    features: [
      "Полноценная каюта с кроватью",
      "Душевая комната на борту",
      "Кухонный блок с холодильником",
      "Кондиционер",
      "Плазменный телевизор",
      "Профессиональная навигация",
      "Кормовая платформа для купания",
      "Носовой тент",
      "Bluetooth Hi-Fi система",
      "Якорь с электрической лебёдкой",
    ],
    included: [
      "Профессиональный капитан",
      "Стюард на борту",
      "Топливо",
      "Страховка КАСКО + ОСАГО",
      "Прохладительные напитки",
    ],
    pricePerHour: 18000,
    pricePerDay: 110000,
    minHours: 3,
    heroImage: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1600&q=90",
    images: [
      "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1200&q=80",
      "https://images.unsplash.com/photo-1566847438217-76e82d3f7ae9?w=1200&q=80",
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200&q=80",
    ],
    popular: true,
    rating: 5.0,
    reviews: 84,
    location: "Яхт-клуб «Терийоки»",
  },
  {
    id: "3",
    slug: "beneteau-oceanis-46",
    name: "Beneteau Oceanis 46",
    category: "sailboat",
    categoryLabel: "Парусная яхта",
    tagline: "Душа настоящего мореплавателя",
    description: "Элегантная парусная яхта французского производства для романтичных прогулок под парусом.",
    longDescription: "Beneteau Oceanis 46 — это философия морского путешествия в чистом виде. Французская инженерная мысль воплощена в каждой детали этой изящной яхты. Три просторные каюты, две ванные комнаты и уютный салон создают атмосферу настоящего морского дома. Современное парусное вооружение позволяет легко управлять яхтой даже при свежем ветре. Идеальный выбор для многодневных переходов по Балтийскому морю и незабываемых романтических прогулок.",
    specs: {
      length: "14.3 м",
      capacity: "8 чел.",
      speed: "12 узлов",
      engine: "Volvo Penta 55 л.с.",
      year: "2020",
      fuel: "Дизель + паруса",
    },
    features: [
      "3 каюты для проживания",
      "2 ванные комнаты",
      "Просторный салон",
      "Кухонный блок камбуз",
      "Генератор 220В",
      "Автопилот",
      "Спутниковая навигация",
      "Якорная система с цепью",
      "Тендер для высадки",
    ],
    included: [
      "Опытный шкипер",
      "Матрос",
      "Топливо для двигателя",
      "Постельное бельё",
      "Страховка",
    ],
    pricePerHour: 12000,
    pricePerDay: 85000,
    minHours: 4,
    heroImage: "https://images.unsplash.com/photo-1508553823590-1c68ebeaaea5?w=1600&q=90",
    images: [
      "https://images.unsplash.com/photo-1508553823590-1c68ebeaaea5?w=1200&q=80",
      "https://images.unsplash.com/photo-1467165870672-bff48d02e4e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1518116040429-dbf7d0de3d1b?w=1200&q=80",
    ],
    rating: 4.8,
    reviews: 56,
    location: "Яхт-клуб «Балтиец»",
  },
  {
    id: "4",
    slug: "lagoon-42",
    name: "Lagoon 42",
    category: "catamaran",
    categoryLabel: "Катамаран",
    tagline: "Пространство и стабильность",
    description: "Просторный океанский катамаран с минимальной качкой и максимальным комфортом для большой компании.",
    longDescription: "Lagoon 42 — французский катамаран, сочетающий в себе просторность океанского судна с маневренностью прибрежной яхты. Благодаря широкому корпусу практически отсутствует качка, что делает его идеальным для людей, склонных к морской болезни. Четыре просторные каюты, три санузла и огромный центральный салон с панорамными окнами создают непревзойдённый уровень комфорта. Широкая кормовая платформа — любимое место для загара и купания всей компанией.",
    specs: {
      length: "12.8 м",
      capacity: "12 чел.",
      speed: "14 узлов",
      engine: "2x Yanmar 57 л.с.",
      year: "2023",
      fuel: "Дизель + паруса",
    },
    features: [
      "4 просторные каюты",
      "3 санузла с душем",
      "Панорамный салон",
      "Профессиональная кухня камбуз",
      "Солнечные панели",
      "Генератор 5 кВт",
      "Кондиционирование воздуха",
      "Якорь с электрошпилем",
      "Тендер 3.2 м с мотором",
      "Подводные огни",
    ],
    included: [
      "Капитан и матрос",
      "Топливо",
      "Постельное бельё",
      "Полотенца",
      "Страховка полная",
      "Вода питьевая",
    ],
    pricePerHour: 22000,
    pricePerDay: 150000,
    minHours: 4,
    heroImage: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=90",
    images: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80",
      "https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1200&q=80",
      "https://images.unsplash.com/photo-1586942593568-9892b41d20d3?w=1200&q=80",
    ],
    rating: 4.9,
    reviews: 43,
    location: "Яхтенный порт «Зеленогорск»",
  },
  {
    id: "5",
    slug: "rib-zodiac-750",
    name: "Zodiac Pro 750",
    category: "speedboat",
    categoryLabel: "RIB-катер",
    tagline: "Адреналин и свобода",
    description: "Мощный надувной катер для активных развлечений: водных лыж, вейкборда и скоростных прогулок.",
    longDescription: "Zodiac Pro 750 — это чистый адреналин на воде. Профессиональный RIB-катер с мощным подвесным мотором способен разогнаться до 55 узлов. Идеален для буксировки: водные лыжи, вейкборд, бублик, банан. Устойчивый надувной борт обеспечивает безопасность даже при активных манёврах. Экипаж в составе инструктора всегда готов научить вас водным видам спорта или обеспечить захватывающую скоростную прогулку по акватории Финского залива.",
    specs: {
      length: "7.5 м",
      capacity: "10 чел.",
      speed: "55 узлов",
      engine: "Mercury 300 л.с.",
      year: "2023",
      fuel: "Бензин",
    },
    features: [
      "Профессиональный подвесной мотор",
      "Буксировочная штанга",
      "Оборудование для вейкборда",
      "Водные лыжи в комплекте",
      "Надувной бублик",
      "Спасательные жилеты на всех",
      "Навигация GPS",
      "Бортовая рация",
    ],
    included: [
      "Опытный водитель-инструктор",
      "Топливо",
      "Спортивное снаряжение",
      "Инструктаж по безопасности",
      "Страховка",
    ],
    pricePerHour: 6500,
    pricePerDay: 42000,
    minHours: 2,
    heroImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1600&q=90",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80",
      "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=1200&q=80",
      "https://images.unsplash.com/photo-1499242165950-01e2f6b5c8e5?w=1200&q=80",
    ],
    rating: 4.7,
    reviews: 198,
    location: "Пляж Лисий Нос",
  },
  {
    id: "6",
    slug: "sunseeker-predator-68",
    name: "Sunseeker Predator 68",
    category: "yacht",
    categoryLabel: "Суперяхта",
    tagline: "Вершина морской роскоши",
    description: "Флагман нашего флота — британская суперяхта для самых взыскательных клиентов.",
    longDescription: "Sunseeker Predator 68 — абсолютный флагман нашего флота и воплощение британского люкса. Эта яхта принималась на Каннском фестивале яхт и неоднократно признавалась лучшей в своём классе. Четыре VIP-каюты с собственными ванными комнатами, ресторанный салон с дизайнерским интерьером, джакузи на палубе и личный шеф-повар на борту — всё это создаёт атмосферу пятизвёздочного отеля на воде. Идеальна для корпоративных мероприятий, юбилеев и особых торжеств.",
    specs: {
      length: "20.7 м",
      capacity: "12 чел.",
      speed: "38 узлов",
      engine: "2x MTU 2000 л.с.",
      year: "2020",
      fuel: "Дизель",
    },
    features: [
      "4 VIP-каюты с собственными ванными",
      "Джакузи на верхней палубе",
      "Дизайнерский салон",
      "Профессиональная кухня",
      "Кинотеатр на борту",
      "Стабилизаторы качки",
      "Спутниковый интернет",
      "Водные игрушки: SUP, тюбинг",
      "Тендер Williams Jet Tender",
      "Система умного дома",
    ],
    included: [
      "Капитан и 2 члена экипажа",
      "Стюардесса",
      "Шеф-повар",
      "Топливо",
      "Полная страховка",
      "Напитки на борту",
      "Трансфер на яхту",
    ],
    pricePerHour: 45000,
    pricePerDay: 320000,
    minHours: 4,
    heroImage: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1600&q=90",
    images: [
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1200&q=80",
      "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=1200&q=80",
      "https://images.unsplash.com/photo-1566847438217-76e82d3f7ae9?w=1200&q=80",
    ],
    popular: true,
    rating: 5.0,
    reviews: 31,
    location: "Яхтенный порт Геркулес",
  },
];

export const getCategoryLabel = (category: string) => {
  const labels: Record<string, string> = {
    speedboat: "Катера",
    yacht: "Яхты",
    sailboat: "Парусники",
    catamaran: "Катамараны",
  };
  return labels[category] || category;
};

export const getVesselBySlug = (slug: string) => fleet.find(v => v.slug === slug);
