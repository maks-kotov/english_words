import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export default function Modal({
  title,
  description,
  children,
  footer = "",
  className = "",
}: {
  title: React.ReactNode;
  description: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}): React.ReactElement {
  return (
    <Dialog>
      <DialogContent showCloseButton={false} className={`${className}`}>
        <DialogHeader>
          <DialogTitle className="text-3xl">{title}</DialogTitle>
          <DialogDescription className="text-base text-light">
            {description}
          </DialogDescription>
        </DialogHeader>
        {children}
        <DialogFooter className="text-light text-xs">{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
