import { getUserById } from "@/app/entities/api/user/";
import { SendQuestionModule } from "@/app/modules/send-question";
import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ userId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { userId } = await params;
  const response = await getUserById(userId);
  if (!response.ok) {
    return {
      title: "User Not Found",
      description: "This user does not exist or the link is invalid.",
    };
  }

  const { profile } = response;
  const userName = profile.username || "Me";

  return {
    title: `Ask ${userName} Anything`,
    description: `Send an anonymous question to ${userName}. It's 100% secret and safe!`,

    openGraph: {
      title: `Got a secret for ${userName}?`,
      description: `Send an anonymous message to ${userName} right now.`,
    },
  };
}

export default async function AskPage({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = await params;
  const response = await getUserById(userId);

  if (!response.ok) return notFound();

  const { profile } = response;

  return <SendQuestionModule profile={profile} userId={userId} />;
}
