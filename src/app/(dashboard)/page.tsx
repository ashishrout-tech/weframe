import DashboardContent from './DashboardContent';
import DashboardHero from './DashboardHero';

export default function Home() {
  return (
    <div className=" p-10">
      <div className=" h-fit">
        <DashboardHero />
      </div>
      <div className=" h-fit pt-7 flex justify-center">
        <DashboardContent />
      </div>
    </div>
  );
}
