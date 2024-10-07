import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.PROPOSALS_API,
});

export class PortabilityService {
  static async getContractsByCustomerDocument(document: string) {
    try {
      const { data } = await httpClient.get(
        `/contratos/elegiveis?Cpf=${document}`
      );

      return data;
    } catch (error: any) {
      console.log(error);
      throw new Error("Erro ao realizar simulação, tente novamente.");
    }
  }
}