export default function Container({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`max-w-[1200px] m-auto ${className}`}>{children}</div>;
}
