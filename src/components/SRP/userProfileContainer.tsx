import { useUser } from "./hooks/useUser";
import { UserProfileSRP } from "./useProfileSRP";

export function UserProfileContainer() {
  const user = useUser(); // obtém os dados do usuário usando o hook

  return <UserProfileSRP user={user} />; // passa os dados para o componente
}

/*
 Agora temos três responsabilidades separadas:
- useUser lida com dados e estado.
- UserProfile lida apenas com a interface.
- UserProfileContainer integra os dois sem misturá-los.

*/
