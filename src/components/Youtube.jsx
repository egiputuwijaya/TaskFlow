export default function VideoYoutube() {
  return (
    <div
      className="bg-white flex flex-col justify-center items-center py-10 bg-center bg-cover relative"
      style={{ backgroundImage: "url('/Comment_bg.svg')" }}
    >
      {/* Bagian SVG (ajakan menonton) */}
      <div className="mb-6">
        <img
          src="/Youtube.svg"
          alt="Ayo tonton di Youtube"
          className="w-50 md:w-80"
        />
      </div>

      {/* Bagian Video */}
      <div className="w-full max-w-5xl aspect-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Es0NpdsFy3g?si=HznZMncyZaHtL0PK"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="w-full h-full rounded-xl shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}
