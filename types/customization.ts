export type CustomizationCardType = {
  cardTitle: "Логотип" | "Шрифт" | "Тёмная тема";
  icon: string;
  model: string | null;
  isActive: boolean;
  price: number;
};
