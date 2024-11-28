import Button from "./components/ui/Button";
import ShareButton from "./icons/ShareButton";

const App = () => {
  return (
    <div className="flex justify-center gap-3">
      <Button
        variant="primary"
        size="sm"
        text="Share"
        startIcon={<ShareButton size="lg" />}
        endIcon={"-"}
        onClick={() => {}}
      />
      <Button
        variant="secondry"
        size="md"
        text="Add content"
        startIcon={"+"}
        endIcon={"-"}
        onClick={() => {}}
      />
      <Button
        variant="secondry"
        size="lg"
        text="Add content"
        startIcon={"+"}
        endIcon={"-"}
        onClick={() => {}}
      />
    </div>
  );
};

export default App;
