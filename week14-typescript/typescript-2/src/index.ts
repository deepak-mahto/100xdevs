type EventType = "click" | "scroll" | "mousemove";

type ExcludeType = Exclude<EventType, "scroll">;

const handleEvent = (event: ExcludeType) => {
  console.log(`Handling event: ${event}`);
};

handleEvent("mousemove");
