export default function LeftColumn() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h6 className=" text-[rgba(86,153,255,1)] leading-8 font-bold">
          Welcome to Yorfy
        </h6>
        <h1 className="text-[4rem] leading-[5rem] font-bold ">
          Now Available, Meet Yorfy NFT Collection ⭐️
        </h1>
        <p className="leading-8 text-disable ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex gap-10">
        <div className="nft_items">
          <h3 className="text-[2.5rem] leading-[3.5rem] font-bold">546</h3>
          <p className="text-disable leading-9">NFT Items</p>
        </div>
        <div className="divider h-20 border border-disable"></div>
        <div className="oweners">
          <h3 className="text-[2.5rem] leading-[3.5rem] font-bold">42</h3>
          <p className="text-disable leading-9">Oweners</p>
        </div>
        <div className="divider h-20 border border-disable"></div>
        <div className="items_sold">
          <h3 className="text-[2.5rem] leading-[3.5rem] font-bold">378</h3>
          <p className="text-disable leading-9">Items Sold</p>
        </div>
      </div>
    </div>
  );
}
