import { z } from 'zod';
import Form from '../molecules/Form';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const handleSubmit = async (data: ContactFormData) => {
    try {
      // In a real application, you would send this data to your API
      console.log('Form submitted:', data);
      alert('Thank you for your message! We will get back to you soon.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      schema={contactSchema}
      className="space-y-6"
    >
      <FormField
        name="name"
        label="Name"
        required
        placeholder="John Doe"
      />
      
      <FormField
        name="email"
        label="Email"
        type="email"
        required
        placeholder="john@example.com"
      />
      
      <FormField
        name="message"
        label="Message"
        type="textarea"
        required
        placeholder="How can we help you?"
      />

      <Button type="submit" size="lg" className="w-full">
        Send Message
      </Button>
    </Form>
  );
}