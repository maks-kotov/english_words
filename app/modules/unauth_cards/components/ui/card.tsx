interface props {
  icon: string;
  title: string;
  description: string;
}
export default function Card({ icon, title, description }: props) {
  return (
    <div className="border rounded-2xl bg-card text-card-foreground">
      <div className="mt-12 mb-2 text-4xl">{icon}</div>
      <h3 className="mb-0.5 text-lg">{title}</h3>
      <p className="mb-12 text-sm text-light">{description}</p>
    </div>
  );
}
