import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CUSTOMER_API,
});

export class CustomerService {
  static async createCustomer(
    name: string,
    phoneNumber: string,
    cpf: string,
    isWhatsappPhoneNumber?: true,
  ) {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token não encontrado. Faça login novamente.");
      }

      const { data } = await httpClient.post(
        `/customer`,
        {
          name,
          phoneNumber,
          cpf,
          isWhatsappPhoneNumber,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(data)
      return data;
    } catch (error: any) {
      console.error("Erro ao cadastrar cliente:", error);
      throw new Error("Erro ao realizar cadastro do cliente, tente novamente.");
    }
  }
}
