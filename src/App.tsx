import react, { useEffect, Suspense } from "react";
const Text = react.lazy(() => import("./pages/text"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>...loading</div>}>
        <Text />
      </Suspense>
    </div>
  );
}

export default App;
