export const WindowChromeDots = () => {
  const dotColors = ['#FF6058', '#FFBB30', '#28C840'] as const;
  return (
    <div className='flex gap-1.5'>
      {dotColors.map(c => (
        <div
          key={c}
          aria-hidden='true'
          style={{ width: 11, height: 11, borderRadius: '50%', background: c, opacity: 0.85 }}
        />
      ))}
    </div>
  );
};
