export default async function AskPage({
  params,
}: {
  params: { userId: string };
}) {
  const { userId } = await params;
  return (
    <main>
      <h1>User id: {userId}</h1>
    </main>
  );
}
