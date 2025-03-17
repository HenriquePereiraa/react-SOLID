// Agora, criamos novos componentes sem modificar o Notification.

//Agora podemos criar novos tipos sem alterar o Notification!

import { Notification } from "./notification";

export function SuccessNotification({ message }: { message: string }) {
  return (
    <Notification className="bg-green-500 text-white p-4 rounded-md">
      {message}
    </Notification>
  );
}

export function ErrorNotification({ message }: { message: string }) {
  return (
    <Notification className="bg-red-500 text-white p-4 rounded-md">
      {message}
    </Notification>
  );
}

export function WarningNotification({ message }: { message: string }) {
  return (
    <Notification className="bg-yellow-500 text-white p-4 rounded-md">
      {message}
    </Notification>
  );
}

export function InfoNatification({ message }: { message: string }) {
  return (
    <Notification className="bg-blue-500 text-white p-4 rounded-md">
      {message}
    </Notification>
  );
}
