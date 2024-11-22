import { LocalIcon } from "src/assets/icons";
import { LocalImage } from "src/assets/images";
import { Button } from "src/components/ui";

function SectionFindJob() {
	return (
		<>
			<section className="section-find-job bg-[#E4E5E8] px-[50px] py-[70px]">
				<div className="body flex justify-between items-center">
					<div className="content w-[50%]">
						<div className="title pr-[30px] mb-[24px]">
							<h1 className="text-[56px] leading-[64px] font-[500]">
								Find a job that suits your interest & skills.
							</h1>
						</div>
						<div className="description pr-[50px] mb-[32px]">
							<p className="text-[18px] text-[#5E6670] font-[400] leading-[28px]">
								Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.
							</p>
						</div>
						<div className="search-area w-full bg-white p-[12px] rounded-[10px]">
							<form action="#" method="GET" className="flex items-center">
								<div className="name flex">
									<LocalIcon className="mr-[5px]" iconName="searchIcon" height={24} width={24} />
									<input className="outline-none" type="text" name="job" id="job" placeholder="Job name" />
								</div>
								<div className="location flex">
									<LocalIcon className="mr-[5px]" iconName="iconMap" height={24} width={24} />
									<input className="outline-none" type="text" name="location" id="location" placeholder="Location" />
								</div>
								<Button variant="filled" size="md" className="w-[131px]">Search</Button>
							</form>
						</div>
					</div>
					<div className="picture w-[40%] flex items-center justify-center">
						<LocalImage src="coder_image" height={492} width={420} />
					</div>
				</div>
				<div className="statistic mt-[100px] flex justify-between">
					<div className="statistic-item flex items-center bg-white p-[20px] rounded-[8px] w-[280px] h-[112px]">
						<LocalImage className="mr-[20px]" src="static_icon_1" height={72} width={72} />
						<div>
							<h3 className="number text-[24px] font-[500] leading-[32px]">175,324</h3>
							<p className="desc text-[16px] font-[400] leading-[24px] text-[#767F8C]">Live Job</p>
						</div>
					</div>
					<div className="statistic-item flex items-center bg-white p-[20px] rounded-[8px] w-[280px] h-[112px]">
						<LocalImage className="mr-[20px]" src="static_icon_2" height={72} width={72} />
						<div>
							<h3 className="number text-[24px] font-[500] leading-[32px]">97,354</h3>
							<p className="desc text-[16px] font-[400] leading-[24px] text-[#767F8C]">Companies</p>
						</div>
					</div>
					<div className="statistic-item flex items-center bg-white p-[20px] rounded-[8px] w-[280px] h-[112px]">
						<LocalImage className="mr-[20px]" src="static_icon_3" height={72} width={72} />
						<div>
							<h3 className="number text-[24px] font-[500] leading-[32px]">38,571</h3>
							<p className="desc text-[16px] font-[400] leading-[24px] text-[#767F8C]">Candidates</p>
						</div>
					</div>
					<div className="statistic-item flex items-center bg-white p-[20px] rounded-[8px] w-[300px] h-[112px]">
						<LocalImage className="mr-[20px]" src="static_icon_4" height={72} width={72} />
						<div>
							<h3 className="number text-[24px] font-[500] leading-[32px]">7,189</h3>
							<p className="desc text-[16px] font-[400] leading-[24px] text-[#767F8C]">New Jobs</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default SectionFindJob;