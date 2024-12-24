import { useNavigate } from "react-router-dom";
import { LocalIcon } from "src/assets/icons";
import { Button } from "src/components/ui";
import { Input } from "src/components/ui/form";
import { Link } from "react-router-dom";
import {
    registerInputSchema,
    useRegister,
} from "../api";
import { AuthForm } from "../form-auth";
import { AlertOverlay } from "src/components/ui";

export const RegisterForm = () => {
    const register = useRegister(<RegisterSuccessAlert />);

    return (
        <AuthForm
            h1="Create Account"
            schema={registerInputSchema}
            onSubmit={(data) => {
                register.mutate(data);
            }}
        >
            {({ register, formState }) => (
                <div className="flex flex-col gap-4">
                    {/* Dropdown chọn vai trò */}
                    <div className="flex justify-end">
                        <select
                            id="role"
                            {...register("role")}
                            className="border border-primary/30 block w-full sm:w-[200px] lg:w-[300px] h-[50px] rounded p-4 text-base focus-visible:outline-none focus-visible:ring-1"
                        >
                            <option value="ROLE_CANDIDATE">Candidate</option>
                            <option value="ROLE_COMPANY">Employer</option>
                        </select>
                        {formState.errors.role && (
                            <p className="mt-2 text-sm text-red-600">
                                {formState.errors.role.message}
                            </p>
                        )}
                    </div>
                    {/* Input khác */}
                    <Input
                        className="w-full sm:w-[400px] lg:w-[536px] h-[48px]"
                        label="Full Name"
                        register={register("fullName")}
                        error={formState.errors.fullName}
                    />
                    <Input
                        className="w-full sm:w-[400px] lg:w-[536px] h-[48px]"
                        label="Email Address"
                        register={register("email")}
                        error={formState.errors.email}
                    />
                    <Input
                        className="w-full sm:w-[400px] lg:w-[536px] h-[48px]"
                        label="Password"
                        type="password"
                        register={register("password")}
                        error={formState.errors.password}
                    />
                    <Input
                        className="w-full sm:w-[400px] lg:w-[536px] h-[48px]"
                        label="Confirm Password"
                        type="password"
                        register={register("password")}
                        error={formState.errors.password}
                    />
                    <label className="flex items-center gap-2">
                        <span className="text-gray-600">
                            {"I've read and agree with your "}
                            <Link to={"#"} className="font-bold text-cyan-600">
                                Terms & Services
                            </Link>
                        </span>
                    </label>
                    {/* Nút đăng ký */}
                    <Button
                        size="lg"
                        className="mt-4 w-full sm:w-auto"
                        type="submit"
                    >
                        Register
                    </Button>
                    {/* Liên kết login */}
                    <div className="flex items-center justify-center gap-1">
                        {"Already have an account? "}
                        <Link to={"/auth"}>Login</Link>
                    </div>
                </div>
            )}
        </AuthForm>
    );
};



const RegisterSuccessAlert = () => {
    const navigate = useNavigate();

    return (
        <AlertOverlay
            title="Account Created"
            description="Your account has been created"
            icon={
                <LocalIcon
                    iconName="successful"
                    height={"auto"}
                    width={"auto"}
                />
            }
            primaryOption={{
                text: "Back to login",
                onClick: () => {
                    navigate("/auth");
                },
            }}
        />
    );
};
