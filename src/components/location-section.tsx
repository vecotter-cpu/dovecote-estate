export default function LocationSection() {
  return (
    <section id="location" className="py-24 md:py-32 bg-midnight text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google Maps Location */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-white">Find Us in Stanley</h3>
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.7!2d145.2888!3d-40.7618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s40%20Dovecote%20Rd%2C%20Stanley!5e0!3m2!1sen!2sau!4v1641234567890!5m2!1sen!2sau"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dovecote Estate Stanley Location"
            />
          </div>
          <p className="text-gray-300 mt-4">
            Located at 40 Dovecote Rd, Stanley - Your gateway to coastal living in Tasmania
          </p>
        </div>
      </div>
    </section>
  );
}