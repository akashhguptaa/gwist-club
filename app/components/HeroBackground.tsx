const HeroBackground = () => {
  return (
    <>
      <div className="absolute w-[400px] h-[400px] -top-48 -left-48 rounded-full border border-gray-200 opacity-30" />
      <div className="absolute w-[300px] h-[300px] bottom-20 -right-32 rounded-full border border-gray-200 opacity-30" />
      <div className="absolute h-96 w-px top-0 left-1/4 bg-gray-200 opacity-30" />
      <div className="absolute h-64 w-px bottom-0 right-1/3 bg-gray-200 opacity-30" />

      <svg
        className="absolute top-0 left-0 w-96 h-96 -translate-x-20 -translate-y-20"
        viewBox="0 0 400 400"
      >
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="none"
          stroke="#136263"
          strokeWidth="1"
          opacity="0.15"
        />
        <circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="#136263"
          strokeWidth="1.5"
          opacity="0.2"
        />
      </svg>

      <svg
        className="absolute bottom-0 right-0 w-[500px] h-[500px] translate-x-32 translate-y-32"
        viewBox="0 0 400 400"
      >
        <circle
          cx="200"
          cy="200"
          r="190"
          fill="none"
          stroke="#136263"
          strokeWidth="1"
          opacity="0.12"
        />
        <circle
          cx="200"
          cy="200"
          r="160"
          fill="none"
          stroke="#136263"
          strokeWidth="1.5"
          opacity="0.18"
        />
        <circle
          cx="200"
          cy="200"
          r="130"
          fill="none"
          stroke="#136263"
          strokeWidth="1"
          opacity="0.15"
        />
      </svg>
    </>
  );
};

export default HeroBackground;

