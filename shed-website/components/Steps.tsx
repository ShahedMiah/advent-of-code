"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Plan & Obtain Permits",
    duration: "1-2 weeks",
    difficulty: "Easy",
    icon: "📋",
    color: "from-purple-900/40 to-purple-800/20",
    accent: "border-purple-500",
    description:
      "Before breaking ground, check your local zoning laws and HOA rules. Most sheds under 200 sq ft don't require a permit, but verify this for your area.",
    substeps: [
      "Measure and mark your shed location with stakes and string",
      "Check setback requirements from property lines (usually 5-10ft)",
      "Visit or call your local building department",
      "Submit permit application with your shed plans if required",
      "Wait for permit approval before starting construction",
    ],
    warning: "Skipping permits can result in fines or being forced to demolish the shed.",
  },
  {
    number: "02",
    title: "Site Preparation",
    duration: "Half day",
    difficulty: "Easy",
    icon: "⛏️",
    color: "from-green-900/40 to-green-800/20",
    accent: "border-green-500",
    description:
      "A properly prepared site ensures your shed stays level and dry for years. Take your time here — it makes everything else easier.",
    substeps: [
      "Clear vegetation, rocks, and debris from the area",
      "Excavate 4-6 inches of topsoil from the footprint",
      "Lay landscape fabric to prevent weed growth",
      "Add and compact 4 inches of gravel for drainage",
      "Check that the area is level (within 1 inch across the width)",
    ],
    warning: null,
  },
  {
    number: "03",
    title: "Set the Foundation",
    duration: "Full day",
    difficulty: "Medium",
    icon: "🏛️",
    color: "from-stone-800/40 to-stone-700/20",
    accent: "border-stone-400",
    description:
      "We're using a skid or post foundation — no concrete slab needed for most sheds. This method allows the shed to be moved if necessary.",
    substeps: [
      "Dig 4 holes, 24 inches deep, at each corner",
      "Pour 6 inches of concrete into each hole",
      "Set post anchors in wet concrete, aligned with string lines",
      "Wait 24-48 hours for concrete to cure",
      "Set 4x4 posts in anchors and check for level and plumb",
    ],
    warning: "Footings must be below the frost line in cold climates. Check your local frost depth.",
  },
  {
    number: "04",
    title: "Build the Floor Frame",
    duration: "3-4 hours",
    difficulty: "Medium",
    icon: "📐",
    color: "from-amber-900/40 to-amber-800/20",
    accent: "border-amber-500",
    description:
      "The floor frame (rim joists + interior joists) creates the skeleton that your plywood floor will sit on.",
    substeps: [
      "Cut rim joists to form the outer rectangle (10ft x 12ft)",
      "Square the frame using the 3-4-5 triangle method",
      "Install interior joists 16 inches on center",
      "Add joist hangers for all interior joists",
      "Attach frame securely to the foundation posts",
    ],
    warning: null,
  },
  {
    number: "05",
    title: "Install the Subfloor",
    duration: "2 hours",
    difficulty: "Easy",
    icon: "🟫",
    color: "from-yellow-900/40 to-yellow-800/20",
    accent: "border-yellow-500",
    description:
      "The 3/4\" plywood subfloor goes down over the joists. Apply construction adhesive and screws for a solid, squeak-free floor.",
    substeps: [
      "Apply construction adhesive to the top of each joist",
      "Lay the first sheet of 3/4\" plywood in a corner",
      "Stagger the seams of subsequent sheets by half a sheet",
      "Drive 3\" screws every 8 inches along joists",
      "Trim any overhanging edges with a circular saw",
    ],
    warning: null,
  },
  {
    number: "06",
    title: "Frame the Walls",
    duration: "Full day",
    difficulty: "Medium",
    icon: "🏗️",
    color: "from-orange-900/40 to-orange-800/20",
    accent: "border-orange-500",
    description:
      "Frame each wall flat on the floor, then tilt it up into position. Leave rough openings for the door and windows as you go.",
    substeps: [
      "Lay out wall plates (top & bottom) and mark stud positions every 16\" OC",
      "Cut studs to length (adjust for door/window rough openings)",
      "Nail or screw studs between plates",
      "Add double studs (king studs + jack studs) around openings",
      "Tilt walls up, brace temporarily, and nail to floor frame",
      "Plumb and square walls before adding permanent bracing",
    ],
    warning: "Keep walls plumb and square — small errors here become big problems with the roof.",
  },
  {
    number: "07",
    title: "Build the Roof Structure",
    duration: "Full day",
    difficulty: "Hard",
    icon: "🏠",
    color: "from-red-900/40 to-red-800/20",
    accent: "border-red-500",
    description:
      "A simple gable roof with a 4:12 pitch. Cut a rafter template first, test the fit, then cut all rafters to match.",
    substeps: [
      "Calculate rafter length using the Pythagorean theorem",
      "Cut the bird's mouth (notch that sits on the wall plate)",
      "Test-fit one rafter pair, adjust as needed",
      "Cut all rafters using the template",
      "Install ridge board and hang all rafter pairs",
      "Add hurricane ties to each rafter for wind resistance",
      "Install gable end framing",
    ],
    warning: "This is the most complex step. Consider having a helper for tilt-up operations.",
  },
  {
    number: "08",
    title: "Install Sheathing & Siding",
    duration: "Full day",
    difficulty: "Medium",
    icon: "🪵",
    color: "from-lime-900/40 to-lime-800/20",
    accent: "border-lime-500",
    description:
      "Sheathe the roof with OSB first, then cover the walls with T1-11 siding. Work from bottom to top on the walls.",
    substeps: [
      "Nail OSB sheathing to roof rafters, starting at eaves",
      "Install drip edge along the eaves before felt",
      "Staple 15lb felt paper horizontally, overlapping 6 inches",
      "Install drip edge on rake edges over the felt",
      "Hang T1-11 siding panels vertically on walls",
      "Caulk all seams and around openings",
    ],
    warning: null,
  },
  {
    number: "09",
    title: "Shingle the Roof",
    duration: "Half day",
    difficulty: "Medium",
    icon: "🏚️",
    color: "from-slate-800/40 to-slate-700/20",
    accent: "border-slate-400",
    description:
      "Start from the bottom and work up, overlapping each row. Nail each shingle with 4 nails and keep rows straight using chalk lines.",
    substeps: [
      "Snap horizontal chalk lines every 5 inches as guides",
      "Nail starter strip along the bottom edge",
      "Lay first course of shingles along the starter strip",
      "Stagger subsequent courses by 6 inches",
      "Continue up to the ridge, trimming at edges",
      "Cut and install ridge cap shingles",
    ],
    warning: null,
  },
  {
    number: "10",
    title: "Install Door, Windows & Finish",
    duration: "Full day",
    difficulty: "Medium",
    icon: "🚪",
    color: "from-cyan-900/40 to-cyan-800/20",
    accent: "border-cyan-500",
    description:
      "The finishing touches: hang the door, install windows, add trim, caulk all gaps, and apply paint or stain for years of protection.",
    substeps: [
      "Set the door frame (pre-hung or build your own)",
      "Install windows using shims to level and plumb",
      "Add exterior trim around door, windows, and corners",
      "Caulk all seams with exterior-grade caulk",
      "Apply primer coat to all bare wood",
      "Apply 2 finish coats of exterior paint or stain",
      "Install door hardware, hinges, and lock",
    ],
    warning: null,
  },
];

