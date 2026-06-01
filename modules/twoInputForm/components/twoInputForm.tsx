import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import OAuths from "@/modules/twoInputForm/components/shared/oauths";
import Form from "@/modules/twoInputForm/components/shared/form";
import Title from "@/modules/twoInputForm/components/shared/title";
import Links from "@/modules/twoInputForm/components/shared/links";
import { FormProps, LinksProps, TitleProps } from "@/types/auth";

interface props {
  titleProps: TitleProps;
  formProps: FormProps;
  linksProps: LinksProps;
  showFooter: boolean;
}

export default function TwoInputForm({
  titleProps,
  formProps,
  linksProps,
  showFooter,
}: props): React.ReactElement {
  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-sm">
        <Title title={titleProps.title} description={titleProps.description} />
        <Form
          label={formProps.label}
          handlerSubmit={formProps.handlerSubmit}
          urlForRedirect={formProps.urlForRedirect}
          buttonText1={formProps.buttonText1}
          buttonText2={formProps.buttonText2}
        />
        {showFooter && (
          <DialogFooter>
            <OAuths />
            <Links
              linkHref={linksProps.linkHref}
              linkText={linksProps.linkText}
            />
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
