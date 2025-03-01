/*
 O que há de errado aqui?
Este componente viola o SRP porque está misturando três responsabilidades diferentes:

- Buscando dados da API (useEffect + fetch).
- Gerenciando estado do usuário (useState).
- Renderizando a UI (JSX com os dados do usuário).

*/
import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
}

export function UserProfile() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("https://github.com/henriquePereiraa")
      .then((res) => res.json())
      .then(setUser);
  }, []);

  return (
    <div>
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  );
}
