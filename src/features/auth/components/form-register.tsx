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
            h1="Create account."
            schema={registerInputSchema}
            onSubmit={(data) => {
                register.mutate(data);
            }}
        >
            {({ register, formState }) => (
                <>
                    {/* Dropdown for role */}
                    <div className="flex justify-end">  
                        <select
                            id="role"
                            {...register("role")}
                            className=" border border-primary/30 block w-[200px] h-[50px] rounded border border-primary/30 p-4 text-base focus-visible:outline-none focus-visible:ring-1"
                        >
                            <option value="candidate">Candidate</option>
                            <option value="employer">Employer</option>
                        </select>
                        {formState.errors.role && (
                            <p className="mt-2 text-sm text-red-600">
                                {formState.errors.role.message}
                            </p>
                        )}
                    </div>

                    {/* Other Inputs */}
                    <div className="flex flex-row gap-5">
                        <Input
                            className="w-[258px] h-[48px]"
                            label="First Name"
                            register={register("firstName")}
                            error={formState.errors.firstName}
                        />
                        <Input
                            className="w-[258px] h-[48px]"
                            label="Last Name"
                            register={register("lastName")}
                            error={formState.errors.lastName}
                        />
                    </div>
                    <Input
                        className="w-[536px] h-[48px]"
                        label="Email Address"
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
                    <Input
                        className="w-[536px] h-[48px]"
                        label="Confirm Password"
                        type="password"
                        register={register("password")}
                        error={formState.errors.password}
                    />
                    <label className="flex items-center gap-2">
                        <span className="text-gray-600">
                            {"I've read and agree with your "}
                            <Link
                                to={"#"}
                                className="font-bold text-cyan-600"
                            >
                                Terms & Services
                            </Link>
                        </span>
                    </label>
                    <Button
                        size={"lg"}
                        className="mt-4"
                        type="submit"
                    >
                        Register
                    </Button>
                    <div className="flex items-center justify-center gap-1">
                        {"Already have an account? "}
                        <Link to={"/auth"}>Login</Link>
                    </div>
                </>
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
