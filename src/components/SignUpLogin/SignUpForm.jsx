import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { apiRegisterUser } from '../../api/users';
import { useUserContext } from '../../service/UserContext';

export const SignUpForm = ({ onLogin }) => {
  const user = useUserContext();
  const [error, setError] = useState('');
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: { email: '', password: '' } });

  const onSubmit = async (formData) => {
    const res = await apiRegisterUser(formData);
    if (res.error) {
      setError(res.error);
    } else {
      user.setLoggedIn(res);
    }
  };

  return (
    <div className="max-w-[25rem] bg-darkBlue rounded-lg mx-auto p-2 ">
      <form noValidate onClick={handleSubmit(onSubmit)}>
        <div className="body-sm">
          {error && <p className="text-center text-red">{error}</p>}
        </div>
        <h1 className="heading-lg my-4">Sign Up</h1>
        <div className="flex flex-col">
          <input
            id="email"
            type="email"
            autoComplete="on"
            placeholder="Email address"
            className="p-2 bg-darkBlue body-md"
            {...register('email', {
              required: 'Please enter email',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && (
            <span className="text-xs text-red">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <input
            id="password"
            type="password"
            autoComplete="off"
            placeholder="Password"
            className="p-2 bg-darkBlue body-md"
            {...register('password', {
              required: 'Please enter password',
              minLength: {
                value: 6,
                message: 'Password should be at least 6 characters lenght',
              },
            })}
          />
          {errors.password && (
            <span className="text-xs text-red">{errors.password.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="bg-red w-full rounded-lg p-2 my-2 text-white"
        >
          Create an account
        </button>
      </form>
      <button onClick={onLogin} className="body-sm w-full">
        Already have an account? Please <span className="text-red">Login</span>
      </button>
    </div>
  );
};
