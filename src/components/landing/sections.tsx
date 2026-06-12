import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    logo: 'https://cdn.poehali.dev/projects/71ca4a71-4254-4430-8562-6cd8fb9ae174/files/29bacdd3-3f87-4a27-b5ea-e4145ff4dd33.jpg',
    subtitle: <Badge variant="outline" className="text-white border-white">Фотограф Павел Касулицкий</Badge>,
    title: "Каждый момент достоин вечности.",
    showButton: true,
    buttonText: 'Записаться на съёмку'
  },
  {
    id: 'about',
    title: 'Почему Павел?',
    content: 'Более 7 лет в профессиональной фотографии. Портрет, семья, бизнес — я нахожу ваш свет и создаю кадры, которые хочется рассматривать снова и снова.'
  },
  {
    id: 'features',
    title: 'Виды съёмок',
    content: 'Портретные и семейные фотосессии, лавстори и свадьбы, бизнес-портреты и контент для соцсетей. Студия и выезд на локацию — выбираете вы.'
  },
  {
    id: 'testimonials',
    title: 'Говорят клиенты',
    content: '«Павел умеет раскрепостить и поймать настоящие эмоции. Фотографии получились живыми и тёплыми — именно такими, о каких я мечтала!»'
  },
  {
    id: 'join',
    title: 'Давайте создадим ваши фото',
    content: 'Оставьте заявку — обсудим идею, выберем локацию и назначим удобное время для съёмки.',
    showButton: true,
    buttonText: 'Написать Павлу'
  },
]