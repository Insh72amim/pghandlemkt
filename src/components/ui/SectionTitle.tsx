import { motion } from 'framer-motion';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionTitle({ 
  eyebrow, 
  title, 
  copy, 
  align = 'center',
  className = ''
}: SectionTitleProps) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-[0.2em] text-primary"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-3 font-display text-3xl font-bold leading-tight text-black md:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {copy && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-body leading-relaxed max-w-2xl mx-auto"
        >
          {copy}
        </motion.p>
      )}
    </div>
  );
}
