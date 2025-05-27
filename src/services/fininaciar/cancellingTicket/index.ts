import { PaginationResponse, SuccessResponse } from "types";
import http from "../..";
import { CancellingTicketType } from "./type";

namespace cancellingTicket {
  export const list = (body: any) =>
    http.post<PaginationResponse<CancellingTicketType>>(
      "/cancelling-ticket/page",
      {
        hasAuth: true,
        body,
      }
    );

  export const create = (body: any) =>
    http.post<SuccessResponse>("/cancelling-ticket/create", {
      hasAuth: true,
      body,
    });

  export const deleteA = (id: number) =>
    http.del<SuccessResponse>(`/cancelling-ticket/delete/${id}`, {
      hasAuth: true,
    });

  export const update = (body: any, id: number) =>
    http.put<SuccessResponse>(`/cancelling-ticket/update/${id}`, {
      hasAuth: true,
      body,
    });
}

export default cancellingTicket;
