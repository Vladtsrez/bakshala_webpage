export interface House {
  id: string
  name: string
  image: string
  images: string[]
  capacity: string
  area: string
  price: string
  priceNum: number
  description: string
  longDescription: string
  amenities: string[]
}

export const houses: House[] = [
  {
    id: 'house-1',
    name: 'Будиночок №1',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&fit=crop',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&fit=crop',
    ],
    capacity: '2–3 особи',
    area: '35 м²',
    price: 'від ₴1 800 / ніч',
    priceNum: 1800,
    description: 'Затишний будиночок з видом на озеро.',
    longDescription:
      "Затишний будиночок розташований безпосередньо на березі озера. Ідеальний вибір для пари або невеликої сім'ї. Просторий інтер'єр у природному стилі, зручне ліжко, повністю обладнана кухня та простора тераса з видом на воду.",
    amenities: ['WiFi', 'Душ', 'Кухня', 'Мангал', 'Паркінг'],
  },
  {
    id: 'house-2',
    name: 'Будиночок №2',
    image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=900&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&fit=crop',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&fit=crop',
    ],
    capacity: '2–4 особи',
    area: '45 м²',
    price: 'від ₴2 200 / ніч',
    priceNum: 2200,
    description: 'Просторий будиночок з терасою та виходом до берега.',
    longDescription:
      "Просторий будиночок з великою критою терасою та прямим виходом до берега озера. Дві зони відпочинку, сучасна ванна кімната, повністю оснащена кухня. Ідеальний для сім'ї з дітьми або компанії друзів.",
    amenities: ['WiFi', 'Ванна', 'Кухня', 'Мангал', 'Тераса'],
  },
  {
    id: 'house-3',
    name: 'Будиночок №3',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&fit=crop',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&fit=crop',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&fit=crop',
    ],
    capacity: '4–6 осіб',
    area: '60 м²',
    price: 'від ₴2 800 / ніч',
    priceNum: 2800,
    description: 'Великий будиночок для сімейного відпочинку.',
    longDescription:
      'Найпросторіший стандартний будиночок ранчо. Дві спальні, велика вітальня з каміном, дитяча ігрова зона. Підходить для великих сімей або дружньої компанії. Окремий мангал та зона пікніку.',
    amenities: ['WiFi', 'Ванна', 'Кухня', 'Мангал', 'Дитяче місце'],
  },
  {
    id: 'luxury',
    name: 'Люкс Коттедж',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&fit=crop',
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&fit=crop',
    ],
    capacity: '2–4 особи',
    area: '80 м²',
    price: 'від ₴4 500 / ніч',
    priceNum: 4500,
    description: 'Преміальний коттедж з каміном та приватним причалом.',
    longDescription:
      'Найпреміальніший варіант на Ранчо Бакшала. Панорамні вікна на озеро, камін, джакузі, повністю оснащена кухня преміум-класу, приватний причал для риболовлі. Ідеально для романтичного відпочинку або особливого випадку.',
    amenities: ['WiFi', 'Джакузі', 'Кухня', 'Камін', 'Причал'],
  },
]
