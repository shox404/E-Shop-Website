export type AdminData = { name: string; password: string };

export type IncomingMessage = { message: string };

export type CurrentAdminData = { name: string; password?: string };

export type PayloadMsg = { payload: IncomingMessage };
