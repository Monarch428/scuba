import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner';

interface ContactFormProps {
  variant?: 'hero' | 'footer';
}

export function ContactForm({ variant = 'hero' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We\'ll be in touch soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isDark = variant === 'hero';

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`${isDark ? 'bg-white/10 backdrop-blur-md border-white/20' : 'bg-white border-slate-200'} rounded-3xl border shadow-2xl`}
      style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          {/* Input Labels: Reduced from 18px to 16px */}
          <Label 
            htmlFor="name" 
            className={`block ${isDark ? 'text-white' : 'text-slate-700'}`}
            style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}
          >
            Full Name *
          </Label>
          {/* Input height: Reduced from 56px to 48px */}
          <Input
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`${isDark ? 'bg-white/20 border-white/30 text-white placeholder:text-white/60' : 'bg-white border-slate-300'}`}
            style={{ height: '48px', fontSize: '15px' }}
          />
        </div>

        <div>
          <Label 
            htmlFor="email" 
            className={`block ${isDark ? 'text-white' : 'text-slate-700'}`}
            style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}
          >
            Email Address *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className={`${isDark ? 'bg-white/20 border-white/30 text-white placeholder:text-white/60' : 'bg-white border-slate-300'}`}
            style={{ height: '48px', fontSize: '15px' }}
          />
        </div>

        <div>
          <Label 
            htmlFor="phone" 
            className={`block ${isDark ? 'text-white' : 'text-slate-700'}`}
            style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}
          >
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(919) 247-0356"
            className={`${isDark ? 'bg-white/20 border-white/30 text-white placeholder:text-white/60' : 'bg-white border-slate-300'}`}
            style={{ height: '48px', fontSize: '15px' }}
          />
        </div>

        <div>
          <Label 
            htmlFor="message" 
            className={`block ${isDark ? 'text-white' : 'text-slate-700'}`}
            style={{ fontSize: '16px', fontWeight: 600, marginBottom: '8px' }}
          >
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your diving goals..."
            rows={4}
            className={`resize-none ${isDark ? 'bg-white/20 border-white/30 text-white placeholder:text-white/60' : 'bg-white border-slate-300'}`}
            style={{ fontSize: '15px', lineHeight: 1.5 }}
          />
        </div>
      </div>

      {/* Button: Reduced from 56px to 48px height */}
      <Button 
        type="submit"
        className={`w-full ${isDark ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white'}`}
        style={{ height: '48px', fontSize: '16px', fontWeight: 600 }}
      >
        Send Enquiry
      </Button>
    </form>
  );
}
