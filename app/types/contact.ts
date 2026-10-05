export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success?: boolean;
  message?: string;
}

export interface ContactDetail {
  title: string;
  description: string;
}
