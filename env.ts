import { z } from 'zod';

const envVariables = z.object({
    DATABASE_HOST: z.string(),
    NEXT_PUBLIC_ONCLICK_DOMAIN: z.string(),
    DATABASE_USERNAME_FRANKFURT: z.string(),
    DATABASE_PASSWORD_FRANKFURT: z.string(),
    DATABASE_USERNAME_MUMBAI: z.string(),
    DATABASE_PASSWORD_MUMBAI: z.string(),
    DATABASE_USERNAME_SINGAPORE: z.string(),
    DATABASE_PASSWORD_SINGAPORE: z.string(),
    MIXPANEL_TOKEN: z.string(),
    KV_URL: z.string(),
    KV_REST_API_URL: z.string(),
    KV_REST_API_TOKEN: z.string(),
    KV_REST_API_READ_ONLY_TOKEN: z.string(),
    NEXT_PUBLIC_API_ROUTE_SECRET: z.string(),
    NEXT_PUBLIC_FORMATS_DOMAIN_DATA: z.string(),
    NEXT_PUBLIC_MARKER_DOMAIN_ROTATION: z.string(),
    NEXT_PUBLIC_MARKER_DOMAIN: z.string(),
    NEXT_PUBLIC_ONCLICK_CODE: z.string(),
    NEXT_PUBLIC_IPP_DOMAIN: z.string(),
    NEXT_PUBLIC_DOMAIN_REVERSE: z.string(),
});

envVariables.parse(process.env);

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envVariables> {}
    }
}