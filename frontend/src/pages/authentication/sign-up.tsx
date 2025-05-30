import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  Label,
  TextInput,
  HelperText,
} from "flowbite-react";
import type { FC } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  fatherName: string;
  birthday: string;
  personalNr: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpPage: FC = () => {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    getValues,
    trigger,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async () => {
    if (step === 1) {
      const valid = await trigger([
        "firstName",
        "lastName",
        "fatherName",
        "birthday",
        "personalNr",
      ]);
      if (valid) setStep(2);
    } else {
      const valid = await trigger(["email", "password", "confirmPassword"]);
      if (valid) {
        const data = getValues();
        alert("Account Created! 🎉\n" + JSON.stringify(data, null, 2));
      }
    }
  };

  const handleBack = () => setStep(1);

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center px-4 py-12"
      style={{ backgroundImage: "url('/images/car.jpg')" }}
    >
      <div className="w-full max-w-md bg-white/90 p-8 backdrop-blur-md dark:bg-gray-900/90">
        <div className="mb-6 text-center">
          <img
            alt="Flowbite logo"
            src="https://flowbite.com/docs/images/logo.svg"
            className="mx-auto h-12"
          />
        </div>
        <h1 className="mb-6 text-center text-2xl font-bold dark:text-white md:text-3xl">
          Create a Free Account
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          {step === 1 && (
            <>
              {/* First Name */}
              <div className="mb-4">
                <Label htmlFor="firstName">First Name</Label>
                <TextInput
                  id="firstName"
                  color={errors.firstName ? "failure" : undefined}
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <HelperText color="failure">
                    <span className="font-medium">Oops!</span> This field is
                    required
                  </HelperText>
                )}
              </div>

              {/* Father Name */}
              <div className="mb-4">
                <Label htmlFor="fatherName">Father Name</Label>
                <TextInput
                  id="fatherName"
                  color={errors.fatherName ? "failure" : undefined}
                  {...register("fatherName", { required: true })}
                />
                {errors.fatherName && (
                  <HelperText color="failure">
                    <span className="font-medium">Oops!</span> This field is
                    required
                  </HelperText>
                )}
              </div>

              {/* Last Name */}
              <div className="mb-4">
                <Label htmlFor="lastName">Last Name</Label>
                <TextInput
                  id="lastName"
                  color={errors.lastName ? "failure" : undefined}
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <HelperText color="failure">
                    <span className="font-medium">Oops!</span> This field is
                    required
                  </HelperText>
                )}
              </div>

              {/* Birthday */}
              <div className="mb-4">
                <label
                  htmlFor="birthday"
                  className="block mb-1 font-medium text-gray-700 dark:text-gray-300"
                >
                  Birthday
                </label>

                <Controller
                  name="birthday"
                  control={control}
                  rules={{ required: "Birthday is required" }}
                  render={({ field }) => (
                    <input
                      type="date"
                      id="birthday"
                      {...field}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  )}
                />

                {errors.birthday && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.birthday.message}
                  </p>
                )}
              </div>

              {/* Personal Number */}
              <div className="mb-6">
                <Label htmlFor="personalNr">Personal Number</Label>
                <TextInput
                  id="personalNr"
                  color={errors.personalNr ? "failure" : undefined}
                  {...register("personalNr", { required: true })}
                />
                {errors.personalNr && (
                  <HelperText color="failure">
                    <span className="font-medium">Oops!</span> This field is
                    required
                  </HelperText>
                )}
              </div>

              <Button type="submit" className="w-full">
                Next
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              {/* Email */}
              <div className="mb-4">
                <Label htmlFor="email">Email</Label>
                <TextInput
                  id="email"
                  type="email"
                  color={errors.email ? "failure" : undefined}
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <HelperText color="failure">
                    <span className="font-medium">Oops!</span>{" "}
                    {errors.email.message || "Email is required"}
                  </HelperText>
                )}
              </div>

              {/* Password */}
              <div className="mb-4">
                <Label htmlFor="password">Password</Label>
                <TextInput
                  id="password"
                  type="password"
                  color={errors.password ? "failure" : undefined}
                  {...register("password", {
                    required: true,
                    minLength: { value: 6, message: "Minimum 6 characters" },
                  })}
                />
                {errors.password && (
                  <HelperText color="failure">
                    <span className="font-medium">Oops!</span>{" "}
                    {errors.password.message}
                  </HelperText>
                )}
              </div>

              {/* Confirm Password */}
              <div className="mb-6">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <TextInput
                  id="confirmPassword"
                  type="password"
                  color={errors.confirmPassword ? "failure" : undefined}
                  {...register("confirmPassword", {
                    required: true,
                    validate: (val) =>
                      val === getValues("password") || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <HelperText color="failure">
                    <span className="font-medium">Oops!</span>{" "}
                    {errors.confirmPassword.message}
                  </HelperText>
                )}
              </div>

              <div className="flex justify-between">
                <Button
                  type="button"
                  color="gray"
                  onClick={handleBack}
                  className="w-1/2"
                >
                  Back
                </Button>
                <Button type="submit" className="ml-4 w-1/2">
                  Create Account
                </Button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
