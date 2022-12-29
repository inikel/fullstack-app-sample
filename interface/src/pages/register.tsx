import { useRouter } from "next/router";
import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import InputField from "../components/inputs/InputField/InputField";
import { useCreateUserMutation } from "../generated-graphql/graphql";
import styles from "../styles/Register.module.css";

const REGISTER_INPUTS: Inputs = {
  email: "email",
  username: "username",
  password: "password",
};
interface Inputs {
  email: string;
  username: string;
  password: string;
}

const RegisterPage = () => {
  const methods = useForm<Inputs>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
  const [createUser] = useCreateUserMutation();
  const [serverErrorText, setServerErrorText] = React.useState<string>();
  const [isUserCreated, setUserCreated] = React.useState<boolean>(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { username, password, email } = data;

    const response = await createUser({
      variables: {
        options: {
          username,
          password,
          email,
        },
      },
    });

    if (response.data?.createUser.errors?.length) {
      setServerErrorText(response.data?.createUser.errors[0].message);
    } else {
      setUserCreated(true);
    }
  };

  React.useEffect(() => {
    if (isUserCreated) {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  }, [isUserCreated]);

  return (
    <FormProvider {...methods}>
      {isUserCreated && <p>You have been registered. Redirect to main page.</p>}
      {!isUserCreated && (
        <>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h2>Register</h2>
            <InputField name={REGISTER_INPUTS.username} />
            <InputField name={REGISTER_INPUTS.email} />
            <InputField name={REGISTER_INPUTS.password} />
            <button className={styles.button} type="submit">
              Go
            </button>
            {serverErrorText && (
              <p style={{ color: "red" }}>{serverErrorText}</p>
            )}
          </form>
        </>
      )}
    </FormProvider>
  );
};

export default RegisterPage;
