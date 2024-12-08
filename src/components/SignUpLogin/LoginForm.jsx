import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { apiLoginUser } from '../../api/users';
import { useUserContext } from '../../service/UserContext';

export const LoginForm = ({ onSignUp }) => {
  const user = useUserContext();
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: '', password: '' } });

  const onSubmit = async (formData) => {
    try {
      const userId = await apiLoginUser(formData);
      if (userId.error) {
        setError(userId.error);
      } else {
        user.setLoggedIn(userId.id);
      }
    } catch (e) {
      setError(e);
    }
  };

  return (
    <div className="max-w-[25rem] bg-darkBlue rounded-lg mx-auto p-2">
      <form noValidate onClick={handleSubmit(onSubmit)}>
        <div className="body-sm">
          {error && <p className="text-center">{error}</p>}
        </div>
        <h1 className="heading-lg my-4">Login</h1>
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
          Login to your account
        </button>
      </form>
      <button onClick={onSignUp} className="body-sm w-full">
        Do not have an account? Please <span className="text-red">Sign Up</span>
      </button>
    </div>
  );
};
