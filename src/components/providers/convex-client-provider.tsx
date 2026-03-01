"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { type ReactNode, useEffect, useMemo, useState } from "react";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
const convex = convexUrl ? new ConvexReactClient(convexUrl) : null;

const isValidClerkKey = (key: string | undefined): key is string => {
	if (!key) return false;
	return !key.includes("YOUR_") && key.startsWith("pk_");
};

type Props = { children: ReactNode };

const ConvexAuthedProvider = ({ children }: Props) => {
	if (!convex) return <>{children}</>;

	return (
		<ConvexProviderWithClerk client={convex} useAuth={useAuth}>
			{children}
		</ConvexProviderWithClerk>
	);
};

export const ConvexClientProvider = ({ children }: Props) => {
	const [mounted, setMounted] = useState(false);
	const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
	const canUseClerk = useMemo(() => isValidClerkKey(clerkKey), [clerkKey]);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted || !canUseClerk) {
		return <>{children}</>;
	}

	return (
		<ClerkProvider publishableKey={clerkKey}>
			<ConvexAuthedProvider>{children}</ConvexAuthedProvider>
		</ClerkProvider>
	);
};
