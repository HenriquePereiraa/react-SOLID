import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null);

  const baseURL = "https://api.github.com"

  useEffect(() => {
    fetch(`${baseURL}/users/HenriquePereiraa`)
      .then((res) => res.json())
      .then(setUser);
  }, []);

  return user;
}
