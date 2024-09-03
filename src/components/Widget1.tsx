import { Tabs } from "@radix-ui/themes";

// type Props = {};

const Widget1 = () => {
  return (
    <div className="bg-widgetBg rounded-2xl w-[720px] pt-[17px] px-[53px]">
      <Tabs.Root defaultValue="account">
        <Tabs.List className="bg-black rounded-3xl py-[6px]">
          <Tabs.Trigger
            value="about-me"
            className="bg-inactiveWidgetBg text-widget rounded-lg data-[state=active]:text-white data-[state=active]:bg-widgetButton data-[state=active]:no-underline"
          >
            About Me
          </Tabs.Trigger>
          <Tabs.Trigger
            value="experiences"
            className="bg-inactiveWidgetBg text-widget rounded-lg data-[state=active]:text-white data-[state=active]:bg-widgetButton"
          >
            Experiences
          </Tabs.Trigger>
          <Tabs.Trigger
            value="recommended"
            className="bg-inactiveWidgetBg text-widget rounded-lg data-[state=active]:text-white data-[state=active]:bg-widgetButton"
          >
            Recommended
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          value="about-me"
          className="font-jakarta text-widget pt-9"
        >
          <p>
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.
          </p>
          <p>
            I was born and raised in Albany, NY& have been living in Santa Carla
            for the past 10 years my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella. Both of them are just starting school, so
            my calender is usually blocked between 9-10 AM. This is a...
          </p>
        </Tabs.Content>
        <Tabs.Content value="experiences" className="font-jakarta text-widget">
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
          working at this awesome company for 3 years now. I was born and raised
          in Albany, NY& have been living in Santa Carla for the past 10 years
          my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both
          of them are just starting school, so my calender is usually blocked
          between 9-10 AM. This is a...
        </Tabs.Content>
        <Tabs.Content value="recommended" className="font-jakarta text-widget">
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
          working at this awesome company for 3 years now. I was born and raised
          in Albany, NY& have been living in Santa Carla for the past 10 years
          my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both
          of them are just starting school, so my calender is usually blocked
          between 9-10 AM. This is a...
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default Widget1;
