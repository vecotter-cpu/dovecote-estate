import { Home } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      title: "Full Infrastructure",
      description: "Equipped with modern utilities: power, water & stormwater."
    },
    {
      title: "Premium Location",
      description: "Walking distance to beaches, cafes & attractions"
    },
    {
      title: "NBN Ready",
      description: "High-speed internet connectivity ready"
    },
    {
      title: "Quality Roads",
      description: "Sealed entrances with footpaths"
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-mist-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-forest-green mb-6">
              A Once-in-a-Lifetime Opportunity
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              With residential land in Stanley virtually unobtainable in recent years, this exclusive peninsula subdivision presents a once in a lifetime opportunity to secure premium coastal land in one of Tasmania's most tightly held and historic townships. Offering both lifestyle appeal and investment potential, opportunities of this calibre are extremely limited — making this release rare, strategic, and highly desirable.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Just 40 minutes from Wynyard Airport, with daily flights direct to Melbourne, residents will enjoy premium connectivity while living in a pristine coastal paradise where coastal properties command premium prices.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Stanley's established infrastructure and services, combined with its award-winning tourism status and Bass Strait coastal location, make this one of Tasmania's most sought-after residential development opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-forest-green rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                    <Home size={16} color="#8B7040" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-forest-green mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src="/assets/Photo_6553681_DJI_81_jpg_5378036_0_20201220161216_photo_original_1751955954947.JPG" 
              alt="Aerial view of Stanley Nut and Dovecote Estate Stanley residential development" 
              className="rounded-xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
