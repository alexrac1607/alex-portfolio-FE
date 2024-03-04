export default function Header() {
    return (
      <header className="flex justify-between items-center h-20">
        <div className="text-2xl font-bold">Alex Portfolio</div>
        <div className="flex space-x-4">
          <div>Home</div>
          <div>About</div>
          <div>Projects</div>
          <div>Contact</div>
        </div>
      </header>
    );
  }
  