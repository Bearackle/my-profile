import ProjectsSection from "@/components/ProjectsSection";
import ProfileCard from "@/components/ProfileCard";
import IntroductionSection from "@/components/IntroductionSection";
import ToolSection from "@/components/ToolSection";
import MessageMe from "@/components/MessageMe";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 min-h-screen">
          {/* Left Side - Profile Card */}
          <div className="lg:w-[300px] lg:sticky lg:top-0 h-screen lg:ml-30">
            <ProfileCard />
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 flex flex-col gap-16 lg:mr-30 py-16">
            <IntroductionSection />
            <ToolSection />
            <ProjectsSection />
            <MessageMe />
          </div>
        </div>
      </div>
    </main>
  );
}
