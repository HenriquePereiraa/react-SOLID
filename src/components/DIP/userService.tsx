import axios from "axios";

interface LoginProps {
  email: string;
  password: string;
}

interface LoginResultProps {
  status: number;
  message: string;
}

export const UserService = {
  login: async function ({
    email,
    password,
  }: LoginProps): Promise<LoginResultProps | undefined> {
    try {
      // const response = await api.post('https://...');

      console.log("UserService.login", email, password);

      return {
        status: 200,
        message: "success",
      };
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        throw new Error(`Status: ${err.response.status} - ${err.message}`);
      }
    }
  },
};
