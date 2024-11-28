import Button from "./components/ui/Button";
import PlusIcon from "./icons/PlusIcon";
import ShareButton from "./icons/ShareButton";

const App = () => {
  return (
    <div className="flex justify-center gap-3">
      <Button
        variant="primary"
        size="sm"
        text="Share"
        startIcon={<ShareButton size="lg" />}
        endIcon={<PlusIcon size="lg" />}
        onClick={() => {}}
      />
      <Button
        variant="secondry"
        size="md"
        text="Add content"
        startIcon={<ShareButton size="lg" />}
        endIcon={<PlusIcon size="lg" />}
        onClick={() => {}}
      />
      <Button
        variant="secondry"
        size="lg"
        text="Add content"
        startIcon={<ShareButton size="lg" />}
        endIcon={<PlusIcon size="lg" />}
        onClick={() => {}}
      />
      <Button
        variant="primary"
        size="md"
        text="List content"
        startIcon={<ShareButton size="lg" />}
        endIcon={<PlusIcon size="lg" />}
        onClick={() => {}}
      />
      <Button
        variant="primary"
        size="sm"
        text="Share"
        startIcon={<ShareButton size="lg" />}
        endIcon={<PlusIcon size="lg" />}
        onClick={() => {}}
      />
    </div>
  );
};

export default App;
