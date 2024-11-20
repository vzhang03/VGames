interface AppWidgetProps {
  appName: string;
  appDescription: string;
}

const AppWidget: React.FC<AppWidgetProps> = ({ appName, appDescription }) => {
  return (
    <div className="app-widget-container">
      <h1>{appName}</h1>
      <p>{appDescription}</p>
    </div>
  );
};

export default AppWidget;