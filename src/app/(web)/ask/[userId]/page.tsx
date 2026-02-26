import { getUserById } from "@/app/entities/api/user/";
import { SendQuestionModule } from "@/app/modules/send-question";
import { notFound } from "next/navigation";

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
