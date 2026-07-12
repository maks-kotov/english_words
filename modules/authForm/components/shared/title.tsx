import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TitleProps } from "@/types/auth";

export default function Title({
  title,
  description,
}: TitleProps): React.ReactElement {
  return (
    <DialogHeader>
      <DialogTitle className="text-center text-2xl font-bold">
        {title}
      </DialogTitle>
      <DialogDescription>{description}</DialogDescription>
    </DialogHeader>
  );
}
