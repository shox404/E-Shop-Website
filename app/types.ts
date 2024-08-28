export type AdminLoginData = { name: string; password: string };

export type IncomingMessage = { message: string };

export type CurrentAdminData = Omit<AdminLoginData, "password">;
