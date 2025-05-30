import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import type { FC } from "react";

const SignInPage: FC = function () {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center px-4 py-12"
      style={{
        backgroundImage: "url('/images/authentication/bg-image.jpg')",
      }}
    >
      <div className="w-full max-w-md bg-white/40 p-8 backdrop-blur-md dark:bg-gray-900/40">
        <div className="mb-6 text-center">
          <img
            alt="Flowbite logo"
            src="https://flowbite.com/docs/images/logo.svg"
            className="mx-auto h-12"
          />
          <h1 className="mt-4 text-2xl font-bold dark:text-white md:text-3xl">
            Sign In
          </h1>
        </div>
        <form>
          <div className="mb-4 flex flex-col gap-y-3">
            <Label htmlFor="email">Your email</Label>
            <TextInput
              id="email"
              name="email"
              placeholder="name@company.com"
              type="email"
            />
          </div>
          <div className="mb-6 flex flex-col gap-y-3">
            <Label htmlFor="password">Your password</Label>
            <TextInput
              id="password"
              name="password"
              placeholder="••••••••"
              type="password"
            />
          </div>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-x-3">
              <Checkbox id="rememberMe" name="rememberMe" />
              <Label htmlFor="rememberMe">Remember me</Label>
            </div>
            <a
              href="#"
              className="text-sm text-primary-600 dark:text-primary-300"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mb-6">
            <Button type="submit" className="w-full">
              Login to your account
            </Button>
          </div>
          <p className="text-center text-sm text-gray-500 dark:text-gray-300">
            Not registered?&nbsp;
            <a href="#" className="text-primary-600 dark:text-primary-300">
              Create account
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
