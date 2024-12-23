export default function Newsletter() {
  return (
    <div className="mx-[4.5rem] my-24 bg-primary-darkBlue p-20 rounded-2xl flex flex-col items-center text-center gap-10">
      <div className="w-[47rem]">
        <div className="flex flex-col gap-4">
          <h6 className="heading-bold-h6 text-accent-cyan ">Newsletter</h6>
          <h3 className="heading-bold-h2">
            You Do Not Want to Miss Out on this!
          </h3>
          <p className="paragraph-body text-text-disabled">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-center gap-2">
        <input
          type="email"
          placeholder="Your Email"
          className="w-[30rem] py-2 px-4 rounded-lg border paragraph-body text-[rgba(51, 51, 51, 1)] bg-transparent"
        />
        <button className="button-primary-large bg-primary-blue link-button-semibold-large">
          Submit
        </button>
      </div>
    </div>
  );
}
