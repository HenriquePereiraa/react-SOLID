/*
Esse componente não deve saber nada sobre os tipos de notificação, apenas renderiza seu conteúdo.

Esse componente pode ser reutilizado para qualquer notificação!
*/

import { ReactNode } from "react";

type NotificationProps = {
  children: ReactNode;
  className?: string;
};

export function Notification({ children, className }: NotificationProps) {
  return <div className={`notification ${className}`}>{children}</div>;
}
