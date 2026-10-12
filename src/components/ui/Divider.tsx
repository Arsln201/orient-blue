type DividerProps = {
  dark?: boolean;
  className?: string;
};

export default function Divider({
  dark = false,
  className = "",
}: DividerProps) {
  return (
    <div
      className={`ob-ui-divider ${dark ? "ob-ui-divider-dark" : ""} ${className}`}
      aria-hidden="true"
    />
  );
}
