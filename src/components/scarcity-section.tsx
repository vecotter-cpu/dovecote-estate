export default function ScarcitySection() {
  return (
    <section id="scarcity" className="py-16 md:py-20" style={{ backgroundColor: 'var(--dark-green)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-8" style={{ fontFamily: 'Prata, serif' }}>
            A Scarcity Asset
          </h2>
          <p className="text-lg mb-6" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.85)', lineHeight: '1.75' }}>
            Stanley is a tightly held market with limited new supply. This release of six lots is a rare opportunity to secure land inside the township, supporting both lifestyle and long term positioning, with established demand underpinning short stay rental yields and long term capital growth.
          </p>
          <p className="text-lg" style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.85)', lineHeight: '1.75' }}>
            Whether held as a primary residence, a second home, or an income producing asset, the underlying scarcity is the same.
          </p>
        </div>
      </div>
    </section>
  );
}
