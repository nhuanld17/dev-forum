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
                <>
                    <div className="flex flex-row gap-4  items-center">
                        <p className="text-[16px] text-gray-600">Don’t have account</p>
                        <Link className="text-[#0A65CC] font-medium" to={"/auth/register"}>Create Account</Link>
                    </div>
                    <Input
                        className="w-[536px] h-[48px]"
                        label="Email"
                        register={register("email")}
                        error={formState.errors.email}
                    />
                    <Input
                        className="w-[536px] h-[48px]"
                        label="Password"
                        type="password"
                        register={register("password")}
                        error={formState.errors.password}
                    />
                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2">
                            Remember Me
                        </label>
                        <Link className="text-[#0A65CC] font-medium" to={"/auth/forgot-password"}>Forgot Password?</Link>
                    </div>
                    <Button
                        size={"lg"}
                        className="mt-4"
                        type="submit"
                        endIcon={LocalIcon({ iconName: "fi_arrow_right", className: "w-[24px] h-[24px]" })}
                    >
                        Login
                    </Button>
                </>
            )}
        </AuthForm>
    );
};