export default function Steps() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="steps" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-yellow-500 text-sm font-semibold tracking-widest uppercase">
            The Build
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-2 mb-4">
            Step-by-Step Guide
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow these 10 steps in order. Click each step to expand the
            detailed instructions.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-10 glass rounded-2xl p-4 border border-white/10">
          <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
            <span>Your progress</span>
            <span>{activeStep !== null ? activeStep + 1 : 0} / {steps.length} steps viewed</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full transition-all duration-500"
              style={{
                width: `${activeStep !== null ? ((activeStep + 1) / steps.length) * 100 : 0}%`,
              }}
            />
          </div>
        </div>

        <div className="space-y-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`step-card glass rounded-2xl border overflow-hidden cursor-pointer ${
                activeStep === i ? step.accent : "border-white/10"
              } bg-gradient-to-br ${step.color}`}
              onClick={() => setActiveStep(activeStep === i ? null : i)}
            >
              {/* Header */}
              <div className="flex items-center gap-4 p-5">
                <div className="text-4xl font-black text-white/10 select-none min-w-[3rem] text-center">
                  {step.number}
                </div>
                <span className="text-2xl">{step.icon}</span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <div className="flex gap-3 mt-1">
                    <span className="text-xs text-gray-400">⏱ {step.duration}</span>
                    <span
                      className={`text-xs font-semibold ${
                        step.difficulty === "Easy"
                          ? "text-green-400"
                          : step.difficulty === "Medium"
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}
                    >
                      {step.difficulty === "Easy" ? "●" : step.difficulty === "Medium" ? "●●" : "●●●"}{" "}
                      {step.difficulty}
                    </span>
                  </div>
                </div>
                <div
                  className={`text-gray-400 transition-transform duration-300 ${
                    activeStep === i ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </div>
              </div>

              {/* Expanded content */}
              {activeStep === i && (
                <div className="px-5 pb-6 border-t border-white/10 pt-5">
                  <p className="text-gray-300 mb-5">{step.description}</p>

                  <h4 className="text-sm font-semibold text-yellow-400 uppercase tracking-wider mb-3">
                    Instructions
                  </h4>
                  <ol className="space-y-3">
                    {step.substeps.map((sub, j) => (
                      <li key={j} className="flex gap-3 text-sm text-gray-300">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/20 text-yellow-400 text-xs flex items-center justify-center font-bold">
                          {j + 1}
                        </span>
                        {sub}
                      </li>
                    ))}
                  </ol>

                  {step.warning && (
                    <div className="mt-5 flex gap-3 bg-red-950/30 border border-red-500/30 rounded-xl p-4">
                      <span className="text-xl">⚠️</span>
                      <p className="text-sm text-red-300">{step.warning}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
