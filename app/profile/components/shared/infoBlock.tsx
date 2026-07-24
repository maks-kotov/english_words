export default function InfoBlock({
  title,
  value,
}: {
  title: string;
  value: string;
}): React.ReactElement {
  return (
    <div className="flex items-center gap-2">
      <p className="text-sm">{title}:</p>
      <p className={`${value === "avatar" ? "avatar bg-border" : ""}`}>
        {value === "avatar" ? "" : value}
      </p>
    </div>
  );
}
