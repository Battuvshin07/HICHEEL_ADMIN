import { PaginationResponse, SuccessResponse } from "types";
import http from "../..";
import { TicketReportType } from "./type";

namespace TicketReport {
  export const list = (body: any) =>
    http.post<PaginationResponse<TicketReportType>>("/ticket-report/page", {
      hasAuth: true,
      body,
    });

  export const create = (body: any) =>
    http.post<SuccessResponse>("/ticket-report/create", {
      hasAuth: true,
      body,
    });

  export const deleteA = (id: number) =>
    http.del<SuccessResponse>(`/ticket-report/delete/${id}`, {
      hasAuth: true,
    });

  export const update = (body: any, id: number) =>
    http.put<SuccessResponse>(`/ticket-report/update/${id}`, {
      hasAuth: true,
      body,
    });
}

export default TicketReport;
