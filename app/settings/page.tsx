import { Customization } from "@/modules/customization";
import { CustomizationCards } from "@/data/customizationData";

export default function Settings(): React.ReactElement {
  return <Customization page="settings" cards={CustomizationCards} />;
}
