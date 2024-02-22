import type { AppLoadContext } from "@remix-run/cloudflare";
import type { PlatformProxy } from "wrangler";
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

interface CloudflareLoadContext {
	context: {
		cloudflare: Omit<PlatformProxy<unknown>, "dispose">;
	};
	request: Request;
}

export function getLoadContext({
	context,
}: CloudflareLoadContext): AppLoadContext {
	const { CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY } = schema.parse(
		context.cloudflare.env,
	);

	return {
		env: { CLERK_PUBLISHABLE_KEY, CLERK_SECRET_KEY },
	};
}
