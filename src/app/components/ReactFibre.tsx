import React from 'react'

function ReactFibre() {
  return (
    <div style={{  display: 'flex', flexDirection: "column", gap: 10}}>
       <div  style={{ letterSpacing:"1.5px", lineHeight: 2 }}> React Fiber, introduced after React 16, is a complete rewrite of the old reconciliation algorithm (the stack reconciler). It significantly improves the performance and responsiveness of React applications, especially when dealing with complex UI updates, animations, and real-time interactions. Let’s dive deep into how Fiber works and why it’s a game-changer for React developers.
       </div>
       Key Benefits of React Fiber:
       <div style={{ letterSpacing:"1.5px", lineHeight: 2 }}>
Asynchronous Rendering: Fiber allows React to pause and resume work, meaning expensive operations (e.g., heavy computations or animations) can be deferred to optimize UI performance.
Prioritized Work: Tasks can be assigned priorities. For example, animations or network requests can be given higher priority than less critical updates.
Concurrency: Fiber is designed to work asynchronously, enabling non-blocking updates to the DOM. This results in a smoother user experience.
The Two Phases of Fiber Reconciliation
Render Phase:

This is an asynchronous phase where React works to reconcile changes, breaking tasks into smaller units of work.
It can prioritize work, pause it, or even discard tasks if necessary.
The render phase determines the changes required in the Virtual DOM, but no actual DOM changes happen here.
Commit Phase:

In this phase, React applies the updates to the DOM. This is a synchronous process and reflects the final, committed changes.
After this phase, React updates the UI with the most recent changes.
Fibers Data Structures: The Fiber Tree
Fiber uses two trees:

Current Tree: The DOM tree that represents the UI in its most recent state.
Work-in-progress Tree: A tree that is being updated in the render phase.
Each component in React is represented by a fiber (unit of work). The fiber has properties like child, sibling, and return, forming a hierarchical relationship that mirrors the component tree.
</div>
    </div>
  )
}

export default ReactFibre