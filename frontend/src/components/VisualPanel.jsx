import { BrainCircuit, Cpu, Database, Network, Sparkles, Zap } from "lucide-react";

export default function VisualPanel() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-primary p-6 text-white shadow-premium tech-grid">
      <div className="absolute inset-x-8 top-8 h-24 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative grid gap-5">
        <div className="animate-float rounded-3xl border border-white/15 bg-white/12 p-5 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-bold text-accent">AI Training Lab</p>
              <p className="mt-2 text-3xl font-black">Live Tools + Real Projects</p>
            </div>
            <BrainCircuit className="text-accent" size={42} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            ["Automation", Zap],
            ["Cloud", Cpu],
            ["Projects", Network],
            ["Data", Database]
          ].map(([label, Icon]) => (
            <div key={label} className="rounded-2xl border border-white/15 bg-white p-4 text-primary shadow-xl">
              <Icon className="text-brandGreen" size={24} />
              <p className="mt-4 text-sm font-black">{label}</p>
            </div>
          ))}
        </div>
        <div className="rounded-3xl bg-white p-5 text-primary shadow-2xl">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-green-50 text-brandGreen"><Sparkles size={24} /></span>
            <div>
              <p className="font-black">Career Support</p>
              <p className="text-sm text-slate-600">Resume, LinkedIn, mock interviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
