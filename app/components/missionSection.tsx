const MissionSection = () => {
  return (
    <section className="bg-[#2E3538] py-18 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute w-[200px] h-[200px] -left-24 top-1/2 -translate-y-1/2 rounded-full border border-white/10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#D6C3A9] uppercase tracking-[0.3em] text-sm mb-4">
            Our Mission
          </p>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-4">
            Make Plaksha equitable and inclusive by nurturing an ecosystem of
            <span className="text-[#C69653]"> women in STEM</span>
          </h2>

          <div className="w-24 h-px bg-amber-200/30 mx-auto" />
        </div>
      </div>

      {/* Decorative Wave Lines */}
      <div className="absolute bottom-0 right-0 w-1/2 h-48 opacity-10">
        <svg viewBox="0 0 400 100" className="w-full h-full">
          <path
            d="M0 50 Q50 20 100 50 T200 50 T300 50 T400 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-amber-200"
          />
          <path
            d="M0 60 Q50 30 100 60 T200 60 T300 60 T400 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-amber-200"
          />
          <path
            d="M0 70 Q50 40 100 70 T200 70 T300 70 T400 70"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-amber-200"
          />
        </svg>
      </div>
    </section>
  );
};

export default MissionSection;
