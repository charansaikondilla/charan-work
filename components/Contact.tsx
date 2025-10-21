import React from 'react';
import WhatsappIcon from './icons/WhatsappIcon';
import PhoneIcon from './icons/PhoneIcon';
import EmailIcon from './icons/EmailIcon';

interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, label, value, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg shadow-lg border border-slate-700/80 hover:bg-slate-800/80 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300">
        <div className="transition-transform duration-300 group-hover:scale-110">
            {icon}
        </div>
        <div>
            <p className="text-sm font-semibold text-slate-400">{label}</p>
            <p className="text-lg text-slate-200 font-medium">{value}</p>
        </div>
    </a>
);

const Contact: React.FC = () => {
    const contacts = [
        {
            icon: <WhatsappIcon />,
            label: "WhatsApp",
            value: "+91 79955 97570",
            href: "https://wa.me/917995597570",
        },
        {
            icon: <PhoneIcon />,
            label: "Phone",
            value: "+91 79955 97570",
            href: "tel:+917995597570",
        },
        {
            icon: <EmailIcon />,
            label: "Email",
            value: "charansaikondilla@gmail.com",
            href: "mailto:charansaikondilla@gmail.com",
        },
    ];

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100">Let's Connect</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Feel free to reach out directly through any of the methods below. I'm always open to discussing new projects and opportunities.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
            <div className="space-y-6">
                {contacts.map((contact, index) => (
                    <ContactInfo key={index} {...contact} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;