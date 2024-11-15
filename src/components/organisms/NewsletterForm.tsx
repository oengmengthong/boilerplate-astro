import { z } from 'zod';
import Form from '../molecules/Form';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import { env } from '../../lib/env';

const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters').optional(),
});

type NewsletterData = z.infer<typeof newsletterSchema>;

export default function NewsletterForm() {
  // Only render if newsletter feature is enabled
  if (!env.PUBLIC_ENABLE_NEWSLETTER) {
    return null;
  }

  const handleSubmit = async (data: NewsletterData) => {
    try {
      console.log('Newsletter subscription:', data);
      alert('Thank you for subscribing to our newsletter!');
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('There was an error subscribing. Please try again.');
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      schema={newsletterSchema}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="name"
          label="Name (optional)"
          placeholder="John Doe"
        />
        <FormField
          name="email"
          label="Email"
          type="email"
          required
          placeholder="john@example.com"
        />
      </div>

      <Button type="submit" variant="secondary" className="w-full sm:w-auto">
        Subscribe
      </Button>
    </Form>
  );
}