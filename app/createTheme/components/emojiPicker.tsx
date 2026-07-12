export default function EmojiPicker({
  title,
  emojiesArray,
}: {
  title: string;
  emojiesArray: string[];
}): React.ReactElement {
  return (
    <div>
      <p className="text-md mb-2">{title}</p>
      <div className="flex flex-wrap gap-4 justify-center">
        {emojiesArray.map((e: string) => (
          <span className="text-lg cursor-pointer" key={e}>
            {e}
          </span>
        ))}
      </div>
    </div>
  );
}
