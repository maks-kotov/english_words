interface props {
  num: string;
  title: string;
  description: string;
}
export default function Step({ num, title, description }: props) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border rounded-sm bg-secondary text-secondary-foreground text-3xl flex justify-center items-center mb-4">
        {num}
      </div>
      <div className="border h-16 mb-2"></div>
      <h3 className="text-lg mb-0.5">{title}</h3>
      <p className="text-sm text-light">{description}</p>
    </div>
  );
}
