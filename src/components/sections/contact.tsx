import site from "@/content/site.json";
import { Mail, Phone, Github, Linkedin, Code2 } from "lucide-react";

const iconFor = (name: string) => {
  switch (name) {
    case "LinkedIn":
      return <Linkedin className="h-4 w-4" />;
    case "GitHub":
      return <Github className="h-4 w-4" />;
    default:
      return <Code2 className="h-4 w-4" />;
  }
};

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="container space-y-6">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card p-6 space-y-3 text-sm">
            <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2 hover:underline">
              <Mail className="h-4 w-4" /> {site.contact.email}
            </a>
            <a href={`tel:${site.contact.phone}`} className="flex items-center gap-2 hover:underline">
              <Phone className="h-4 w-4" /> {site.contact.phone}
            </a>
          </div>
          <div className="card p-6 flex flex-wrap gap-3 items-center">
            {site.contact.social.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md bg-secondary">
                {iconFor(s.name)} {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
