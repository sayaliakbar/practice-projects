export default function LeftColumn() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h6 className="heading-bold-h6">Welcome to Yorfy</h6>
        <h1 className="heading-bold-h1">
          Now Available, Meet Yorfy NFT Collection ⭐️
        </h1>
        <p className="paragraph-body text-text-disabled">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="flex gap-10">
        <div className="nft_items">
          <h3 className="heading-bold-h3">546</h3>
          <p className="paragraph-body text-text-disabled">NFT Items</p>
        </div>
        <div className="divider h-20 border border-disable"></div>
        <div className="oweners">
          <h3 className="heading-bold-h3">42</h3>
          <p className="paragraph-body text-text-disabled">Owners</p>
        </div>
        <div className="divider h-20 border border-disable"></div>
        <div className="items_sold">
          <h3 className="heading-bold-h3">378</h3>
          <p className="paragraph-body text-text-disabled">Items Sold</p>
        </div>
      </div>
    </div>
  );
}
