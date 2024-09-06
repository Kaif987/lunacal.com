export default function ButtonPrimary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="bg-topbar py-4 px-10 rounded-[20px] font-poppins font-medium text-xl">
      {children}
    </button>
  );
}
