import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsultationForm from "@/components/home/ConsultationForm";
import MeshBackground from "@/components/ui/MeshBackground";
import { CheckCircle2, Calendar, ShieldCheck, Clock } from "lucide-react";

export default function BookConsultation() {
  const benefits = [
    {
      title: "1-on-1 Architecture Session",
      desc: "Work directly with a Principal AI/Blockchain Architect to sketch your database and pipeline integrations.",
      icon: Calendar,
    },
    {
      title: "60-Percent Operational Cost Audits",
      desc: "Locate manual bottlenecks and review exact estimates on how automation cuts monthly billing.",
      icon: Clock,
    },
    {
      title: "Security & Auditing Focus",
      desc: "Learn about secure zero-knowledge state logic and compliant enterprise data protection methods.",
      icon: ShieldCheck,
    },
    {
      title: "Custom Proposal & Scope",
      desc: "Receive a comprehensive feature-by-feature execution proposal, budget roadmap, and timeline within 24 hours.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MeshBackground />
      <Navbar />

      <main className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left panel: Info */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-electric bg-electric/10 border border-electric/20 px-3 py-1 rounded-full uppercase">
                STRATEGY CALL
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-text-primary leading-tight">
                Architect the <br />
                <span className="bg-gradient-to-r from-electric to-cyan bg-clip-text text-transparent">
                  Future of Your Ops.
                </span>
              </h1>
              <p className="text-sm text-text-secondary leading-relaxed">
                Connect with our engineering leads to design high-throughput trading channels, automated agent workflows, or custom subnets.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-mono font-bold text-text-muted uppercase tracking-wider">
                What to expect
              </h3>
              <div className="space-y-4">
                {benefits.map((b, idx) => {
                  const Icon = b.icon;
                  return (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="p-2 rounded-lg bg-glass border border-border text-electric shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold text-text-primary">{b.title}</h4>
                        <p className="text-xs text-text-secondary leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-border/50 flex items-center justify-between text-xs text-text-muted font-mono">
              <span>Next openings: Today</span>
              <span>•</span>
              <span>Lead response: &lt;24 hours</span>
            </div>
          </div>

          {/* Right panel: Form */}
          <div className="lg:col-span-7">
            <ConsultationForm />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
