function Header() {
  return (
    <header className="w-full h-20 bg-secondary flex justify-between items-center px-4 lg:px-12">
      <div className="flex items-center gap-x-2 text-secondary-foreground cursor-pointer">
        <span className="text-4xl">🐙</span>
        <span className="text-xl">EnglishWords</span>
      </div>
      <div className="menu">
        <div className="w-10 h-10 rounded-full bg-border cursor-pointer"></div>
      </div>
    </header>
  );
}
export default Header;
