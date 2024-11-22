import { LocalIcon } from "src/assets/icons";

export const SectionPopularCategory = () => {
	return (
		<>
			<section id="polular-category" className="popular-cate px-[50px] py-[100px] bg-[#E4E5E8] flex flex-col">
				<h1 className="title text-[40px] font-[500] leading-[48px] mb-[50px]">
					Popular category
				</h1>
				<div className="category-list flex flex-wrap justify-between items-center">
					<div className="category-item w-[300px] mb-[24px] bg-white rounded-[8px] p-[24px] flex items-center">
						<div className="symbol">
							<LocalIcon iconName="iconPen" height={68} width={68} />
						</div>
						<div className="content ml-[16px]">
							<h1 className="title text-[18px] font-[500] leading-[28px]">Graphic & Design</h1>
							<p className="number-position">357 Open position</p>
						</div>
					</div>
					<div className="category-item w-[300px] mb-[24px] bg-white rounded-[8px] p-[24px] flex items-center">
						<div className="symbol">
							<LocalIcon iconName="iconCode" height={68} width={68} />
						</div>
						<div className="content ml-[16px]">
							<h1 className="title text-[18px] font-[500] leading-[28px]">Code & Programing</h1>
							<p className="number-position">357 Open position</p>
						</div>
					</div>
					<div className="category-item w-[300px] mb-[24px] bg-white rounded-[8px] p-[24px] flex items-center">
						<div className="symbol">
							<LocalIcon iconName="iconMarketing" height={68} width={68} />
						</div>
						<div className="content ml-[16px]">
							<h1 className="title text-[18px] font-[500] leading-[28px]">Digital Marketing</h1>
							<p className="number-position">357 Open position</p>
						</div>
					</div>
					<div className="category-item w-[300px] mb-[24px] bg-white rounded-[8px] p-[24px] flex items-center">
						<div className="symbol">
							<LocalIcon iconName="iconVideo" height={68} width={68} />
						</div>
						<div className="content ml-[16px]">
							<h1 className="title text-[18px] font-[500] leading-[28px]">Video & Animation</h1>
							<p className="number-position">357 Open position</p>
						</div>
					</div>
					<div className="category-item w-[300px] bg-white rounded-[8px] p-[24px] flex items-center">
						<div className="symbol">
							<LocalIcon iconName="iconMusic" height={68} width={68} />
						</div>
						<div className="content ml-[16px]">
							<h1 className="title text-[18px] font-[500] leading-[28px]">Music & Audio</h1>
							<p className="number-position">357 Open position</p>
						</div>
					</div>
					<div className="category-item w-[300px] bg-white rounded-[8px] p-[24px] flex items-center">
						<div className="symbol">
							<LocalIcon iconName="iconFinance" height={68} width={68} />
						</div>
						<div className="content ml-[16px]">
							<h1 className="title text-[18px] font-[500] leading-[28px]">Account & Finance</h1>
							<p className="number-position">357 Open position</p>
						</div>
					</div>
					<div className="category-item w-[300px] bg-white rounded-[8px] p-[24px] flex items-center">
						<div className="symbol">
							<LocalIcon iconName="iconHealthy" height={68} width={68} />
						</div>
						<div className="content ml-[16px]">
							<h1 className="title text-[18px] font-[500] leading-[28px]">Health & Care</h1>
							<p className="number-position">357 Open position</p>
						</div>
					</div>
					<div className="category-item w-[300px] bg-white rounded-[8px] p-[24px] flex items-center">
						<div className="symbol">
							<LocalIcon iconName="iconData" height={68} width={68} />
						</div>
						<div className="content ml-[16px]">
							<h1 className="title text-[18px] font-[500] leading-[28px]">Data & Science</h1>
							<p className="number-position">357 Open position</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
