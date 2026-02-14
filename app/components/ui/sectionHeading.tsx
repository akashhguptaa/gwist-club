interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
  dark?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  className,
  align = "center",
  dark = false,
}: SectionHeadingProps) => {
  return (
    <div
      className={`mb-12 ${
        align === "center" ? "text-center" : ""
      } ${className || ""}`}
    >
      <h2
        className={`font-serif text-4xl md:text-5xl font-light mb-4 ${
          dark ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-amber-200/80" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
