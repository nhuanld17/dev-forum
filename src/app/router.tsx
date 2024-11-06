import { createBrowserRouter } from "react-router-dom";

export const createRouter = () =>
  createBrowserRouter([
    {
      path: "",
      lazy: async () => {
        const { AppRouterRoot } = await import("src/app/routes/root");
        return { Component: AppRouterRoot };
      },
      children: [
        {
          path: "",
          lazy: async () => {
            const { AppRoot } = await import("src/app/routes/app/root");
            return { Component: AppRoot };
          },
        },
        {
          path: "*",
          lazy: async () => {
            const { NotFoundRoute } = await import("src/app/routes/not-found");
            return { Component: NotFoundRoute };
          },
        },
      ],
    },
  ]);
