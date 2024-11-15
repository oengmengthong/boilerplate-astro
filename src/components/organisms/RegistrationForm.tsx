import { z } from 'zod';
import Form from '../molecules/Form';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';

const registerSchema = z.object({
  firstName: z.string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be less than 50 characters'),
  lastName: z.string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be less than 50 characters'),
  email: z.string()
    .email('Please enter a valid email address'),
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be less than 20 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegistrationData = z.infer<typeof registerSchema>;

export default function RegistrationForm() {
  const handleSubmit = async (data: RegistrationData) => {
    try {
      // In a real application, you would send this data to your API
      console.log('Registration data:', data);
      alert('Registration successful! Please check your email to verify your account.');
      window.location.href = '/login';
    } catch (error) {
      console.error('Error registering:', error);
      alert('There was an error during registration. Please try again.');
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      schema={registerSchema}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <FormField
          name="firstName"
          label="First Name"
          required
          placeholder="John"
        />
        <FormField
          name="lastName"
          label="Last Name"
          required
          placeholder="Doe"
        />
      </div>

      <FormField
        name="email"
        label="Email"
        type="email"
        required
        placeholder="john@example.com"
      />

      <FormField
        name="username"
        label="Username"
        required
        placeholder="johndoe123"
      />

      <FormField
        name="password"
        label="Password"
        type="password"
        required
        placeholder="••••••••"
      >
        <ul className="text-xs text-gray-500 dark:text-gray-400 mt-1 list-disc list-inside">
          <li>At least 8 characters</li>
          <li>One uppercase letter</li>
          <li>One lowercase letter</li>
          <li>One number</li>
          <li>One special character</li>
        </ul>
      </FormField>

      <FormField
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        required
        placeholder="••••••••"
      />

      <Button type="submit" size="lg" className="w-full">
        Create Account
      </Button>
    </Form>
  );
}