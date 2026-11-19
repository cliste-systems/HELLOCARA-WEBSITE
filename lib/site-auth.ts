export const APP_ORIGIN = (process.env.NEXT_PUBLIC_APP_URL || "https://app.hellocara.ie").replace(/\/$/, "");

export const APP_AUTHENTICATE_URL = `${APP_ORIGIN}/authenticate`;

export const APP_SIGNUP_URL = `${APP_ORIGIN}/signup`;
