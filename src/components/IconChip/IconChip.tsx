interface Props {
  children: React.ReactNode;
}

const IconChip = ({ children }: Props) => {
  return (
    <div className="bg-tint-1 cursor-pointer hover:bg-tint-2 transition duration-200 p-8 rounded-4">
      {children}
    </div>
  );
};

export default IconChip;
