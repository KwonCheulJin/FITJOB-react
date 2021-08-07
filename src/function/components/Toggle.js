const Toggle = ({ darkMode, onDarkMode }) => (
  <div className="dark-mode-toggle">
    <button type="button" onClick={() => onDarkMode(false)}>
      ☀
    </button>
    <span className="toggle-control">
      <input
        className="dmcheck"
        id="dmcheck"
        type="checkbox"
        checked={darkMode}
        onChange={() => onDarkMode(!darkMode)}
      />
      <label htmlFor="dmcheck" />
    </span>
    <button type="button" onClick={() => onDarkMode(true)}>
      ☾
    </button>
  </div>
);

export default Toggle;