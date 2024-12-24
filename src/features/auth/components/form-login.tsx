import { Input} from "src/components/ui/form";
import { Link } from "src/components/ui/link/link";
import { loginInputSchema, useLogin } from "src/features/auth/api/login";
import { AuthForm } from "../form-auth";
import { Button } from 'src/components/ui';
import { LocalIcon } from "src/assets/icons";
export const LoginForm = () => {
    const fetchLogin = useLogin();

    return (
        <AuthForm
            h1="Sign In"
            schema={loginInputSchema}
            onSubmit={(data) => {
                fetchLogin.mutate(data);
            }}
        >
            {({ register, formState }) => (
                <div className="flex flex-col gap-4">
                    {/* Liên kết tạo tài khoản */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                        <p className="text-[16px] text-gray-600">Don’t have an account?</p>
                        <Link className="text-[#0A65CC] font-medium" to={"/auth/register"}>
                            Create Account
                        </Link>
                    </div>
                    {/* Input Email */}
                    <Input
                        className="w-full sm:w-[400px] lg:w-[536px] h-[48px]"
                        label="Email"
                        register={register("email")}
                        error={formState.errors.email}
                    />
                    {/* Input Password */}
                    <Input
                        className="w-full sm:w-[400px] lg:w-[536px] h-[48px]"
                        label="Password"
                        type="password"
                        register={register("password")}
                        error={formState.errors.password}
                    />
                    {/* Remember Me và Forgot Password */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            <span>Remember Me</span>
                        </label>
                        <Link className="text-[#0A65CC] font-medium" to={"/auth/forgot-password"}>
                            Forgot Password?
                        </Link>
                    </div>
                    {/* Nút Login */}
                    <Button
                        size="lg"
                        className="mt-4 w-full sm:w-auto"
                        type="submit"
                        endIcon={LocalIcon({
                            iconName: "fi_arrow_right",
                            className: "w-[24px] h-[24px]",
                        })}
                    >
                        Login
                    </Button>
                </div>
            )}
        </AuthForm>
    );
};
