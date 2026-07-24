//это модуль, который отрисовывает модалки, связанные с авторизацией. они все между собой похожи, поэтому я создал его. есть похожий модуль customization, который отрисовывает модалки, связанные с кастомизацией аккаунта (магазин и настройки).
import OAuths from "@/modules/authForm/components/shared/oauths";
import Form from "@/modules/authForm/components/shared/form";
import Links from "@/modules/authForm/components/shared/links";
import { FormProps, LinksProps, TitleProps } from "@/types/auth";
import Modal from "@/components/shared/modal";

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
    <Modal
      className="sm:max-w-md lg:max-w-md"
      title={<p className="text-2xl font-bold">{titleProps.title}</p>}
      description={titleProps.description}
      footer={
        showFooter ? (
          <>
            <OAuths />
            <Links
              linkHref={linksProps.linkHref}
              linkText={linksProps.linkText}
            />
          </>
        ) : (
          <></>
        )
      }>
      <Form
        handlerSubmit={formProps.handlerSubmit}
        urlForRedirect={formProps.urlForRedirect}
        buttonText1={formProps.buttonText1}
        buttonText2={formProps.buttonText2}
        labels={formProps.labels}
        names={formProps.names}
        types={formProps.types}
      />
    </Modal>
  );
  {
    /* <Dialog open={true}>
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
{}          </DialogFooter>
        )}
      </DialogContent>
    </Dialog> */
  }
}
