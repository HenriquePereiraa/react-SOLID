import {
  ErrorNotification,
  SuccessNotification,
  WarningNotification,
  InfoNatification,
} from "./notificationTypes";

export function ShowNotifications() {
  return (
    <div>
      <SuccessNotification message="Operação realizada com sucesso!" />
      <ErrorNotification message="Ocorreu um erro na operação." />
      <WarningNotification message="Atenção: operação em andamento." />
      <InfoNatification message="Informação: operação iniciada." />
    </div>
  );
}
