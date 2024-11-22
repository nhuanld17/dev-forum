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
          //dashboard
          {
            path: "",
            lazy: async () => {
              const { AppRoot } = await import("src/app/routes/app/root");
              return { Component: AppRoot };
            },
            children: [
              {
                path: "",
                lazy: async () => {
                  const { HomeRoute } = await import("src/app/routes/app/public/home");
                  return { Component: HomeRoute };
                }
              }
            ]
          },
          {
            //candidate
            path: "/candidate",
            lazy: async () => {
              const { CandidateRoot } = await import("src/app/routes/app/root-candidate");
              return { Component: CandidateRoot };
            },
            children: [
              {
                //profile
                path: "/candidate/profile",
                lazy: async () => {
                  const { ProfileRoute } = await import("src/app/routes/app/private/candidate/profile");
                  return {Component: ProfileRoute}
                },
                children:[
                  {
                    path: "/candidate/profile",
                    lazy: async () => {
                      const { OverviewRoute } = await import("src/app/routes/app/private/candidate/overview");
                      return {Component: OverviewRoute}
                    },
                  },
                  {
                    path: "/candidate/profile/applied-jobs",
                    lazy: async () => {
                      const { ApplyJobRoute } = await import("src/app/routes/app/private/candidate/apply-job");
                      return {Component: ApplyJobRoute}
                    },
                  },
                  {
                    path: "/candidate/profile/favorite-jobs",
                    lazy: async () => {
                      const { FavoriteJobRoute } = await import("src/app/routes/app/private/candidate/favorite-job");
                      return {Component: FavoriteJobRoute}
                    },
                  },
                  {
                    //settings
                    path: "/candidate/profile/settings",
                    lazy: async () => {
                      const { SettingRoute } = await import("src/app/routes/app/private/candidate/setting");
                      return {Component: SettingRoute}
                    },
                    children:[
                      {
                        path: "/candidate/profile/settings",
                        lazy: async () => {
                          const { PersonalRoute } = await import("src/app/routes/app/private/candidate/personal");
                          return {Component: PersonalRoute}
                        },
                      },
                      {
                        path: "/candidate/profile/settings/profile",
                        lazy: async () => {
                          const { ProfileSettingRoute } = await import("src/app/routes/app/private/candidate/profile-setting");
                          return {Component: ProfileSettingRoute}
                        },
                      },
                      {
                        path: "/candidate/profile/settings/social-links",
                        lazy: async () => {
                          const { SocialLinkRoute } = await import("src/app/routes/app/private/candidate/social-link");
                          return {Component: SocialLinkRoute}
                        },
                      },
                      {
                        path: "/candidate/profile/settings/account-setting",
                        lazy: async () => {
                          const { AccountSettingRoute } = await import("src/app/routes/app/private/candidate/account-setting");
                          return {Component: AccountSettingRoute}
                        },
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            //authentications
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
            //otp
            path: "auth/otp",
            lazy: async () => {
              const { OtpRoute } = await import("src/app/routes/auth/otp");
              return { Component: OtpRoute };
            },
          },
          {
            //not found
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