import { getUser } from "@/app/entities/api/user";
import { UserProfileModule } from "@/app/modules/user-profile";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const response = await getUser();

  if (!response.ok) redirect("/");

  const { profile, questions, user } = response;

  return (
    <UserProfileModule profile={profile} questions={questions} user={user} />
  );
}
