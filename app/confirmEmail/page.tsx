import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Title } from "./modules/title";
import { Form } from "./modules/form";

export default function ConfirmEmailPage(): React.ReactElement {
  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-sm">
        <Title />
        <Form />
      </DialogContent>
    </Dialog>
  );
}
