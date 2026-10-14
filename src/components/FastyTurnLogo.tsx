interface FastyTurnLogoProps {
  size?: number;
  className?: string;
  withText?: boolean;
  textClassName?: string;
}

export function FastyTurnLogo({ size = 40, className = '', withText = true, textClassName = '' }: FastyTurnLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/fastyturn-logo.svg"
        alt="FastyTurn"
        style={{ width: size, height: size }}
        className="object-contain"
      />
      {withText && (
        <span className={`font-extrabold leading-tight ${textClassName}`}>
          <span className="text-blue-700">Fasty</span><span className="text-emerald-600">Turn</span>
        </span>
      )}
    </div>
  );
}

export function FastyTurnLogoMark({ size = 48, className = '' }: { size?: number; className?: string }) {
  return (
    <img
      src="/fastyturn-logo.svg"
      alt="FastyTurn"
      style={{ width: size, height: size }}
      className={`object-contain ${className}`}
    />
  );
}
