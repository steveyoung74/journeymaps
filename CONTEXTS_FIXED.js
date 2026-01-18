      // Context configurations
      const CONTEXTS = {
        journeys: {
          badge: 'JOURNEY INTELLIGENCE PLATFORM',
          headline: React.createElement(React.Fragment, null, 
            "See what your journeys ",
            React.createElement("br"),
            React.createElement("span", { style: { color: 'var(--steel-400)', fontWeight: 600 } }, "really cost")
          ),
          subhead: 'Map operational processes with precision. Capture ground-truth data from the people who do the work. Transform assumptions into actionable insights.',
          icon: '🗺️',
          color: 'var(--steel-500)'
        },
        projects: {
          badge: 'PROJECT INTELLIGENCE PLATFORM',
          headline: React.createElement(React.Fragment, null, 
            "Know what delivery ",
            React.createElement("br"),
            React.createElement("span", { style: { color: 'var(--amber-400)', fontWeight: 600 } }, "really costs")
          ),
          subhead: 'Quantify project work with milestone-based cost tracking. From construction tenders to software implementations, see the true cost of delivery.',
          icon: '📋',
          color: 'var(--amber-500)'
        },
        events: {
          badge: 'EVENT INTELLIGENCE PLATFORM',
          headline: React.createElement(React.Fragment, null, 
            "Understand peak load ",
            React.createElement("br"),
            React.createElement("span", { style: { color: 'var(--success)', fontWeight: 600 } }, "operations")
          ),
          subhead: 'Model one-time or seasonal events with peak capacity planning. From matchday operations to tax season surges, quantify what it takes.',
          icon: '⚡',
          color: 'var(--success)'
        }
      };
