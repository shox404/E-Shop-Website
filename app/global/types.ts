import { ChangeEvent } from "react";

export type AdminData = { name: string; password: string };

export type IncomingMessage = { message: string };

export type CurrentAdminData = { name: string; password?: string };

export type PayloadMsg = { payload: IncomingMessage };

export type Item = {
  id?: string;
  quantity?: number;
  images: any[];
  title: string;
  price: number;
  description: string;
  active: boolean;
  amount: number;
  category: ""
};

export type Detail = { key: string; value: any };

export type FormValue = ChangeEvent<HTMLFormElement>;
