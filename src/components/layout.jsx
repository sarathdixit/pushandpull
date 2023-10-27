import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white relative z-10 font-system-ui sans-serif py-8 pt-40 px-8">
        {children}
      </main>

      <footer className="sticky bottom-0 left-0 w-full bg-[#462D81] grid place-items-center py-12">
        <img src="/assets/white-logo.svg" alt="" />
      </footer>
    </>
  );
}
