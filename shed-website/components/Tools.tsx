const toolGroups = [
  {
    category: "Power Tools",
    icon: "⚡",
    tools: [
      { name: "Circular Saw", icon: "🪚", essential: true, desc: "Cutting lumber to length" },
      { name: "Drill/Driver", icon: "🔧", essential: true, desc: "Driving screws & drilling holes" },
      { name: "Jigsaw", icon: "🪛", essential: false, desc: "Curved cuts for vents/windows" },
      { name: "Miter Saw", icon: "🔨", essential: false, desc: "Precise angle cuts for trim" },
      { name: "Nail Gun", icon: "🔫", essential: false, desc: "Speeds up framing significantly" },
    ],
  },
  {
    category: "Hand Tools",
    icon: "🤝",
    tools: [
      { name: "Hammer", icon: "🔨", essential: true, desc: "Nailing & adjustments" },
      { name: "Speed Square", icon: "📐", essential: true, desc: "Checking 90° angles" },
      { name: "Level (4ft)", icon: "📏", essential: true, desc: "Keeping walls plumb" },
      { name: "Tape Measure", icon: "📏", essential: true, desc: "Measuring everything" },
      { name: "Chalk Line", icon: "🖊️", essential: true, desc: "Marking long straight lines" },
      { name: "Utility Knife", icon: "🔪", essential: true, desc: "Scoring roofing felt & shingles" },
    ],
  },
  {
    category: "Layout & Safety",
    icon: "🦺",
    tools: [
      { name: "String Line & Stakes", icon: "🪢", essential: true, desc: "Laying out foundation" },
      { name: "Safety Glasses", icon: "👓", essential: true, desc: "Eye protection always" },
      { name: "Work Gloves", icon: "🧤", essential: true, desc: "Protect your hands" },
      { name: "Hearing Protection", icon: "🎧", essential: true, desc: "Power tool noise" },
      { name: "Ladders (2)", icon: "🪜", essential: true, desc: "Roof & wall work" },
    ],
  },
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 px-6 relative bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">
            Gear Up
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">
            Tools Required
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            You don&apos;t need every tool — but having the right ones makes the
            job faster, safer, and more enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {toolGroups.map((group) => (
            <div key={group.category} className="glass rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{group.icon}</span>
                <h3 className="text-xl font-bold">{group.category}</h3>
              </div>
              <div className="space-y-4">
                {group.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-2xl">{tool.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold">{tool.name}</span>
                        {tool.essential && (
                          <span className="text-xs bg-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded-full">
                            Essential
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{tool.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 glass rounded-2xl p-6 border border-blue-500/20 bg-blue-950/20">
          <p className="text-center text-gray-300">
            <span className="text-blue-400 font-bold">💡 Tip:</span> Many home
            improvement stores offer tool rental. Renting a nail gun can cut
            your framing time in half without the purchase cost.
          </p>
        </div>
      </div>
    </section>
  );
}
