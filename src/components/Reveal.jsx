import useReveal from "../hooks/useReveal.js";

export default function Reveal({ children, className = "", as: Tag = "div", ...props }) {
  const { ref, className: revealClass } = useReveal();

  return (
    <Tag ref={ref} className={`${revealClass} ${className}`.trim()} {...props}>
      {children}
    </Tag>
  );
}
