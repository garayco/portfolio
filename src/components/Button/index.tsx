export function Button({ children, ...props }) {
  return <button {...props} className="bg-menuButton min-w-[200px] my-1" >{children}</button>;
}
