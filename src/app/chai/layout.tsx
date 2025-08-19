
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <h2>Inner Nav Bar</h2>
        {children}
    </>
  );
}