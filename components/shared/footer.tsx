function Footer() {
  return (
    <footer className="w-full p-4 bg-muted text-muted-foreground border-t border-border">
      <div className="grid grid-cols-1 gap-y-1 wrap-break-word mb-4 text-center">
        <p className="text-sm">О нас</p>
        <p className="text-sm">Политика конфиденциальности</p>
        <p className="text-sm">Контакты</p>
        <p className="text-sm">Лицензия</p>
      </div>
      <div className="text-center text-xs">
        © 2026 EnglishWords. Все права защищены.
      </div>
    </footer>
  );
}
export default Footer;
