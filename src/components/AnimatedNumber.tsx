import { useCountUp } from "@/hooks/use-count-up";

interface AnimatedNumberProps {
  value: string | number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export const AnimatedNumber = ({ value, suffix = "", prefix = "", decimals = 0 }: AnimatedNumberProps) => {
  const numericValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.]/g, '')) : value;
  const count = useCountUp({ end: numericValue, decimals });
  
  return (
    <div ref={count.ref} className="text-4xl font-bold text-primary mb-2">
      {prefix}{count.count}{suffix}
    </div>
  );
};
