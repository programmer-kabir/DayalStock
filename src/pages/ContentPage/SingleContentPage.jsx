import { useParams } from "react-router-dom";
import {
  ArrowLeft,
  ChevronDown,
  Download,
  Grid2X2Plus,
  Images,
  Share2,
  Sparkles,
  UserPlus,
  CheckCircle2,
} from "lucide-react";
import useContents from "../../utlis/Hooks/useContents";
import useAuthor from "../../utlis/Hooks/useAuthor";
import { useState } from "react";

const SingleContentPage = () => {
  const { slug } = useParams();
const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const { data: contents = [], isLoading, error } = useContents();
  const { data: author = [], isLoading:isAuthorLoading, error:isAuthorError } = useAuthor();

  const currentData = contents?.find((content) => content?.slug === slug);
const currentAuthor = author.find(data=>Number(data.id)===Number(currentData?.author_id))
const authorResource = contents?.filter((content)=>Number(content?.author_id)===Number(currentAuthor?.id))


  const imageUrl = `https://dayalstock.com/${currentData?.image_url}`;
const allFiles = currentData?.files || [];
const downloadFiles = allFiles.filter((file) => !file.is_main_file);
const handleDownloadZip = () => {
  const zipUrl = `https://dayalstock.com/api_v1/contents/downloadContentZip.php?content_id=${currentData.id}`;

  console.log("Downloading ZIP:", zipUrl);

  window.location.href = zipUrl;
};
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error || !currentData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Content not found
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white">
      <div className="border-t border-gray-100">
        <div className="max-w-[1500px] mx-auto px-5 lg:px-10 py-10">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-10">
            {/* Left Side */}
            <div>
              <button
                onClick={() => window.history.back()}
                className="w-11 h-11 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-500 hover:text-black mb-6"
              >
                <ArrowLeft size={20} />
              </button>

              <div className="flex justify-center">
                <div className="relative inline-block">
                  {currentData?.is_premium && (
                    <div className="absolute top-0 left-0 z-10 overflow-hidden w-20 h-20">
                      <div className="absolute top-[18px] -left-[26px] w-[110px] rotate-[-45deg] bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-bold text-center py-1">
                        Pro
                      </div>
                    </div>
                  )}

                  <img
                    src={imageUrl}
                    alt={currentData?.title}
                    className="w-full max-w-[890px] max-h-[650px] object-contain bg-[#f4f6f8]"
                  />
                </div>
              </div>

              <p className="text-center text-sm text-gray-400 mt-4">
                {currentData?.title}
              </p>
            </div>

            {/* Right Side */}
            <aside className="xl:pt-10">
              {/* Author */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 border">
                    <img
                      src={`${import.meta.env.VITE_IMG_KEY}/${currentAuthor?.avatar}`}
                      alt="author"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 text-sm">
                      {currentAuthor?.name}
                    </h4>
                    <p className="text-xs text-gray-400">
                      {authorResource?.length || 0} Resources
                    </p>
                  </div>
                </div>

                <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-xs font-semibold flex flex-col items-center gap-1">
                  <UserPlus size={17} />
                  Follow
                </button>
              </div>

              {/* Download Button */}
<div className="relative">
  <button
  onClick={handleDownloadZip}    className={`w-full h-[72px] rounded-lg px-5 text-white font-bold text-lg flex items-center gap-3 ${
      currentData?.is_premium
        ? "bg-gradient-to-r from-orange-500 to-orange-600"
        : "bg-gradient-to-r from-emerald-500 to-green-600"
    }`}
  >
    <Download size={21} className="shrink-0" />

    <div className="text-left leading-tight">
      <p>
        {currentData?.is_premium ? "Pro Download" : "Free Download"}
      </p>

      <span className="text-xs font-normal opacity-90">
        {currentData?.is_premium
          ? "No Attribution Required"
          : "Free For Personal Use"}
      </span>
    </div>

    <ChevronDown
      size={18}
      className={`ml-auto shrink-0 transition-transform ${
        showDownloadOptions ? "rotate-180" : ""
      }`}
    />
  </button>

  {showDownloadOptions && (
    <div className="absolute z-30 mt-2 w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-xl">
      {downloadFiles.length > 0 ? (
        downloadFiles.map((file) => (
          <a
            key={file.id}
            href={`https://dayalstock.com/${file.file_url}`}
            download={file.file_name}
            onClick={() => {
              console.log("Downloading:", file);
              setShowDownloadOptions(false);
            }}
            className="flex items-center justify-between border-b border-gray-100 px-4 py-3 last:border-b-0 hover:bg-gray-50"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-gray-700">
                {file.file_name}
              </p>

              <p className="mt-0.5 text-xs uppercase text-gray-400">
                {file.file_type}
                {file.width && file.height
                  ? ` • ${file.width} × ${file.height}`
                  : ""}
              </p>
            </div>

            <Download size={18} className="shrink-0 text-emerald-600" />
          </a>
        ))
      ) : (
        <p className="px-4 py-4 text-sm text-gray-500">
          No downloadable file available.
        </p>
      )}
    </div>
  )}
</div>
              {/* AI Button */}
              <button className="w-full mt-4 h-14 border-2 border-cyan-400 rounded-lg font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent flex items-center justify-center gap-2">
                <Sparkles size={20} className="text-pink-500" />
                Reimagine This Image
              </button>

              {/* Action Buttons */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                <button className="bg-gray-100 hover:bg-gray-200 rounded-lg h-16 flex flex-col justify-center items-center gap-1 text-xs font-medium">
                  <Grid2X2Plus size={20} />
                  Collection
                </button>

                <button className="bg-gray-100 hover:bg-gray-200 rounded-lg h-16 flex flex-col justify-center items-center gap-1 text-xs font-medium">
                  <Images size={20} />
                  Similar
                </button>

                <button className="bg-gray-100 hover:bg-gray-200 rounded-lg h-16 flex flex-col justify-center items-center gap-1 text-xs font-medium">
                  <Share2 size={20} />
                  Share
                </button>
              </div>

              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <CheckCircle2 size={19} className="text-green-500" />
                  <span>
                    {currentData?.license_type === "free"
                      ? "Free License"
                      : "Pro Standard License"}
                  </span>
                  <button className="text-orange-500 font-medium">
                    What's This?
                  </button>
                </div>
              </div>

              {/* More Info */}
              <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                <button className="w-full px-4 py-4 flex justify-between items-center text-sm font-medium text-gray-700">
                  More Info
                  <ChevronDown size={18} />
                </button>

                <div className="px-4 pb-4 text-sm text-gray-500 space-y-2">
                  <p>
                    <span className="font-semibold text-gray-700">Type:</span>{" "}
                    {currentData?.content_type}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-700">Format:</span>{" "}
                    {currentData?.file_type?.toUpperCase()}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-700">Size:</span>{" "}
                    {currentData?.width} × {currentData?.height}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-700">
                      Orientation:
                    </span>{" "}
                    {currentData?.orientation}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleContentPage;