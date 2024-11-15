type ContainerProps ={
    children: React.ReactNode
}
const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex flex-col mx-auto max-w-screen-2xl min-h-screen bg-white/[2%]">{children}</div>
  );
};

export default Container;
