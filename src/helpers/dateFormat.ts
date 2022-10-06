type dict = {
  ru: string[];
  en: string[];
};

const dict = {
  ru: [
    '',
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ],
  en: [],
};

export default function dateFormat(data: string, lang: keyof dict) {
  const date = new Date(data);
  const parts = [date.getDay(), dict[lang][date.getMonth()], date.getFullYear()];
  return parts.join(' ');
}
