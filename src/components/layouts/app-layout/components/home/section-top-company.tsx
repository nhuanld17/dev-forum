import { LocalIcon } from "src/assets/icons";
import { Button } from "src/components/ui";

function SectionTopCompanies () {
  return (
    <>
      <div className="top-company px-[50px] py-[100px] border-b-[1px] border-b-[#ddd]">
        <h1 className="text-[40px] font-[500] leading-[48px] mb-[50px]">Top companies</h1>

        <div className="list-company flex flex-wrap justify-between items-center">
          <div className="box p-[32px] w-[280px] rounded-[12px] border border-solid border-[#EDEFF5] mb-[24px] mr-[24px]">
            <div className="box-head flex mb-[32px] items-center">
              <LocalIcon iconName="iconFaceBook" width={56} height={56}/>
              <div className="content ml-[16px]">
                <p className="name text-[18px] font-[500] leading-[28px]">Facebook</p>
                <div className="location flex items-center">
                  <LocalIcon iconName="iconMap" width={18} height={18} />
                  <span className="name ml-[6px] text-[14px] font-[400] leading-[20px] text-[#939AAD]">
                    United States
                  </span>
                </div>
              </div>
            </div>
            <Button className="w-full py-[12px] px-[24px] gap-[12] border rounded-[3px] bg-[#E7EFFA] group">
              <span className="text-[16px] font-[600] leading-[24px] text-[#0A65CC] group-hover:text-white">Open Position</span>
            </Button>
          </div>
          <div className="box p-[32px] w-[280px] rounded-[12px] border border-solid border-[#EDEFF5] mb-[24px] mr-[24px]">
            <div className="box-head flex mb-[32px] items-center">
              <LocalIcon iconName="iconUpWork" width={56} height={56}/>
              <div className="content ml-[16px]">
                <p className="name text-[18px] font-[500] leading-[28px]">Upwork</p>
                <div className="location flex items-center">
                  <LocalIcon iconName="iconMap" width={18} height={18} />
                  <span className="name ml-[6px] text-[14px] font-[400] leading-[20px] text-[#939AAD]">United States</span>
                </div>
              </div>
            </div>
            <Button className="w-full py-[12px] px-[24px] gap-[12] border rounded-[3px] bg-[#E7EFFA] group">
              <span className="text-[16px] font-[600] leading-[24px] text-[#0A65CC] group-hover:text-white">Open Position</span>
            </Button>
          </div>
          <div className="box p-[32px] w-[280px] rounded-[12px] border border-solid border-[#EDEFF5] mb-[24px] mr-[24px]">
            <div className="box-head flex mb-[32px] items-center">
              <LocalIcon iconName="iconSlack" width={56} height={56}/>
              <div className="content ml-[16px]">
                <p className="name text-[18px] font-[500] leading-[28px]">Slack</p>
                <div className="location flex items-center">
                  <LocalIcon iconName="iconMap" width={18} height={18} />
                  <span className="name ml-[6px] text-[14px] font-[400] leading-[20px] text-[#939AAD]">United States</span>
                </div>
              </div>
            </div>
            <Button className="w-full py-[12px] px-[24px] gap-[12] border rounded-[3px] bg-[#E7EFFA] group">
              <span className="text-[16px] font-[600] leading-[24px] text-[#0A65CC] group-hover:text-white">Open Position</span>
            </Button>
          </div>
          <div className="box p-[32px] w-[280px] rounded-[12px] border border-solid border-[#EDEFF5] mb-[24px]">
            <div className="box-head flex mb-[32px] items-center">
              <LocalIcon iconName="iconFreePik" width={56} height={56}/>
              <div className="content ml-[16px]">
                <p className="name text-[18px] font-[500] leading-[28px]">Freepik</p>
                <div className="location flex items-center">
                  <LocalIcon iconName="iconMap" width={18} height={18} />
                  <span className="name ml-[6px] text-[14px] font-[400] leading-[20px] text-[#939AAD]">United States</span>
                </div>
              </div>
            </div>
            <Button className="w-full py-[12px] px-[24px] gap-[12] border rounded-[3px] bg-[#E7EFFA] group">
              <span className="text-[16px] font-[600] leading-[24px] text-[#0A65CC] group-hover:text-white">Open Position</span>
            </Button>
          </div>
          <div className="box p-[32px] w-[280px] rounded-[12px] border border-solid border-[#EDEFF5] mr-[24px]">
            <div className="box-head flex mb-[32px] items-center">
              <LocalIcon iconName="iconFaceBook" width={56} height={56}/>
              <div className="content ml-[16px]">
                <p className="name text-[18px] font-[500] leading-[28px]">Facebook</p>
                <div className="location flex items-center">
                  <LocalIcon iconName="iconMap" width={18} height={18} />
                  <span className="name ml-[6px] text-[14px] font-[400] leading-[20px] text-[#939AAD]">United States</span>
                </div>
              </div>
            </div>
            <Button className="w-full py-[12px] px-[24px] gap-[12] border rounded-[3px] bg-[#E7EFFA] group">
              <span className="text-[16px] font-[600] leading-[24px] text-[#0A65CC] group-hover:text-white">Open Position</span>
            </Button>
          </div>
          <div className="box p-[32px] w-[280px] rounded-[12px] border border-solid border-[#EDEFF5] mr-[24px]">
            <div className="box-head flex mb-[32px] items-center">
              <LocalIcon iconName="iconUpWork" width={56} height={56}/>
              <div className="content ml-[16px]">
                <p className="name text-[18px] font-[500] leading-[28px]">Upwork</p>
                <div className="location flex items-center">
                  <LocalIcon iconName="iconMap" width={18} height={18} />
                  <span className="name ml-[6px] text-[14px] font-[400] leading-[20px] text-[#939AAD]">United States</span>
                </div>
              </div>
            </div>
            <Button className="w-full py-[12px] px-[24px] gap-[12] border rounded-[3px] bg-[#E7EFFA] group">
              <span className="text-[16px] font-[600] leading-[24px] text-[#0A65CC] group-hover:text-white">Open Position</span>
            </Button>
          </div>
          <div className="box p-[32px] w-[280px] rounded-[12px] border border-solid border-[#EDEFF5] mr-[24px]">
            <div className="box-head flex mb-[32px] items-center">
              <LocalIcon iconName="iconSlack" width={56} height={56}/>
              <div className="content ml-[16px]">
                <p className="name text-[18px] font-[500] leading-[28px]">Slack</p>
                <div className="location flex items-center">
                  <LocalIcon iconName="iconMap" width={18} height={18} />
                  <span className="name ml-[6px] text-[14px] font-[400] leading-[20px] text-[#939AAD]">United States</span>
                </div>
              </div>
            </div>
            <Button className="w-full py-[12px] px-[24px] gap-[12] border rounded-[3px] bg-[#E7EFFA] group">
              <span className="text-[16px] font-[600] leading-[24px] text-[#0A65CC] group-hover:text-white">Open Position</span>
            </Button>
          </div>
          <div className="box p-[32px] w-[280px] rounded-[12px] border border-solid border-[#EDEFF5]">
            <div className="box-head flex mb-[32px] items-center">
              <LocalIcon iconName="iconFreePik" width={56} height={56}/>
              <div className="content ml-[16px]">
                <p className="name text-[18px] font-[500] leading-[28px]">Freepik</p>
                <div className="location flex items-center">
                  <LocalIcon iconName="iconMap" width={18} height={18} />
                  <span className="name ml-[6px] text-[14px] font-[400] leading-[20px] text-[#939AAD]">United States</span>
                </div>
              </div>
            </div>
            <Button className="w-full py-[12px] px-[24px] gap-[12] border rounded-[3px] bg-[#E7EFFA] group">
              <span className="text-[16px] font-[600] leading-[24px] text-[#0A65CC] group-hover:text-white">Open Position</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionTopCompanies;