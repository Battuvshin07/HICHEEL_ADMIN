import { PaginationResponse, SuccessResponse } from "types";
import http from "../..";
import { AdditionalFeeType } from "./type";

namespace additionalFee {
  export const list = (body: any) =>
    http.post<PaginationResponse<AdditionalFeeType>>("/additional-fee/page", {
      hasAuth: true,
      body,
    });

  export const create = (body: any) =>
    http.post<SuccessResponse>("/additional-fee/create", {
      hasAuth: true,
      body,
    });

  export const deleteA = (id: number) =>
    http.del<SuccessResponse>(`/additional-fee/delete/${id}`, {
      hasAuth: true,
    });

  export const update = (body: any, id: number) =>
    http.put<SuccessResponse>(`/additional-fee/update/${id}`, {
      hasAuth: true,
      body,
    });
}

export default additionalFee;
