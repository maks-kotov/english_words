"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CustomizationCard from "@/modules/customization/components/shared/customizationCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { CustomizationCardType } from "@/types/customization";
import { Categories } from "@/data/customizationData";
import Modal from "@/components/shared/modal";

type Props =
  | {
      page: "shop";
      balance: { money: number; rubins: number };
      cards: CustomizationCardType[];
    }
  | {
      page: "settings";
      cards: CustomizationCardType[];
    };
export default function Customization(props: Props): React.ReactElement {
  const { page, cards } = props;
  const categories = Categories;
  const [choosedCategory, setChoosedCategory] =
    useState<(typeof Categories)[number]["title"]>("Логотипы");
  const filteredCards = cards.filter((card) => {
    if (choosedCategory === "Логотипы") return card.cardTitle === "Логотип";
    if (choosedCategory === "Шрифты") return card.cardTitle === "Шрифт";
    return card.cardTitle === "Тёмная тема";
  });
  return (
    <Modal
      title={
        <div
          className={`${page === "settings" ? "text-center text-3xl" : "text-start text-2xl"}`}>
          {page === "settings" ? "Настройки" : "🛒 Магазин"}
        </div>
      }
      description={
        page === "settings"
          ? "Здесь вы можете применить кастомизирующие функции"
          : ""
      }>
      {page === "shop" && (
        <div className="flex gap-x-2 absolute top-8 right-6">
          <p className="text-sm">{props.balance.rubins} ♦️</p>
          <p className="text-sm">{props.balance.money} 🥮</p>
        </div>
      )}
      <div className="relative">
        <Search className="absolute top-4 right-4 h-4" />
        <Input placeholder="Поиск..." />
      </div>
      <div className="overflow-x-hidden min-h-max">
        <Carousel
          opts={{
            align: "start",
          }}
          className="sm:hidden">
          <CarouselContent className="">
            {categories.map((category, index) => (
              <CarouselItem
                onClick={() => {
                  setChoosedCategory(category.title);
                }}
                key={index}
                className="basis-1/2 border border-border  flex flex-col p-4 rounded-lg ">
                <span className="text-lg">{category.icon}</span>
                <span
                  className={`text-base ${category.title === choosedCategory && "font-bold"}`}>
                  {category.title}
                </span>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 justify-self-center w-full">
        <div className="hidden sm:block col-span-1 border-border border rounded-md p-4">
          <p className="mb-6 text-lg">Категории:</p>
          {categories.map((category, index) => (
            <p
              onClick={() => {
                setChoosedCategory(category.title);
              }}
              key={index}
              className="flex flex-nowrap gap-2 mb-2 mx-auto w-25 cursor-pointer hover:font-bold">
              <span>{category.icon}</span>
              <span
                className={`text-base ${category.title === choosedCategory && "font-bold"}`}>
                {category.title}
              </span>
            </p>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 justify-self-center w-full col-span-2 lg:grid-cols-3">
          {filteredCards.map((card, index) => {
            return (
              <CustomizationCard
                key={index}
                customizationCard={card}
                page={page}
              />
            );
          })}
        </div>
      </div>
    </Modal>
  );
}
