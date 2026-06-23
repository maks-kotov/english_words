interface props {
  num: string;
  title: string;
  description: string;
}
export default function Step({ num, title, description }: props) {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <div className="flex flex-col items-center lg:flex-row lg:gap-x-4 lg:w-full">
        <div className="w-12 h-12 border rounded-sm bg-secondary text-secondary-foreground text-3xl flex justify-center items-center mb-4 ">
          {num}
        </div>
        <div className="border h-16 mb-2 lg:h-0.5 grow"></div>
      </div>

      <h3 className="text-lg mb-0.5">{title}</h3>
      <p className="text-sm text-light lg:text-start">{description}</p>
    </div>
  );
}
