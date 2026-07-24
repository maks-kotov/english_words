import Card from "./components/card";
import Modal from "@/components/shared/modal";

export default function Bonuses(): React.ReactElement {
  return (
    <Modal
      title={"Ежедневный бонус"}
      description={"Заходите каждый день, чтобы цепочка не прервалась"}
      footer="Вы будете получать монетки если будете заходить каждый день и рубины
          если будете заходить 7 дней подряд. Монеты позволяют покупать вещи в
          магазине, рубины позволяют покупать вещи, а также использовать
          подсказки.">
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 justify-self-center">
        <Card
          title="1 день"
          bonusIsGetted={true}
          money="🥮"
          canTakeBonus={false}
        />
        <Card
          title="2 день"
          bonusIsGetted={true}
          money="🥮🥮"
          canTakeBonus={false}
        />
        <Card
          title="3 день"
          bonusIsGetted={true}
          money="🥮🥮🥮"
          canTakeBonus={false}
        />
        <Card
          title="4 день"
          bonusIsGetted={false}
          money="🥮🥮🥮🥮"
          canTakeBonus={true}
        />
        <Card
          title="5 день"
          bonusIsGetted={false}
          money="🥮🥮🥮🥮🥮"
          canTakeBonus={false}
        />
        <Card
          title="6 день"
          bonusIsGetted={false}
          money="🥮🥮🥮🥮🥮🥮"
          canTakeBonus={false}
        />
        <Card
          title="7 день"
          bonusIsGetted={false}
          money="♦️"
          canTakeBonus={false}
        />
      </div>
    </Modal>
  );
}
