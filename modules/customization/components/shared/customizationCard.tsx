import { Button } from "@/components/ui/button";
import { CustomizationCardType } from "@/types/customization";
// import { CardTitleType } from "@/types/customization";
import { Lock } from "lucide-react";

const fontClassMap: Record<string, string> = {
  Comic: "font-comic",
  Rubik: "font-rubik",
  Century: "font-century",
  Inter: "font-sans",
};

export default function CustomizationCard({
  customizationCard,
  page,
}: {
  customizationCard: CustomizationCardType;
  page: "settings" | "shop";
}): React.ReactElement {
  function getButtonLabel(): "Применить" | "Применено" | "Купить" | "Куплено" {
    if (!customizationCard.isActive)
      return page === "settings" ? "Применить" : "Купить";
    return page === "settings" ? "Применено" : "Куплено";
  }
  const fontClass = customizationCard.model
    ? fontClassMap[customizationCard.model]
    : "";
  return (
    <div className="border border-border p-2 sm:p-4 relative rounded-md">
      <p className="text-xl">{customizationCard.cardTitle}</p>
      <p className="text-sm mb-4 h-6">
        {customizationCard.model && customizationCard.model}
      </p>
      <p className={`text-4xl mb-8 sm:mb-12 ${fontClass}`}>
        {customizationCard.icon}
      </p>
      {page === "settings" || customizationCard.isActive ? (
        ""
      ) : (
        <>
          <p className="text-sm absolute bottom-13 left-2 cursor-default sm:text-lg">
            {customizationCard.price} 🥮
          </p>
          <Lock
            strokeWidth={3}
            className="w-5 h-5 absolute bottom-13 right-2 sm:w-7 sm:h-7"
          />
        </>
      )}

      <div className="h-9">
        <Button
          className={`absolute -bottom-px -left-px -right-px py-3 rounded-b-md rounded-t-none font-bold ${customizationCard.isActive && "bg-light text-secondary-foreground"}`}
          disabled={customizationCard.isActive}>
          {getButtonLabel()}
          {/* {page === ""} */}
        </Button>
      </div>
    </div>
  );
}
