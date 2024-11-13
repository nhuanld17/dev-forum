import { createBrowserRouter } from "react-router-dom";

/**
 * create router component
 * with createBrowserRouter from react-router-dom and with nested components
 * @returns {RouterComponent}
 */
export const createRouter = () =>
  createBrowserRouter(
    [
      {
        path: "",
        /**
         * return component with lazy loading(only load when needed)
         * @returns {Promise<{Component: AppRoot}>}
         */
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
            path: "auth",
            lazy: async () => {
              const { AuthRoot } = await import("src/app/routes/auth/root-authent");
              return { Component: AuthRoot };
            },
            children: [
              {
                path: "",
                lazy: async () => {
                  const { LoginRoute } = await import("src/app/routes/auth/login");
                  return { Component: LoginRoute };
                },
              },
              {
                path: "register",
                lazy: async () => {
                  const { RegisterRoute } = await import("src/app/routes/auth/register");
                  return { Component: RegisterRoute };
                },
              },
              {
                path: "forgot-password",
                lazy: async () => {
                  const { ForgotPasswordRoute } = await import("src/app/routes/auth/forgot-password");
                  return { Component: ForgotPasswordRoute };
                },
              },
              {
                path: "reset-password",
                lazy: async () => {
                  const { ResetPasswordRoute } = await import("src/app/routes/auth/reset-password");
                  return { Component: ResetPasswordRoute };
                },
              },
            ],
          },
          {
            path: "auth/otp",
            lazy: async () => {
              const { OtpRoute } = await import("src/app/routes/auth/otp");
              return { Component: OtpRoute };
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
    ],
    {
      future: {
        v7_skipActionErrorRevalidation: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,   
      },
    }
  );
