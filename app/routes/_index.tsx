import { createClerkClient } from "@clerk/remix/api.server";
import { getAuth } from "@clerk/remix/ssr.server";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Title" },
    { name: "description", content: "Description" },
  ];
};

export async function loader({ request, context, params }: LoaderFunctionArgs) {
  const { userId } = await getAuth({ request, context, params });
  const { users } = createClerkClient({
    secretKey: context.env.CLERK_SECRET_KEY,
  });
  const user = userId ? await users.getUser(userId) : null;
  return { user };
}

export default function IndexRoute() {
  const { user } = useLoaderData<typeof loader>();

  if (!user) {
    return ("Logged Out");
  }

  return ("Logged Out");
}
