function Footer(): React.ReactElement {
  return (
    <footer className="w-full py-4 bg-muted text-muted-foreground border-t border-border lg:px-12 lg:py-6">
      <div className="grid grid-cols-1 gap-y-1 mb-4 text-center lg:grid-cols-4 lg:mb-12">
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
