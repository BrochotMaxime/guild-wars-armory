function AppHeader() {
  return (
    <header className="app-header">
      <h1 className="app-header__title">
        <img
          className="app-header__logo"
          src="/images/branding/guild-wars-armory-logo.png"
          alt="Guild Wars Armory"
        />
      </h1>

      <p className="app-header__tagline">
        Plan your armor. Track your materials.
      </p>
    </header>
  );
}

export default AppHeader;
