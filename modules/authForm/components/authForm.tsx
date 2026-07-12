import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import OAuths from "@/modules/authForm/components/shared/oauths";
import Form from "@/modules/authForm/components/shared/form";
import Title from "@/modules/authForm/components/shared/title";
import Links from "@/modules/authForm/components/shared/links";
import { FormProps, LinksProps, TitleProps } from "@/types/auth";

interface props {
  titleProps: TitleProps;
  formProps: FormProps;
  linksProps: LinksProps;
  showFooter: boolean;
}

export default function AuthForm({
  titleProps,
  formProps,
  linksProps,
  showFooter,
}: props): React.ReactElement {
  return (
    <Dialog open={true}>
      <DialogContent showCloseButton={false} className="sm:max-w-sm">
        <Title title={titleProps.title} description={titleProps.description} />
        <Form
          handlerSubmit={formProps.handlerSubmit}
          urlForRedirect={formProps.urlForRedirect}
          buttonText1={formProps.buttonText1}
          buttonText2={formProps.buttonText2}
          labels={formProps.labels}
          names={formProps.names}
          types={formProps.types}
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
