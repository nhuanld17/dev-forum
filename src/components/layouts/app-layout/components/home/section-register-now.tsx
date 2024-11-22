import { LocalIcon } from "src/assets/icons";
import { Button } from "src/components/ui";

function SectionRegister() {
  return (
    <>
      <div className="register px-[50px] py-[100px] flex justify-between">
        <div className="card bg-[#E4E5E8] w-[600px]  p-[50px] gap-[26px] rounded-[12px]">
          <h1 className="title text-[32px] font-[500] leading-[40px] mb-[16px]">
            Become a Candidate
          </h1>
          <p className="desc w-[312px] text-[14px] text-[#636A80] font-[400] leading-[20px] opacity-[0.8] mb-[26px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras cursus a dolor convallis efficitur.
          </p>
          <Button className="btn-primary bg-white py-[12px] px-[24px] rounded-[3px]">
            <span className="text-[#0851A3]">Register Now</span>
            <LocalIcon iconName="iconArrowRight" />
          </Button>
        </div>
        <div className="card bg-[#0851A3] w-[600px]  p-[50px] gap-[26px] rounded-[12px]">
          <h1 className="title text-[32px] text-[#FFF] font-[500] leading-[40px] mb-[16px]">
            Become a Employers
          </h1>
          <p className="desc w-[312px] text-[14px] text-[#fff] font-[400] leading-[20px] opacity-[0.8] mb-[26px]">
            Cras in massa pellentesque, mollis ligula non, luctus dui. Morbi sed efficitur dolor. Pelque augue risus, aliqu.
          </p>
          <Button className="btn-primary bg-white py-[12px] px-[24px] rounded-[3px] ">
            <span className="text-[#0A65CC]">Register Now</span>
            <LocalIcon iconName="iconArrowRight" />
          </Button>
        </div>
      </div>
    </>
  )
}

export default SectionRegister;