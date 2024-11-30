  import { createBrowserRouter } from "react-router-dom";
  import { checkAuth, autoLogin } from "./routes/auth/check-auth";
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
              loader: autoLogin,
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
                  },
                },
              ]
            },
            {
              //candidate
              path: "candidate",
              loader: checkAuth,
              lazy: async () => {
                const { CandidateRoot } = await import("src/app/routes/app/root-candidate");
                return { Component: CandidateRoot };
              },
              children: [
                {
                  path: "",
                  lazy: async () => {
                    const { FindJobRoute } = await import("src/app/routes/app/private/candidate/find-job");
                    return { Component: FindJobRoute };
                  }
                },
                {
                  path: "job-details/:id",
                  lazy: async () => {
                    const { JobdetailRoute } = await import("src/app/routes/app/private/candidate/job-details");
                    return { Component: JobdetailRoute };
                  },
                },
                {
                  path: "employers",
                  lazy: async () => {
                    const { FindCompanyRoute } = await import("src/app/routes/app/private/candidate/find-employer");
                    return { Component: FindCompanyRoute };
                  },
                },
                {
                  path: "employers/details/:id",
                  lazy: async () => {
                    const { CompanyDetailsRoute } = await import("src/app/routes/app/private/candidate/employer-details");
                    return { Component: CompanyDetailsRoute };
                  },
                },
                {
                  //profile
                  path: "profile",
                  lazy: async () => {
                    const { ProfileRoute } = await import("src/app/routes/app/private/candidate/profile");
                    return { Component: ProfileRoute }
                  },
                  children: [
                    {
                      path: "",
                      lazy: async () => {
                        const { OverviewRoute } = await import("src/app/routes/app/private/candidate/overview");
                        return { Component: OverviewRoute }
                      },
                    },
                    {
                      path: "applied-jobs",
                      lazy: async () => {
                        const { ApplyJobRoute } = await import("src/app/routes/app/private/candidate/apply-job");
                        return { Component: ApplyJobRoute }
                      },
                    },
                    {
                      path: "favorite-jobs",
                      lazy: async () => {
                        const { FavoriteJobRoute } = await import("src/app/routes/app/private/candidate/favorite-job");
                        return { Component: FavoriteJobRoute }
                      },
                    },
                    {
                      //settings
                      path: "settings",
                      lazy: async () => {
                        const { SettingRoute } = await import("src/app/routes/app/private/candidate/setting");
                        return { Component: SettingRoute }
                      },
                      children: [
                        {
                          path: "",
                          lazy: async () => {
                            const { PersonalRoute } = await import("src/app/routes/app/private/candidate/personal");
                            return { Component: PersonalRoute }
                          },
                        },
                        {
                          path: "profile",
                          lazy: async () => {
                            const { ProfileSettingRoute } = await import("src/app/routes/app/private/candidate/profile-setting");
                            return { Component: ProfileSettingRoute }
                          },
                        },
                        {
                          path: "social-links",
                          lazy: async () => {
                            const { SocialLinkRoute } = await import("src/app/routes/app/private/candidate/social-link");
                            return { Component: SocialLinkRoute }
                          },
                        },
                        {
                          path: "account-setting",
                          lazy: async () => {
                            const { AccountSettingRoute } = await import("src/app/routes/app/private/candidate/account-setting");
                            return { Component: AccountSettingRoute }
                          },
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              //employer
              path: "employer",
              loader: checkAuth,
              lazy: async () => {
                const { EmployerRoot } = await import("src/app/routes/app/root-employer");
                return { Component: EmployerRoot };
              },
              children: [
                {
                  path: "",
                  lazy: async () => {
                    const { FindCandidateRoute } = await import("src/app/routes/app/private/employer/find-candidate");
                    return { Component: FindCandidateRoute };
                  }
                },
                {
                  //profile
                  path: "profile",
                  lazy: async () => {
                    const { ProfileRoute } = await import("src/app/routes/app/private/employer/profile");
                    return { Component: ProfileRoute }
                  },
                  children: [
                    {
                      path: "",
                      lazy: async () => {
                        const { OverviewRoute } = await import("src/app/routes/app/private/employer/overview");
                        return { Component: OverviewRoute }
                      },
                    },
                    {
                      path: "posted-jobs",
                      lazy: async () => {
                        const { PostedJobRoute } = await import("src/app/routes/app/private/employer/posted-job");
                        return { Component: PostedJobRoute }
                      },
                    },
                    {
                      path: "my-jobs",
                      lazy: async () => {
                        const { MyJobRoute } = await import("src/app/routes/app/private/employer/my-job");
                        return { Component: MyJobRoute }
                      },
                    },
                    {
                      path: "settings",
                      lazy: async () => {
                        const { SettingRoute } = await import("src/app/routes/app/private/employer/setting");
                        return { Component: SettingRoute }
                      },
                      children: [
                        {
                          path: "",
                          lazy: async () => {
                            const { CompanyInfoRoute } = await import("src/app/routes/app/private/employer/company-info");
                            return { Component: CompanyInfoRoute }
                          },
                        },
                        {
                          path: "founding-info",
                          lazy: async () => {
                            const { FoundingInfoRoute } = await import("src/app/routes/app/private/employer/founding-info");
                            return { Component: FoundingInfoRoute }
                          },
                        },
                        {
                          path: "social-links",
                          lazy: async () => {
                            const { SocialLinkRoute } = await import("src/app/routes/app/private/employer/social-link");
                            return { Component: SocialLinkRoute }
                          },
                        },
                        {
                          path: "account-setting",
                          lazy: async () => {
                            const { ProfileSettingRoute } = await import("src/app/routes/app/private/employer/profile-setting");
                            return { Component: ProfileSettingRoute }
                          }
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
    );
