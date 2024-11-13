// import { AppProvider } from "src/app/app-provider";

// import { useMemo } from "react";
// import { RouterProvider } from "react-router-dom";
// import { createRouter } from "src/app/router";

// /**
//  * fix re-render issue (because of createRouter() is called every time AppRouter is rendered)
//  * no dependence change => createRouter() is only actived once => no re-render
//  * @returns {JSX.Element}
//  */
// const AppRouter = () => {
//     const router = useMemo(() => createRouter(), []);
//     // provide router to RouterProvider
//     return <RouterProvider router={router}/>;
// };

// /**
//  * create default App component 
//  * @returns {JSX.Element}
//  */
// function App() {
//     return (
//         <AppProvider>
//             <AppRouter />
//         </AppProvider>
//     );
// }

// export default App;

import { AppProvider } from "src/app/app-provider";

import { useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "src/app/router";

const AppRouter = () => {
  const router = useMemo(() => createRouter(), []);
  return <RouterProvider router={router} />;
};

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
