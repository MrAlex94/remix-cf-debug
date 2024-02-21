import type { GetLoadContextFunction } from "@remix-run/cloudflare-pages";
import { z } from "zod";

declare module "@remix-run/cloudflare" {
	interface AppLoadContext {
		env: {
			CLERK_PUBLISHABLE_KEY: string;
			CLERK_SECRET_KEY: string;
		};
	}
}

const schema = z.object({
	CLERK_PUBLISHABLE_KEY: z.string(),
	CLERK_SECRET_KEY: z.string(),
});

export const getLoadContext: GetLoadContextFunction = ({ context }) => {
	const { CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY } = schema.parse(
		context.cloudflare.env,
	);

	return {
		env: { CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY },
	};
};
