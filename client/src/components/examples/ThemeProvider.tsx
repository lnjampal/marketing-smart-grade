import { ThemeProvider } from '../ThemeProvider';

export default function ThemeProviderExample() {
  return (
    <ThemeProvider>
      <div className="p-4">
        <h3 className="text-lg font-semibold">Theme Provider Example</h3>
        <p className="text-muted-foreground">This component provides theme context to the app.</p>
      </div>
    </ThemeProvider>
  );
}