/**
 * Everything under /fr is the French edition. The inline script stamps the
 * document language before paint, so the very first server-rendered HTML a
 * crawler or screen reader sees is already marked French; HtmlLang (root
 * layout) keeps it in sync for client-side navigation afterwards.
 */
export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang="fr"` }} />
      {children}
    </>
  );
}
