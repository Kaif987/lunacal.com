import * as Tabs from "@radix-ui/react-tabs";
import rectangle from "@/assets/rectangle.svg";
import WidgetCard from "./ui/WidgetCard";

// type Props = {};

const Widget1 = () => {
  return (
    <WidgetCard>
      <img
        src={rectangle}
        alt="rectangle"
        className="absolute top-[111px] right-3"
      />
      <Tabs.Root defaultValue="about-me">
        <Tabs.List className="bg-black rounded-3xl py-[7px] px-[6px] grid grid-cols-3 gap-5">
          <Tabs.Trigger
            value="about-me"
            className="text-lg leading-4 py-4 bg-inactiveWidgetBg font text-widget rounded-2xl data-[state=active]:text-white data-[state=active]:bg-widgetButton font-medium font-poppins"
          >
            About Me
          </Tabs.Trigger>
          <Tabs.Trigger
            value="experiences"
            className="text-lg leading-4 bg-inactiveWidgetBg text-widget rounded-2xl data-[state=active]:text-white data-[state=active]:bg-widgetButton font-medium font-poppins"
          >
            Experiences
          </Tabs.Trigger>
          <Tabs.Trigger
            value="recommended"
            className="text-lg leading-4 bg-inactiveWidgetBg text-widget rounded-2xl data-[state=active]:text-white data-[state=active]:bg-widgetButton font-medium font-poppins"
          >
            Recommended
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          value="about-me"
          className="font-jakarta text-xl leading-6 text-widget pt-9"
        >
          <p>
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.
          </p>
          <br />
          <p>
            I was born and raised in Albany, NY& have been living in Santa Carla
            for the past 10 years my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella. Both of them are just starting school, so
            my calender is usually blocked between 9-10 AM. This is a...
          </p>
        </Tabs.Content>
        <Tabs.Content
          value="experiences"
          className="font-jakarta text-xl leading-6 text-widget pt-9"
        >
          <p>
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            consequatur tempora nobis reprehenderit perferendis ullam inventore
            iste quidem, corporis neque soluta consequatur. Atque, modi
            voluptas!
          </p>
        </Tabs.Content>
        <Tabs.Content
          value="recommended"
          className="font-jakarta text-xl leading-6 text-widget pt-9"
        >
          <p>
            Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
            working at this awesome company for 3 years now.
          </p>
          <br />
          <p>
            I was born and raised in Albany, NY& have been living in Santa Carla
            for the past 10 years my wife Tiffany and my 4 year old twin
            daughters- Emma and Ella. Both of them are just starting school, so
            my calender is usually blocked between 9-10 AM. This is a...
          </p>
        </Tabs.Content>
      </Tabs.Root>
    </WidgetCard>
  );
};

export default Widget1;
