import Logo1 from "../../assets/logoipsum-1.png";
import Logo2 from "../../assets/logoipsum-2.png";
import Logo3 from "../../assets/logoipsum-3.png";
import Logo4 from "../../assets/logoipsum-4.png";
export default function Partners() {
  return (
    <div className="mx-[4.5rem] flex flex-col gap-10 ">
      <div className="text-center flex flex-col items-center justify-center gap-4">
        <h6 className="heading-bold-h6 text-primary-blue">Collaboration</h6>
        <h2 className="heading-bold-h2">Our Partners</h2>
      </div>
      <div className="flex justify-between gap-14">
        <img src={Logo1} alt="Logoipsum1" />
        <img src={Logo2} alt="Logoipsum2" />
        <img src={Logo3} alt="Logoipsum3" />
        <img src={Logo4} alt="Logoipsum4" />
      </div>
    </div>
  );
}
