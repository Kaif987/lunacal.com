import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// type Props = {};

const Widget1 = () => {
  return (
    <div className="bg-widgetBg rounded-md w-[720px]">
      <Tabs defaultValue="account">
        <TabsList className="rounded-[]">
          <TabsTrigger value="about-me" className="" >About Me</TabsTrigger>
          <TabsTrigger value="experiences">Experiences</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
        </TabsList>
        <TabsContent value="about-me" className="font-jakarta text-widget">
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
        </TabsContent>
        <TabsContent value="experiences" className="font-jakarta text-widget">
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
          working at this awesome company for 3 years now. I was born and raised
          in Albany, NY& have been living in Santa Carla for the past 10 years
          my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both
          of them are just starting school, so my calender is usually blocked
          between 9-10 AM. This is a...
        </TabsContent>
        <TabsContent value="recommended" className="font-jakarta text-widget">
          Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
          working at this awesome company for 3 years now. I was born and raised
          in Albany, NY& have been living in Santa Carla for the past 10 years
          my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both
          of them are just starting school, so my calender is usually blocked
          between 9-10 AM. This is a...
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Widget1;
