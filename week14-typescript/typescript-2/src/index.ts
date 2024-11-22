type EventType = "click" | "scroll" | "mosemove";

type ExcludeType = Exclude<EventType, "scroll">;

const handleEvent = (event: ExcludeType) => {
  console.log(`Handling event: ${event}`);
};

handleEvent("click");
