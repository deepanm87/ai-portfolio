import PortfolioContent from "@/components/PortfolioContent";

// Revalidate every 60 seconds to fetch latest data from Sanity
export const revalidate = 60;

export default async function Home() {
  return (
    <main className="min-h-screen">
      <PortfolioContent />
    </main>
  );
}
