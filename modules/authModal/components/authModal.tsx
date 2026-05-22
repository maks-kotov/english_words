import { Dialog, DialogContent } from "@/components/ui/dialog";
import OAuths from "@/modules/authModal/components/shared/oauths";
import Form from "@/modules/authModal/components/shared/form";
import Title from "@/modules/authModal/components/shared/title";
import Links from "@/modules/authModal/components/shared/links";
import { FormProps, LinksProps } from "@/modules/authModal/types";

interface props {
  title: string;
  formProps: FormProps;
  linksProps: LinksProps;
}

export default function AuthModal({
  title,
  formProps,
  linksProps,
}: props): React.ReactElement {
  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-sm">
        <Title title={title} />
        <Form formProps={formProps} />
        <OAuths />
        <Links linksProps={linksProps} />
      </DialogContent>
    </Dialog>
  );
}
