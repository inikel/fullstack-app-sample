import React from 'react'
import { useForm, SubmitHandler, FormProvider} from "react-hook-form";
import InputField from '../components/inputs/InputField/InputField';
import { useCreateUserMutation } from '../generated-graphql/graphql';

const REGISTER_INPUTS: Inputs = 
{
  email: 'email',
  username: 'username',
  password: 'password'
}
interface Inputs {
  email: string,
  username: string,
  password: string
};

const RegisterPage = () => {
  const methods = useForm<Inputs>();
  const { handleSubmit, formState: { errors } } = methods
  const [useCreateUser] = useCreateUserMutation();

  const onSubmit: SubmitHandler<Inputs> = async data => {
    const { username, password, email } = data
    console.log(data)

    const response = await useCreateUser({
      variables: {
        options: {
          username,
          password,
          email
        }
      }
    })

    if (response.data?.createUser.errors?.length) {
      alert(response.data?.createUser.errors[0].message)
    }
  };

  return (
   <FormProvider {...methods}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField name={REGISTER_INPUTS.username} />
      <InputField name={REGISTER_INPUTS.email} />
      <InputField name={REGISTER_INPUTS.password} />
      <button type="submit">register</button>
    </form>
   </FormProvider>
  );
}

export default RegisterPage