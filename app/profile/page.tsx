"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";
import { useState } from "react";
import Modal from "@/components/shared/modal";

export default function Profile(): React.ReactElement {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Максон");

  return (
    <Modal
      title="👤 Профиль"
      description="Здесь вы можете настроить свой аккаунт"
      className="sm:max-w-md lg:max-w-md">
      <div className="flex flex-col gap-2 sm:items-center">
        {/* avatar: */}
        <div className="flex gap-2 items-center">
          <p>Аватар:</p>
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-linear-to-r from-[#3b82f6] to-[#f59e0b] flex items-center justify-center text-3xl font-bold border-2 border-primary/20 bg-clip-padding">
              {name[0].toUpperCase()}
              <div
                className={`absolute inset-0 rounded-full bg-black/40 opacity-0   transition-opacity duration-200 flex items-center justify-center ${isEditing && "hover:opacity-100 cursor-pointer"}`}>
                <Pencil className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
        {/* name: */}
        <div className="flex gap-2 items-center">
          <p>Имя:</p>
          {isEditing ? (
            <Input
              className="py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <p className="text-xl font-semibold">{name}</p>
          )}
        </div>
      </div>
      {/* buttons: */}
      {
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <Button
                size={"sm"}
                variant="outline"
                onClick={() => setIsEditing(false)}
                className="flex-1 text-xs">
                Отмена
              </Button>
              <Button
                size={"sm"}
                onClick={() => setIsEditing(false)}
                className="flex-1 font-semibold text-xs">
                Сохранить
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsEditing(true)} variant="outline">
              <Pencil className="w-4 h-4" />
              <span className="text-xs font-semibold">
                Редактировать профиль
              </span>
            </Button>
          )}
        </div>
      }
      {/* registration date: */}

      <div className="flex gap-2 items-center justify-center">
        <p className="text-xs sm:text-sm">Дата регистрации:</p>
        <b className="text-xs sm:text-sm">20 июля, 2026г</b>
      </div>
    </Modal>
  );
}
