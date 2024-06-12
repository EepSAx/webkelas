import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Senin = React.lazy(() => import("../components/Mapel/Senin"));
const Selasa = React.lazy(() => import("../components/Mapel/Selasa"));
const Rabu = React.lazy(() => import("../components/Mapel/Rabu"));
const Kamis = React.lazy(() => import("../components/Mapel/Kamis"));
const Jumat = React.lazy(() => import("../components/Mapel/Jumat"));

const Schedule = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = daysOfWeek[new Date().getDay()];
  const currentWeek = Math.floor((new Date().getDate() - 1) / 7) + 1;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  let RuangKelas = [];

  // Menentukan ruang kelas berdasarkan minggu saat ini
  if (currentWeek === 1 || currentWeek === 3) {
    RuangKelas = [
      ["Bahasa Inggris Ruang 301"],
      ["Algoritma dan Pemrograman Ruang 402", "Matriks dan Ruang Vektor Ruang 302"],
      ["Probabilitas dan Statistika Ruang 302", "Sistem Basis Data Ruang 202"],
      ["Dasar Keuangan Sistem Informasi Ruang 302"],
      ["Kepemimpinan dan Komunikasi Interpersonal Ruang 301"],
    ];
  } else if (currentWeek === 2 || currentWeek === 4) {
    RuangKelas = [
      ["Bahasa Inggris Ruang 301"],
      ["Algoritma dan Pemrograman Ruang 402", "Matriks dan Ruang Vektor Ruang 302"],
      ["Probabilitas dan Statistika Ruang 302", "Sistem Basis Data Ruang 202"],
      ["Dasar Keuangan Sistem Informasi Ruang 302"],
      ["Kepemimpinan dan Komunikasi Interpersonal Ruang 301"],
    ];
  }

  const dayComponents = [
    null, // Kosongkan indeks 0
    Senin,
    Selasa,
    Rabu,
    Kamis,
    Jumat,
  ];

  // Menampilkan komponen berdasarkan hari saat ini
  const TodayComponent = dayComponents[new Date().getDay()];

  // Menampilkan nama-nama ruang kelas sesuai dengan hari dan minggu saat ini
  const currentKelasNames = RuangKelas[new Date().getDay() - 1];

  return (
    <>
      {/* Jadwal Mapel */}
      <div className="lg:flex lg:justify-center lg:gap-32 lg:mb-10 lg:mt-16 ">
        <div className="text-white flex flex-col justify-center items-center mt-8 md:mt-3 overflow-y-hidden">
          <div
            className="text-2xl font-medium mb-5"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            {currentDay}
          </div>
          <div data-aos="fade-up" data-aos-duration="400">
            {TodayComponent ? (
              <React.Suspense fallback={<p>Loading...</p>}>
                <TodayComponent />
              </React.Suspense>
            ) : (
              <p className="opacity-50">Tidak Ada Jadwal Hari Ini</p>
            )}
          </div>
        </div>
      </div>

      {/* Ruang Kelas */}
      <div className="text-white flex flex-col justify-center items-center mt-8 lg:mt-0 overflow-y-hidden">
        <div
          className="text-2xl font-medium mb-5 text-center"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Ruang Kelas
        </div>
        {currentKelasNames && currentKelasNames.length > 0 ? (
          currentKelasNames.map((kelasName, index) => (
            <div
              key={index}
              className={` border-t-2 border-white flex justify-center py-[0.50rem] w-72 px-3 ${
                index === currentKelasNames.length - 1 ? "border-b-2" : ""
              }`}
              data-aos="fade-up"
              data-aos-duration={600 + index * 100}
            >
              <div className="text-base font-medium">{kelasName}</div>
            </div>
          ))
        ) : (
          <p className="opacity-50">Tidak ada perkuliahan hari ini</p>
        )}
      </div>
    </>
  );
};

export default Schedule;
