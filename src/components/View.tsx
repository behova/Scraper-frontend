interface Props {
  children?: React.ReactNode;
}

const View: React.FC<Props> = ({ children }) => {
  return <div className="h-full w-full overflow-scroll">{children}</div>;
};

export default View;
