 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="p-4 border-b text-center">
        20% off for next few days

      </div>
      <body > {children} </body>
    </html>
  );
}
