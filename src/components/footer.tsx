import site from "@/content/site.json";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="opacity-80">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <div className="flex gap-4">
          {site.contact.social.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="hover:underline">
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
