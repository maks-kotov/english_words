import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Title({ title }: { title: string }) {
  return (
    <DialogHeader>
      <DialogTitle className="text-center text-xl font-bold">
        {title}
      </DialogTitle>
      <DialogDescription></DialogDescription>
    </DialogHeader>
  );
}
