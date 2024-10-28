import Modal from "./Modal";

function AddLocationTab() {
  return (
    <Modal>
      <Modal.Open opens="add-weather">
        <div className="relative flex h-[100%] w-[12rem] cursor-pointer flex-col items-center gap-[2rem] rounded-xl border-2 border-dashed">
          <button className="absolute left-[50%] top-[0] h-8 w-8 translate-x-[-50%] translate-y-[-50%] rounded-full bg-whiDarker text-xl text-darkest">
            +
          </button>
          <h1 className="mt-6 text-xl text-whi">World forecast</h1>
          <p className="text-center align-sub text-sm text-whi">
            Add the cities you are interested in
          </p>
        </div>
      </Modal.Open>
      <Modal.Window name="add-weather">
        <p>Modal Content</p>
      </Modal.Window>
    </Modal>
  );
}

export default AddLocationTab;
