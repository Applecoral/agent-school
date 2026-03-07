
import React from 'react';
import { ArrowRight, Brain, Rocket, Sparkles, Users, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  zÊ    icon : Brain,
    title: 'Agent Foundations',
    body: 'Master prompting, tools, and memory patterns with guided labs.',
  },
  {
    icon: Rocket,
    title: 'Ship Real Agents',
    body: 'Go from prototype to production-grade agents in weeks.',
  },
  {
    icon: Users,
    title: 'Mentored Learning',
    body: 'Small-group sessions with engineers shipping frontier agents.',
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-20">
        <section className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 0x-3 py-1 text-xs font-medium text-slate-300 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
              <span>Agent School Â· Cohort II applications now open</span>
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Learn to design, debug,
              <span className="text-emerald-400"> and ship agents</span>
            </h1>
            <p className="max-w-xl text-balance text-sm text-slate-300 sm:text-base">
              Agent School is a focused, project-heavy program for engineers who want to move
              beyond chatbots and build durable AI agents that run real workflows.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
              <span>Apply for the next cohort</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-emerald-300">
              <PlayCircle className="h-5 w-5 text-emerald-400" />
              <span>Watch a 5-minute walkthrough</span>
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.55 }}
            className="grid gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 sm:grid-cols-3"
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-3 border-slate-800/60 sm:border-l sm:first:border-l-0 sm:pl-4 sm:first:pl-0"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-emerald-400 ring-1 ring-emerald-500/40">
          -™•…ÑÕÉ”¹¥½¸±…ÍÍ9…µ”ô‰ ´ĞÜ´Ğˆ€¼ø(€€€€€€€€€€€€€€€€ğ½‘¥Øø(€€€€€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰ÍÁ…”µä´Äˆø(€€€€€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰Ñ•áĞµáÌ™½¹ĞµÍ•µ¥‰½±ÕÁÁ•É…Í”ÑÉ…­¥¹œµİ¥‘”Ñ•áĞµÍ±…Ñ”´ĞÀÀˆø(€€€€€€€€€€€€€€€€€€€í™•…ÑÕÉ”¹Ñ¥Ñ±•ô(€€€€€€€€€€€€€€€€€€ğ½Àø(€€€€€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰Ñ•áĞµáÌÑ•áĞµÍ±…Ñ”´ĞÀÀˆùí™•…ÑÕÉ”¹‰½‘åôğ½Àø(€€€€€€€€€€€€€€€€ğ½‘¥Øø(€€€€€€€€€€€€€€ğ½‘¥Øø(€€€€€€€€€€€€¤¥ô(€€€€€€€€€€ğ½µ½Ñ¥½¸¹‘¥Øø(€€€€€€€€€€ñµ½Ñ¥½¸¹‘¥Ø¥¹¥Ñ¥…°õíì½Á…¥Ñäè€À°äè€Äàõô…¹¥µ…Ñ”õíì½Á…¥Ñäè€Ä°äè€ÀõôÑÉ…¹Í¥Ñ¥½¸õíì‘•±…äè€À¸ĞÔ°‘ÕÉ…Ñ¥½¸è€À¸ÔÔõô±…ÍÍ9…µ”ô‰É½Õ¹‘•´Éá°‰½É‘•È‰½É‘•Èµ•µ•É…±´ÔÀÀ¼ÈÀ‰œµÉ…‘¥•¹ĞµÑ¼µ‰È™É½´µ•µ•É…±´ÔÀÀ¼ÄÀÙ¥„µÍ±…Ñ”´äÀÀÑ¼µÍ±…Ñ”´äÔÀÀ´Øˆø(€€€€€€€€€€€€ñ‘¥Ø±…ÍÍ9…µ”ô‰™±•à¥Ñ•µÌµ•¹Ñ•È©ÕÍÑ¥™äµ‰•Ñİ••¸…À´Ğˆø(€€€€€€€€€€€€€€ñ‘¥Øø(€€€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰Ñ•áĞµáÌ™½¹ĞµÍ•µ¥‰½±ÕÁÁ•É…Í”ÑÉ…­¥¹œµİ¥‘”Ñ•áĞµ•µ•É…±´ÌÀÀˆù]¡…Ğå½Ô™…Á½Ìí±°‰Õ¥±ğ½Àø(€€€€€€€€€€€€€€€€ñÀ±…ÍÍ9…µ”ô‰µĞ´ÄÑ•áĞµÍ´Ñ•áĞµÍ±…Ñ”´ÈÀÀˆø(€€€€€€€€€€€€€€€€€•Í¥¸°¥µÁ±•µ•¹Ğ°…¹Í¡¥À…¸•¹µÑ¼µ•¹…•¹Ğ½İ¹¥¹œ„É•…°İ½É­™±½Ü¥¸å½ÕÈÁÉ½‘ÕĞ½ÈÑ•…´¸(€€€€€€€€¶8</div>
              <div className="rounded-xl border border-emerald-500/30 bg-slate-950/60 px-4 py-3 text-right text-xs text-slate-300">
                <p className="font-semibold text-emerald-300">4 weeks Â· 6 live sessions</p>
                <p>Capstone: production agent with evals & guardrails.</p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
