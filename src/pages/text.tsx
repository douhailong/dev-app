import react, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loginAction, renameAction } from "../store/moudle/user";

function Text() {
  const distpach = useDispatch();
  const selector = useSelector((store: any) => store.user);

  useEffect(() => {
    console.log(selector);
  }, [selector]);
  console.log("app app app");
  return (
    <div className="App">
      <Suspense fallback={<div>...loading</div>}>
        <button
          onClick={() => {
            distpach(loginAction());
          }}
        >
          Distpach Login
        </button>
        <button
          onClick={() => {
            distpach(renameAction({ newName: "ss" }));
          }}
        >
          Distpach Rename
        </button>
        <div className="w-20 h-20">components</div>
      </Suspense>
    </div>
  );
}

export default Text;
