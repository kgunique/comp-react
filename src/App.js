import "./App.css";
import Button from "./components/Button";
import useLocalStorage from "use-local-storage";

function App() {
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  return (
    <div className="App" data-theme={theme}>
      <span>
        {theme === "light" ? "This is Light Theme" : "This is dark theme"} in
        React
      </span>
      <br />
      <Button
        type="type"
        onClick={switchTheme}
        buttonSize="btn-medium"
        buttonStyle="btn--primary-solid"
        buttonText={
          theme === "light" ? "Change To Dark Theme" : "Change To Light Theme"
        }
      />
      <br />
      {/* <Button
        type="type"
        buttonSize="btn-large"
        buttonStyle="btn--warning-solid"
        buttonText="Hello Button 2"
      />
      <br />
      <Button
        onClick={handleButtonClick}
        type="type"
        buttonSize="btn-medium"
        buttonStyle="btn--danger-solid"
        buttonText="Check click"
      />
      <br />
      <Button
        type="type"
        buttonSize="btn-large"
        buttonStyle="btn--success-solid"
        buttonText="Hello Button 3"
      />
      <br />

      <Button
        type="type"
        buttonSize="btn-medium"
        buttonStyle="btn--primary-outline"
        buttonText="Hello Button 1"
      />
      <br />
      <Button
        type="type"
        buttonSize="btn-large"
        buttonStyle="btn--warning-outline"
        buttonText="Hello Button 2"
      />
      <br />
      <Button
        onClick={handleButtonClick}
        type="type"
        buttonSize="btn-medium"
        buttonStyle="btn--danger-outline"
        buttonText="Check click"
      />
      <br />
      <Button
        type="type"
        buttonSize="btn-large"
        buttonStyle="btn--success-outline"
        buttonText="Hello Button 3"
      />
      <br /> */}
    </div>
  );
}

export default App;
