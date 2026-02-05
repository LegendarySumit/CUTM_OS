import PublicHeader from '../sections/PublicHeader';
import PublicFooter from '../sections/PublicFooter';

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />
      <main className="flex-1">
        {children}
      </main>
      <PublicFooter />
    </div>
  );
}
