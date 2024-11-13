import { Button } from "src/components/ui";
import { Input } from "src/components/ui";
import {
  forgotPasswordInputSchema,
  useForgotPassword,
} from "src/features/auth/api/forgot-pasword";
import { AuthForm } from "../form-auth";

export const ForgotPasswordForm = () => {
  const forgotPassword = useForgotPassword();

  return (
    <AuthForm
      h1="Forgot Password"
      h2="Enter your registered email address, we'll send you a code to reset your password."
      schema={forgotPasswordInputSchema}
      onSubmit={(data) => {
        forgotPassword.mutate(data.email);
      }}
    >
      {({ register, formState }) => (
        <>
          <Input
            className="w-full"
            label="Email address"
            register={register("email")}
            error={formState.errors.email}
          />
          <Button
            size={"lg"}
            className="mt-4"
            type="submit"
          >
            Send OTP
          </Button>
        </>
      )}
    </AuthForm>
  );
};
