import * as Tabs from "@radix-ui/react-tabs";

type props = {
  children: React.ReactNode;
  value: string;
};

export const TabTrigger = ({ children }: props) => {
  return (
    <Tabs.Trigger
      value="about-me"
      className="bg-inactiveWidgetBg text-widget rounded-lg data-[state=active]:text-white data-[state=active]:bg-widgetButton data-[state=active]:no-underline"
    >
      {children}
    </Tabs.Trigger>
  );
};
