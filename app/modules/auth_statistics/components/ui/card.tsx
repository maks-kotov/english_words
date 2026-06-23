interface props {
  icon: string;
  title: string;
}
export default function Card({ icon, title }: props): React.ReactElement {
  return (
    <div
      className={`border rounded-2xl bg-card text-card-foreground w-full text-center py-16 lg:bg-transparent lg:border-0 lg:py-0`}>
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="text-lg">{title}</h3>
    </div>
  );
}
