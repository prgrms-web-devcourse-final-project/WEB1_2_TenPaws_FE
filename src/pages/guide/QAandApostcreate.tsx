import GuideNavigation from "../../components/GuideNavigation";
import Walk from "../../../public/walk.png";
import { NavLink, useBlocker } from "react-router-dom";
import { useState } from "react";
import ReactQuill from "react-quill";

const QAandApostcreate = () => {
  const [content, setContent] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      ["link", "image"],
      ["clean"]
    ]
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "list",
    "bullet",
    "align",
    "link",
    "image"
  ];

  //글작성 중 이탈 시도 경고
  useBlocker(({ currentLocation, nextLocation }) => {
    if (currentLocation.pathname !== nextLocation.pathname) {
      return !window.confirm("작성 된 내용은 저장되지않습니다. 정말 나가시겠습니까?");
    }
    return false;
  });

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="max-w-[1200px] mx-auto ">
        <div className=" relative">
          <div className="bg-slate-400"></div>
          <img src={Walk} alt="walk" className="w-[1200px] h-[400px] opacity-85 object-cover object-bottom" />
          <div className="absolute inset-0 flex flex-col justify-center text-center font-bold">
            <div className="text-[50px] pb-2">문의 게시판</div>
            <div className="text-[25px]">무엇이든 물어보세요.</div>
          </div>
        </div>
        <GuideNavigation />
        <div className="max-w-[1100px] mx-auto ">
          <div className="bg-[#AB654B]/90 p-8 rounded-lg">
            <div className="mb-6">
              <input type="text" className="w-full p-3" />
            </div>
            <div className="h-[1000px] bg-white">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                formats={formats}
                className="h-[958px] "
                placeholder="내용을 입력하세요"
              />
            </div>
          </div>
          <div className="mt-7">
            <button
              className="float-right   mb-20 bg-[#AB654B]
                  /90 p-4 text-white font-bold text-[20px]">
              작성하기
            </button>

            <NavLink to="/guide/qna">
              <button
                className="float-right mr-8 mb-20 bg-[#AB654B]
              /90 p-4 text-white font-bold text-[20px]">
                취소
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QAandApostcreate;
