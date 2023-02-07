interface Props {
  children?: React.ReactNode;
}

const View: React.FC<Props> = ({ children }) => {
  return <div className="min-h-full min-w-full">{children}</div>;
};

export default View;
