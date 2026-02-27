import { getUser } from "@/app/entities/api/user";
import { UserProfileModule } from "@/app/modules/user-profile";
import { redirect } from "next/navigation";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const params = await searchParams;
  const currentPage = Number(params?.page) || 1;

  const response = await getUser(currentPage);

  if (!response.ok) {
    redirect("/");
  }
  const { profile, user, totalPages } = response;

  return (
    <UserProfileModule
      currentPage={currentPage}
      profile={profile}
      totalPages={totalPages}
      user={user}
    />
  );
}
