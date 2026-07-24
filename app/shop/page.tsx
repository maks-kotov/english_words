import { Customization } from "@/modules/customization";
import { CustomizationCards } from "@/data/customizationData";

export default function Shop(): React.ReactElement {
  return (
    <Customization
      page="shop"
      balance={{ rubins: 0, money: 4 }}
      cards={CustomizationCards}
    />
  );
}
