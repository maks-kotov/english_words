import Link from "next/link";

function Footer(): React.ReactElement {
  return (
    <footer className="w-full py-4 bg-muted text-muted-foreground border-t border-border   px-4 md:px-12 md:py-6">
      <div className="grid grid-cols-1 gap-y-1 mb-4 text-center lg:grid-cols-4 lg:mb-12">
        <Link href="#" className="text-sm cursor-pointer">
          О нас
        </Link>
        <Link href="#" className="text-sm cursor-pointer">
          Политика конфиденциальности
        </Link>
        <Link href="#" className="text-sm cursor-pointer">
          Контакты
        </Link>
        <Link href="#" className="text-sm cursor-pointer">
          Лицензия
        </Link>
      </div>
      <div className="text-center text-xs">
        © 2026 EnglishWords. Все права защищены.
      </div>
    </footer>
  );
}
export default Footer;
