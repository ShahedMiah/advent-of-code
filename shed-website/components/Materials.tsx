"use client";

const categories = [
  {
    name: "Lumber",
    icon: "🪵",
    color: "from-amber-900/40 to-amber-800/20",
    border: "border-amber-700/30",
    items: [
      { name: '4x4 Posts (10ft)', qty: '4', note: 'Pressure-treated' },
      { name: '2x6 Joists (10ft)', qty: '12', note: 'Floor framing' },
      { name: '2x4 Studs (8ft)', qty: '30', note: 'Wall framing' },
      { name: '2x6 Rafters (12ft)', qty: '10', note: 'Roof framing' },
      { name: '1x6 Fascia Boards', qty: '4', note: 'Trim & finish' },
    ],
  },
  {
    name: "Sheathing & Decking",
    icon: "📦",
    color: "from-orange-900/40 to-orange-800/20",
    border: "border-orange-700/30",
    items: [
      { name: 'Plywood 3/4" (4x8)', qty: '8 sheets', note: 'Subfloor' },
      { name: 'OSB 7/16" (4x8)', qty: '16 sheets', note: 'Wall sheathing' },
      { name: 'OSB 7/16" (4x8)', qty: '10 sheets', note: 'Roof decking' },
      { name: 'T1-11 Siding', qty: '12 sheets', note: 'Exterior siding' },
    ],
  },
  {
    name: "Roofing",
    icon: "🏗️",
    color: "from-red-900/40 to-red-800/20",
    border: "border-red-700/30",
    items: [
      { name: 'Asphalt Shingles', qty: '3 bundles', note: '25-year rated' },
      { name: 'Roofing Felt (15lb)', qty: '1 roll', note: 'Underlayment' },
      { name: 'Drip Edge Metal', qty: '40ft', note: 'Eave protection' },
      { name: 'Ridge Cap Shingles', qty: '1 bundle', note: 'Peak coverage' },
    ],
  },
  {
    name: "Concrete & Foundation",
    icon: "🧱",
    color: "from-stone-800/40 to-stone-700/20",
    border: "border-stone-600/30",
    items: [
      { name: 'Concrete Mix (80lb)', qty: '6 bags', note: 'Post footings' },
      { name: 'Gravel (pea gravel)', qty: '0.5 cu yd', note: 'Drainage layer' },
      { name: 'Landscape Fabric', qty: '1 roll', note: 'Weed barrier' },
    ],
  },
  {
    name: "Hardware",
    icon: "🔩",
    color: "from-zinc-800/40 to-zinc-700/20",
    border: "border-zinc-600/30",
    items: [
      { name: 'Galvanized Joist Hangers', qty: '24', note: 'Floor framing' },
      { name: 'Hurricane Ties', qty: '20', note: 'Rafter connections' },
      { name: 'Post Base Brackets', qty: '4', note: 'Anchor posts' },
      { name: '3" Deck Screws', qty: '5 lbs', note: 'General fastening' },
      { name: '16d Framing Nails', qty: '5 lbs', note: 'Framing' },
    ],
  },
  {
    name: "Finishing",
    icon: "🎨",
    color: "from-blue-900/40 to-blue-800/20",
    border: "border-blue-700/30",
    items: [
      { name: 'Exterior Paint/Stain', qty: '2 gallons', note: 'UV resistant' },
      { name: 'Caulk (exterior)', qty: '3 tubes', note: 'Weatherproofing' },
      { name: 'Door Hardware Kit', qty: '1 set', note: 'Hinges & handle' },
      { name: 'Window Kit (24x36)', qty: '2', note: 'With screens' },
    ],
  },
];

export default function Materials() {
  return (
    <section id="materials" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">
            What You Need
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">
            Materials List
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to build a 10&apos;x12&apos; shed. Quantities
            include 10% overage for waste and mistakes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className={`glass rounded-2xl p-6 border ${cat.border} bg-gradient-to-br ${cat.color} hover:scale-[1.02] transition-transform duration-200`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{cat.icon}</span>
                <h3 className="text-lg font-bold">{cat.name}</h3>
              </div>
              <div className="space-y-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between gap-2"
                  >
                    <div>
                      <p className="text-sm font-medium text-white">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">{item.note}</p>
                    </div>
                    <span className="text-yellow-400 text-sm font-bold whitespace-nowrap">
                      {item.qty}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cost estimate banner */}
        <div className="mt-10 glass rounded-2xl p-6 border border-yellow-500/20 bg-gradient-to-r from-yellow-950/30 to-amber-950/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-yellow-400">
                💰 Estimated Total Cost
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                Prices vary by region and season. Always get multiple quotes.
              </p>
            </div>
            <div className="flex gap-8 text-center">
              <div>
                <div className="text-2xl font-black text-white">$800</div>
                <div className="text-xs text-gray-400">Budget Build</div>
              </div>
              <div>
                <div className="text-2xl font-black text-yellow-400">$1,400</div>
                <div className="text-xs text-gray-400">Average Build</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white">$2,200</div>
                <div className="text-xs text-gray-400">Premium Build</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
