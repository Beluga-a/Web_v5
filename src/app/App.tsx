import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Header /> {/* Вставляем компонент Header */}
        {children} {/* Отображаем содержимое страниц */}
      </body>
    </html>
  );
}
