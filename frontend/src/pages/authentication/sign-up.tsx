import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Label, TextInput, HelperText } from "flowbite-react";

import type { FC } from "react";
type FormData = {
  firstName: string;
  lastName: string;
  fatherName: string;
  birthday: Date | null;
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
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      birthday: null,
    },
  });

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
      style={{ backgroundImage: "url('/images/authentication/bg-image.jpg')" }}
    >
      <div className="w-full max-w-md bg-white/40 p-8 backdrop-blur-md dark:bg-gray-900/40">
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
                  {...register("firstName", {
                    required: "First Name is required",
                    minLength: {
                      value: 3,
                      message: "First Name must be at least 3 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message:
                        "First Name cannot contain numbers or special characters",
                    },
                  })}
                />
                {errors.firstName && (
                  <HelperText color="failure">
                    <span className="font-medium">Oops!</span>{" "}
                    {errors.firstName.message}
                  </HelperText>
                )}
              </div>

              {/* Father Name */}
              <div className="mb-4">
                <Label htmlFor="fatherName">Father Name</Label>
                <TextInput
                  id="fatherName"
                  color={errors.fatherName ? "failure" : undefined}
                  {...register("fatherName", {
                    required: "Father Name is required",
                    minLength: {
                      value: 3,
                      message: "Father Name must be at least 3 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message:
                        "Father Name cannot contain numbers or special characters",
                    },
                  })}
                />
                {errors.fatherName && (
                  <HelperText color="failure">
                    <span className="font-medium">Oops!</span>{" "}
                    {errors.fatherName.message}
                  </HelperText>
                )}
              </div>

              {/* Last Name */}
              <div className="mb-4">
                <Label htmlFor="lastName">Last Name</Label>
                <TextInput
                  id="lastName"
                  color={errors.lastName ? "failure" : undefined}
                  {...register("lastName", {
                    required: "Last Name is required",
                    minLength: {
                      value: 3,
                      message: "Last Name must be at least 3 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message:
                        "Last Name cannot contain numbers or special characters",
                    },
                  })}
                />
                {errors.lastName && (
                  <HelperText color="failure">
                    <span className="font-medium">Oops!</span>{" "}
                    {errors.lastName.message}
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

                <input
                  type="date"
                  id="birthday"
                  {...register("birthday", {
                    required: "Birthday is required",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  {...register("personalNr", {
                    required: "Personal Number is required",
                    minLength: {
                      value: 10,
                      message: "Personal Number must be exactly 10 characters",
                    },
                    maxLength: {
                      value: 10,
                      message: "Personal Number must be exactly 10 characters",
                    },
                    pattern: {
                      value: /^[A-Za-z]\d{8}[A-Za-z]$/,
                      message:
                        "Personal number must start and end with a letter and have 8 digits in between",
                    },
                  })}
                />
                {errors.personalNr && (
                  <HelperText color="failure">
                    <span className="font-medium">Oops!</span>{" "}
                    {errors.personalNr.message}
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
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                      message:
                        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
                    },
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