import { Dialog, DialogContent } from "@/components/ui/dialog";
import Form from "@/modules/oneInputForm/components/shared/form";
import Title from "@/modules/oneInputForm/components/shared/title";
import { FormProps } from "@/types/auth";
import { TitleProps } from "@/types/auth";

interface props {
  titleProps: TitleProps;
  formProps: FormProps;
}

export default function OneInputForm({
  titleProps,
  formProps,
}: props): React.ReactElement {
  return (
    <Dialog open={true}>
      <DialogContent className="sm:max-w-sm">
        <Title title={titleProps.title} description={titleProps.description} />
        <Form
          buttonText1={formProps.buttonText1}
          buttonText2={formProps.buttonText2}
          handlerSubmit={formProps.handlerSubmit}
          urlForRedirect={formProps.urlForRedirect}
          labels={formProps.labels}
          names={formProps.names}
          types={formProps.types}
        />
      </DialogContent>
    </Dialog>
  );
}
