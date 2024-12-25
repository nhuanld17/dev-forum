import { useState } from "react";
import { Button, useOverlay } from "src/components/ui";
import { OverlayCandidateProfile } from "src/components/ui/overlay/components/company-overlay";
import { useDeleteApplicationById } from "src/features/home/api/employer/delete-application";
import { useGetApplicationDto } from "src/features/home/api/employer/get-application";
import { ApplicationDto } from "src/types";

export const ApplicationsRoute = () => {
  const { display, dismiss } = useOverlay(); // Overlay hiển thị thông tin candidate
  const [sortDirection, setSortDirection] = useState("desc");
  const [page, setPage] = useState(1);
  const [textSearch, setTextSearch] = useState(""); // Lưu giá trị input
  const [searchQuery, setSearchQuery] = useState(""); // Lưu giá trị thực tế để gọi API

  // sử dụng useDeleteApplicationById để xóa ứng viên
  const deleteApplicationById = useDeleteApplicationById();

  // Lấy id của job từ url route
  const url = window.location.pathname;
  const match = url.match(/\/(\d+)$/); // Tìm chữ số ở cuối chuỗi
  const id = match ? match[1] : ""; // Lấy chữ số hoặc null nếu không tìm thấy

  // Lấy dữ liệu từ API
  const { data, isLoading } = useGetApplicationDto(id, searchQuery, page, sortDirection);
  const applications = data?.data as ApplicationDto[];

  if (isLoading) return <div>Loading...</div>;
  // Lấy tổng số việc làm từ dữ liệu trả về
  const totalApplications = data?.data.meta.total;
  const totalPages = data?.data.meta.pages; // Tổng số trang

  // Hàm thay đổi hướng sắp xếp
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortDirection(e.target.value);
  };

  // Hàm thay đổi trang
  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };
  //  const link = "https://api.cloudinary.com/v1_1/dhsv9jnul/raw/download?api_key=818748115127534&attachment=true&audit_context=eyJhY3Rvcl90eXBlIjoidXNlciIsImFjdG9yX2lkIjoiZjY2ZDE0ODk2YTE5YjI3ZDRiOGQ0YzAxMzFmMTM4MTciLCJ1c2VyX2V4dGVybmFsX2lkIjoiZjQ1ZmE3MzFmMTIwNjkzMGM1MjFkZDVmZGExMWFlIiwidXNlcl9jdXN0b21faWQiOiJkeHVhbnRpZW41QGdtYWlsLmNvbSIsImNvbXBvbmVudCI6ImNvbnNvbGUifQ%3D%3D&public_id=my_job%2Fdangngoctai.pdf&signature=95ffa2b4166d6937eb989d0025eafb5ea2a2e3ed&source=ml&target_filename=DangNgocTai_BackendDeveloper&timestamp=1735098485&type=upload";
  // Hàm kích hoạt tìm kiếm
  const handleSearch = () => {
    setSearchQuery(textSearch); // Cập nhật giá trị để gọi API
    setPage(1); // Reset về trang đầu tiên khi tìm kiếm
  };

  const handleDelete = (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this application?");
    if (confirmed) {
      deleteApplicationById.mutate(id); // kích hoạt mutation
    }
    window.location.reload(); // Refresh trang sau khi xóa
  }
  const handleDownload = async (link:string) => {
    const url = link;
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = "CV.jpg"; // Đặt tên file khi tải xuống
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Giải phóng URL Blob
    window.URL.revokeObjectURL(blobUrl);
  };



  return (
    <>
      <div className="pt-[20px] w-[840px] flex-col gap-3 justify-center">
        <div className="mb-[20px] flex items-center w-full">
          <input
            type="text"
            className="w-[400px] mr-[10px] h-[40px] px-[10px] border-[1px] border-[#E4E5E8] rounded-[4px] outline-none"
            placeholder="Search by name"
            value={textSearch}
            onChange={(e) => setTextSearch(e.target.value)} // Chỉ lưu giá trị input, không gọi API
          />
          <Button
            onClick={handleSearch} // Chỉ gọi API khi nhấn nút
            className="w-[100px] h-[40px] bg-[#FF5C01] text-white rounded-[4px]"
          >
            Search
          </Button>
        </div>
        <div className="flex items-center justify-between mb-[10px] w-full">
          <h1>Total ({totalApplications})</h1>
          <select
            className="text-[16px] font-[400] leading-[24px] text-[#5E6670] px-[18px] py-[12px] outline-none border-[1px] border-[#E4E5E8] rounded-[4px] appearance: none"
            name="job"
            id="job"
            value={sortDirection}
            onChange={handleSortChange}
          >
            <option value="desc">Latest</option>
            <option value="asc">Oldest</option>
          </select>
        </div>
        <div className="flex flex-wrap">
          {applications ? (
            applications.result.map((application: ApplicationDto) => (
              <div key={application.applicationId}
                className="w-[250px] bg-[#f1f2f480] p-[16px] rounded-[4px] mr-[20px] mb-[20px] border-[1px]">
                <div className="top flex items-center">
                  <div className="w-[54px] h-[54px] rounded-full overflow-hidden mr-[10px]">
                    <img src={application.candidatePictureUrl} alt="CV" />
                  </div>
                  <div>
                    <a
                      onClick={() => { display(<OverlayCandidateProfile id={application.candidateId} />); }}
                      className="text-[20px] cursor-pointer font-[500] text-[#0A65CC] leading-[20px]">
                      {application.candidateName}
                    </a>
                    <div className="text-[#767F8C] text-[18px]">{application.candidateTitle}</div>
                  </div>
                </div>
                <hr className="h-[2px] mt-[16px] mb-[16px] text-[#E4E5E8]" />
                <div className="mid flex flex-col justify-center">
                  <ul className="text-[#5E6670]">
                    <li>{application.experience} of experience</li>
                    <li>Education: {application.education}</li>
                    <li>Email: {application.email}</li>
                  </ul>
                </div>
                <div className="bottom mt-[16px] flex justify-between">
                  <button
                    onClick={() =>handleDownload(application.cvLink)}
                    className="text-[#0A65CC] font-[600]"
                  >
                    Download CV
                  </button>

                  <a className="text-[#E05251] font-[600]" href="#" onClick={() => handleDelete(application.applicationId)}>Delete</a>
                </div>
              </div>
            ))
          ) : (
            <div>Empty</div>
          )}
        </div>
        {/* Phân trang */}
        <div className="flex justify-center mt-4 mb-[10px]">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 border rounded-l-lg text-[#5E6670] bg-[#E4E5E8] disabled:opacity-50"
          >
            Prev
          </button>
          <span className="px-4 py-2 text-[#5E6670]">
            {page} / {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
            className="px-4 py-2 border rounded-r-lg text-[#5E6670] bg-[#E4E5E8] disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};
