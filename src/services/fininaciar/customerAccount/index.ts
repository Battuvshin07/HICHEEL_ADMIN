import { PaginationResponse, SuccessResponse } from "types";
import http from "../..";
import { CustomerAccountType } from "./type";

namespace customerAccount {
  export const list = (body: any) =>
    http.post<PaginationResponse<CustomerAccountType>>(
      "/cutomer-account/page",
      {
        hasAuth: true,
        body,
      }
    );

  export const create = (body: any) =>
    http.post<SuccessResponse>("/cutomer-account/create", {
      hasAuth: true,
      body,
    });

  export const deleteA = (id: number) =>
    http.del<SuccessResponse>(`/cutomer-account/delete/${id}`, {
      hasAuth: true,
    });

  export const update = (body: any, id: number) =>
    http.put<SuccessResponse>(`/cutomer-account/update/${id}`, {
      hasAuth: true,
      body,
    });
}

export default customerAccount;
