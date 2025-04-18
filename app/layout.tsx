export const metadata = {
  title: "라냉 끼끼 웹게임",
  description: "현실을 피해 끼끼 울자!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}