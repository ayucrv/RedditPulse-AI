import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import TopNav from '../components/dashboard/TopNav';
import MobileDrawer from '../components/dashboard/MobileDrawer';

export default function DashboardPage() {
  const [searchParams] = useSearchParams();
  const subreddit = searchParams.get('subreddit') || 'technology';
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.title = `RedditPulse | r/${subreddit}`;
  }, [subreddit]);

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="hidden w-72 flex-shrink-0 lg:block">
        <Sidebar currentSubreddit={subreddit} />
      </aside>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} currentSubreddit={subreddit} />

      <main className="flex flex-1 flex-col overflow-y-auto">
        <TopNav subreddit={subreddit} onMenuClick={() => setMobileOpen(true)} />
        <div className="flex-1 p-6 lg:p-8">
          <div className="glass-card flex h-[70vh] items-center justify-center text-white/20 text-lg">
            <div className="text-center">
              <div className="mb-4 h-16 w-16 rounded-full bg-reddit-red/10 animate-pulse mx-auto" />
              <p>Analytics for r/{subreddit} coming soon</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}