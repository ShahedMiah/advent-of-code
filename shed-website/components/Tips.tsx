const tips = [
  {
    icon: "🌤️",
    title: "Check the Weather",
    color: "border-blue-500/30 bg-blue-950/20",
    tip: "Plan your build during a dry forecast window. Wet lumber warps and twists as it dries, causing framing issues. Aim for at least 5 consecutive dry days.",
  },
  {
    icon: "📸",
    title: "Document Everything",
    color: "border-purple-500/30 bg-purple-950/20",
    tip: "Take photos at every stage. When you're wondering where a wire runs or how deep that post goes, you'll thank yourself. Also useful for insurance and resale.",
  },
  {
    icon: "🎯",
    title: "Measure Twice, Cut Once",
    color: "border-yellow-500/30 bg-yellow-950/20",
    tip: "This old adage exists for a reason. Lumber is expensive. Double-check every measurement before cutting. Use a marking knife instead of pencil for accuracy.",
  },
  {
    icon: "👫",
    title: "Get a Helper",
    color: "border-green-500/30 bg-green-950/20",
    tip: "Many tasks — lifting walls, installing rafters, holding panels — require two sets of hands. It's also safer. Promise pizza in exchange for help.",
  },
  {
    icon: "🦺",
    title: "Safety First",
    color: "border-red-500/30 bg-red-950/20",
    tip: "Always wear safety glasses when cutting. Use hearing protection with power tools. Never work on the roof without proper footing. Keep a first aid kit on site.",
  },
  {
    icon: "💧",
    title: "Treat All Exterior Wood",
    color: "border-cyan-500/30 bg-cyan-950/20",
    tip: "Any wood touching or near the ground must be pressure-treated or naturally rot-resistant (cedar, redwood). Untreated wood will rot within a few years.",
  },
  {
    icon: "🔢",
    title: "Buy 10% Extra Materials",
    color: "border-orange-500/30 bg-orange-950/20",
    tip: "Mistakes happen. Add 10-15% to your material estimates for waste, cuts gone wrong, and pieces you simply need more of. Returning extras is easier than mid-project runs.",
  },
  {
    icon: "🧲",
    title: "Use a Magnetic Wristband",
    color: "border-pink-500/30 bg-pink-950/20",
    tip: "Keep screws and nails on your wrist with a magnetic wristband. Game-changing for productivity — no more dropping fasteners or searching for them in the grass.",
  },
  {
    icon: "📐",
    title: "The 3-4-5 Triangle",
    color: "border-indigo-500/30 bg-indigo-950/20",
    tip: "To check if a corner is perfectly square: measure 3ft along one side, 4ft along the other. If the diagonal between those points is exactly 5ft, it's a perfect 90°.",
  },
];

export default function Tips() {
  return (
    <section id="tips" className="py-24 px-6 bg-gradient-to-b from-transparent via-zinc-900/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">
            Expert Advice
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">
            Pro Tips & Tricks
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hard-won wisdom that will save you time, money, and frustration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className={`glass rounded-2xl p-6 border ${tip.color} hover:scale-[1.02] transition-all duration-200 cursor-default`}
            >
              <div className="text-3xl mb-4">{tip.icon}</div>
              <h3 className="text-base font-bold mb-2">{tip.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{tip.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
