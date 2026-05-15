import { Dialog, DialogContent } from "@/components/ui/dialog";
import OAuths from "@/app/register/modules/components/shared/oauths";
import Form from "@/app/register/modules/components/shared/form";
import Title from "@/app/register/modules/components/shared/title";
import Links from "@/app/register/modules/components/shared/links";

export default function RegisterWindow() {
  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-sm">
        <Title />
        <Form />
        <OAuths />
        <Links />
      </DialogContent>
    </Dialog>
  );
}
