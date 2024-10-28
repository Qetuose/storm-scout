import AddLocationTab from "./AddLocationTab";
import SavedLocationTab from "./SavedLocationTab";

function SavedLocations() {
  return (
    <div className="mb-[2rem] flex gap-3">
      <AddLocationTab />
      <SavedLocationTab />
    </div>
  );
}

export default SavedLocations;
