import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DATA_API,
});

export class PortabilityService {
  static async getContractsByCustomerDocument(document: string) {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token não encontrado. Faça login novamente.");
      }

      const { data } = await httpClient.get(
        `/contratos/elegiveis?Cpf=${document}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return data;
    } catch (error: any) {
      console.error("Erro ao buscar contratos:", error);
      throw new Error("Erro ao realizar simulação, tente novamente.");
    }
  }
}
