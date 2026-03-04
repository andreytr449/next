export default function Loading() {
  <main className="flex flex-col gap-10 items-center justify-center mx-52 my-10">
    <div className="bg-gray-200 animate-pulse h-12 w-64 rounded-xl" />

    <section className="flex flex-col justify-center w-92 items-center bg-modal rounded-xl px-10 py-6 gap-4">
      <div className="bg-gray-700 animate-pulse h-[200px] w-[200px] rounded-full" />
      <div className="bg-gray-700 animate-pulse h-8 w-40 rounded-lg" />
    </section>

    <div className="flex flex-col justify-center bg-modal p-10 rounded-2xl items-center pt-4 w-full max-w-[500px]">
      <div className="bg-gray-700 animate-pulse h-24 w-3/4 rounded-xl mb-8 mt-4" />

      <div className="flex flex-col w-full max-w-md gap-4 px-4">
        <div className="flex flex-col gap-2 w-full">
          <div className="bg-gray-700 animate-pulse h-4 w-16 rounded" />
          <div className="bg-gray-700 animate-pulse h-32 w-full rounded-xl" />
        </div>

        <div className="bg-blue-600/50 animate-pulse h-14 w-full rounded-full mt-2" />
      </div>
    </div>
  </main>;
}
