import { CustomizationCardType } from "@/types/customization";

export const Categories = [
  { title: "Логотипы", icon: "🎨", isActive: true },
  { title: "Шрифты", icon: "🔤", isActive: false },
  { title: "Другое", icon: "🛠️", isActive: false },
] as const;

export const CustomizationCards: CustomizationCardType[] = [
  {
    cardTitle: "Логотип",
    icon: "🦉",
    model: "Сова",
    price: 4,
    isActive: false,
  },
  {
    cardTitle: "Логотип",
    icon: "🎯",
    model: "Мишень",
    price: 2,
    isActive: false,
  },
  {
    cardTitle: "Логотип",
    icon: "🐙",
    model: "Осьминог",
    price: 5,
    isActive: true,
  },
  {
    cardTitle: "Шрифт",
    icon: "Aa",
    model: "Rubik",
    price: 10,
    isActive: false,
  },
  {
    cardTitle: "Шрифт",
    icon: "Aa",
    model: "Inter",
    price: 5,
    isActive: true,
  },
  {
    cardTitle: "Тёмная тема",
    icon: "🌙",
    model: null,
    price: 99,
    isActive: false,
  },
];
