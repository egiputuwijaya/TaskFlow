export default function VideoYoutube() {
  return (
    <div
      className="bg-white flex flex-col justify-center items-center py-10 bg-center bg-cover relative"
      style={{ backgroundImage: "url('/Comment_bg.svg')" }}
    >
      {/* Bagian SVG (ajakan menonton) */}
      <div className="mb-6">
        <img src="/Youtube.svg" alt="Ayo tonton di Youtube" className="w-50 md:w-80" />
      </div>

      {/* Bagian Video */}
      <div className="w-full max-w-5xl aspect-video">
        <iframe
          width="1920"
          height="1080"
          src="https://www.youtube.com/embed/U8oagjVCpPo?si=4Wqy6Tje2rMaU_Kj"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full rounded-xl shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}
