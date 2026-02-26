import { ShareBanner } from "@/app/features/share-profile";
import { UserProfile } from "@/app/shared/ui";
import { createClient } from "@pkg/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },

    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/");
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (profileError) {
    redirect("/");
  }
  const { data: questions, error: questionsError } = await supabase
    .from("user_questions")
    .select("*")
    .eq("user_id", user.id);

  if (questionsError) redirect("/");

  return (
    <main className="flex flex-col items-center justify-center mx-52 my-10">
      <div className="flex items-center justify-between w-full">
        <ShareBanner userId={user.id} />
        <UserProfile
          completedQuestions={1}
          createdAt={new Date(profile.created_at)}
          nickname={profile.username ? profile.username : user.email}
          totalQuestions={questions.length}
        />
      </div>
    </main>
  );
}
